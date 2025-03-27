import { Alert, StyleSheet, LogBox, Text, View, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import useLoad from '../API/useLoad';
import useStore from '../store/useStore';
import API from '../API/API';
import Screen from '../layout/Screen';
import RenderCount from '../UI/RenderCount';
import Icons from '../UI/Icon';
import { Button, ButtonTray } from '../UI/Button';
import UserList from '../entity/UserList';


const ContactListScreen = ({ navigation }) => {

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);


const usersEndpoint = 'https://softwarehub.uk/unibase/staysafe/v1/api/users';
const loggedinUserKey = 'loggedinUser';
const favouritesKey = 'userFavourites';

const [users, setUsers, isLoading, loadUsers] = useLoad(usersEndpoint);
const [loggedinUser] = useStore(loggedinUserKey, null);
const [favourites, saveFavourites] = useStore(favouritesKey, []);

const augmentUsersWithFavourites = () => {
  const modifyUser = (user) => ({
    ...user,
    UserFavourite: favourites.includes(user.UserID),
  });
  const augmentedUsers = users.map(modifyUser);
  augmentedUsers.length > 0 && setUsers(augmentedUsers);
  };

  useEffect(() => {
    augmentUsersWithFavourites(); 
  }, [isLoading]);


  const handleFavourite = (user) => {
    const isFavourite = !user.UserFavourite;
    const updateUser = (item) => 
      item.UserID === user.UserID ? { ...item, UserFavourite: isFavourite } : item;
    const updatedUserList = users.map(updateUser);
    setUsers(updatedUserList);

    const updatedFavouritesList = updatedUserList
      .filter((item) => item.UserFavourite)
      .map((item) => item.UserID);
    saveFavourites(updatedFavouritesList);
  };

  const onAdd = async (user) => {
    const result = await API.post(usersEndpoint, user);
    if( result.isSuccess ) {
      loadUsers(usersEndpoint)
      navigation.goBack();
    } else Alert.alert(result.message);
  };


  const onModify = async (user) => {
    const putEndpoint = `${usersEndpoint}/${user.UserID}`;
    const result = await API.put(putEndpoint, user);
    if (result.isSuccess) {
      loadUsers(usersEndpoint);
      navigation.navigate('ContactViewScreen', { user, onDelete, onModify });
    } else Alert.alert(result.message);
  };


  const onDelete = async (user) => {
    const deleteEndpoint = `${usersEndpoint}/${user.UserID}`;
    const result = await API.delete(deleteEndpoint, user);
    if( result.isSuccess ) {
      loadUsers(usersEndpoint)
      navigation.goBack();
    } else Alert.alert(result.message);
  };
    

  const gotoAddScreen = () => navigation.navigate('ContactAddScreen', { onAdd });
  const gotoViewScreen = (user) =>
    navigation.navigate('ContactViewScreen', { user, onDelete, onModify });
    
  return (
    <Screen>
      <RenderCount />
      {loggedinUser && <Text style={styles.welcome}>Welcome {loggedinUser.UserFirstname}</Text>}

      <View style={styles.container}>
      <ButtonTray>
        <Button label='Add' icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      {isLoading && (
        <View style={styles.loading}> 
          <Text>Retrieving records from {usersEndpoint} ...</Text>
          <ActivityIndicator size='large' />
        </View>
      )}

      <UserList users={users} onSelect={gotoViewScreen} onFavourite={handleFavourite} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({

  welcome: {
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    gap: 15,
  },
  loading: {
    height: 100,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ContactListScreen;