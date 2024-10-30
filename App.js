import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TA1Screen from './TAs Components/TA1';
import TA2Screen from './TAs Components/TA2';
import TA3Screen from './TAs Components/TA3';
import TA4Screen from './TAs Components/TA4';
import TA5Screen from './TAs Components/TA5';
import TA6Screen from './TAs Components/TA6';
import TA7Screen from './TAs Components/TA7';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TA1" component={TA1Screen} />
        <Stack.Screen name="TA2" component={TA2Screen} />
        <Stack.Screen name="TA3" component={TA3Screen} />
        <Stack.Screen name="TA4" component={TA4Screen} />
        <Stack.Screen name="TA5" component={TA5Screen} />
        <Stack.Screen name="TA6" component={TA6Screen} />
        <Stack.Screen name="TA7" component={TA7Screen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

/*     <View style={styles.container}>
      <Text> React Native TAs!</Text>
      <Button title="TA 1" onPress={() => alert('Button Clicked')} />
      <StatusBar style="auto" />
    </View> */
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>React Native TAs!</Text>
      <Button title="TA 1" onPress={() => navigation.navigate('TA1')} />
      <Button title="TA 2" onPress={() => navigation.navigate('TA2')} />
      <Button title="TA 3" onPress={() => navigation.navigate('TA3')} />
      <Button title="TA 4" onPress={() => navigation.navigate('TA4')} />
      <Button title="TA 5" onPress={() => navigation.navigate('TA5')} />
      <Button title="TA 6" onPress={() => navigation.navigate('TA6')} />
      <Button title="TA 7" onPress={() => navigation.navigate('TA7')} />
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
