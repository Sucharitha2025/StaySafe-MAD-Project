import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/UI/Button'

export const App = () => {
  return (
    <View style={styles.container}>
      <Text>Help</Text>
      <StatusBar style="auto" />
      <Button label='Panic button' onClick={() => alert.Alert('Warning Button Pressed')}
        color="red"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;