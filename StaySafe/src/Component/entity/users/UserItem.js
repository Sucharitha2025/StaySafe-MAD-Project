import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

const UserItem = ({ user, onSelect }) => {
  
  return (
    <Pressable onPress={() => onSelect(user)}>
      <View style={styles.item}>
        <Image source={{ uri: user.UserImageURL }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{user.UserFirstName} {user.UserUsername}</Text>
        </View>
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
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
  },
});

export default UserItem;