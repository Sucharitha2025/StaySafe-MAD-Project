import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from './src/UI/Button'

export const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>*Warning this button will send an alert to emergency contacts</Text>
      <StatusBar style="auto" />
      <Button label='SOS' onPress={() => Alert.alert('Warning Button Pressed: Emergency notification sent')}
        color= 'red'
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App; 