import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import UserView from '../entity/UserView';

const ContactViewScreen = ({ navigation, route }) => {

  const { user, onDelete, onModify } = route.params;

  const gotoModifyScreen = () => navigation.navigate('ContactModifyScreen', { user, onModify });

  return (
    <Screen>
      <UserView user={user} onDelete={onDelete} onModify={gotoModifyScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ContactViewScreen;