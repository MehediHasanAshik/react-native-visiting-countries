import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Countries from './Components/Countries';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Visiting Countries</Text>
      <Countries/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },
});
