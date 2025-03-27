import { StyleSheet, Text } from "react-native";
import Screen from '../layout/Screen';
import UserView from '../entity/users/UserView';

const ContactViewScreen = ({ route }) => {
  const { user } = route.params;
  console.log('Received all user data:', user);

  return (
    <Screen>
      
      <UserView user={user} />
      
      <Text> </Text>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ContactViewScreen;
