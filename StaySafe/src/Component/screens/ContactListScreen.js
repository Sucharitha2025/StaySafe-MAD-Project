import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Screen from '../layout/Screen';

import initialUsers from '../../data/users.js';
const ContactListScreen = () => {
 
  const users = initialUsers;

  const handleSelect = () => alert('Item selected');

  return(
    <Screen>
      <ScrollView style={styles.container}>
      {users.map((user) => {
        return (
          <Pressable key={user.UserID} onPress={handleSelect}>
            <View style={styles.item}>
            <Image
              source={{ uri: user.UserImageURL }}
              style={styles.image}
            />
            <Text>
              {user.UserFirstname} {user.UserLastname} - {user.UserUsername} 
            </Text>
          </View>
          </Pressable>
        );
      })}
      </ScrollView>
      </Screen>
    
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

export default ContactListScreen;
