import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen.js';
import UserList from '../entity/UserList.js';

import initialUsers from '../../data/user.js';

const ContactListScreen = ({navigation}) => {
  const[users, setUsers] = useState(initialUsers);
 

  const handleSelect = (user) => navigation.navigate('ContactViewScreen', { user } );
  const handleDelete = (user) =>
    setUsers(users.filter((item) => item.UserID !== user.UserID));

  return(
    <Screen>
      <UserList users={users} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create ({});

export default ContactListScreen;