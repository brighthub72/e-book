import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen2 from './screens/BottomTabScreens/HomeScreen2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import LibraryScreen from './screens/BottomTabScreens/LibraryScreen';
import ReadScreen from './screens/BottomTabScreens/ReadScreen';
import BottomTabScreen from './screens/BottomTabScreen';
import SplashScreen from './screens/SplashScreen';
import BookExpanded from './screens/BookExpanded';
import booksListScreen from './screens/booksListScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='splashScreen' component={SplashScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='bottomTab' component={BottomTabScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='bookExpanded' component={BookExpanded} options={{headerShown: false}}/> */}
        <Stack.Screen name='booksListScreen' component={booksListScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
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
