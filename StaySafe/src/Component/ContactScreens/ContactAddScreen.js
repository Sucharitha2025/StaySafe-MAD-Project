import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import UserForm from '../entity/UserForm';


const ContactAddScreen = ({ navigation, route }) => {
  const { onAdd } = route.params;
  
  const handleCancel = () => navigation.goBack();


  return (
    <Screen>
      <UserForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ContactAddScreen;