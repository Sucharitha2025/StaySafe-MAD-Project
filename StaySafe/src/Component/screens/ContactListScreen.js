import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import UserList from '../entity/users/UserList.js';

import initialUsers from '../../data/users.js';

const ContactListScreen = () => {
 
  const users = initialUsers;

  const handleSelect = (user) => alert(`Item ${user.UserID} selected`);

  return(
    <Screen>
      <UserList users={users} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create ({
  container: {},
});

export default ContactListScreen; 



