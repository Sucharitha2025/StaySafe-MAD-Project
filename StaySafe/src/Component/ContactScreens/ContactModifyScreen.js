import { StyleSheet, Text } from 'react-native';
import Screen from '../layout/Screen';
import UserForm from '../entity/UserForm';

export const ContactModifyScreen = ({navigation, route}) => {

  const {user, onModify} = route.params;


  const handleCancel = () => navigation.goBack();


  return (
    <Screen>
      <UserForm originalUser={user} onSubmit={onModify} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ContactModifyScreen;