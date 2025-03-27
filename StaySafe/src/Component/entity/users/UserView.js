import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserView = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.UserImageURL }} style={styles.image} />
      <Text style={styles.name}>{user.UserFirstname} {user.UserLastname}</Text>
      <Text style={styles.phone}>{user.UserPhone}</Text>
      <Text style={styles.username}>{user.UserUsername}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    phone: {
      fontSize: 16,
    },
    username: {
      fontSize: 16,
    },
  });
  
  export default UserView;
  
