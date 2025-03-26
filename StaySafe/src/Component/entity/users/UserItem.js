import { Pressable, StyleSheet, Text, View, Image  } from 'react-native';


const UserItem = ({ user, onSelect }) => {
  return (
  <Pressable onPress={ () => onSelect(user)}>
    <View style={styles.item}>
      <Image source={{ uri: user.UserImageURL  }} style={styles.image} />
      <Text style={styles.text}>
        {user.UserFirstName} {user.UserLastname} - {user.UserUsername}
      </Text>
    </View>
  </Pressable>
  );
};


const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
    },
    item: {
      paddingVertical: 15,
      borderTopWidth: 1,
      borderColor: 'lightgray',
      flexDirection: 'row',
    },
    image: {
      width: 40, 
      height: 40, 
      borderRadius: 20, 
      marginRight: 10, 
    },
    text: {
      fontSize: 16,
    },
  });

  export default UserItem;