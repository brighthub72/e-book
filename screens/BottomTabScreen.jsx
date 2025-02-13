import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen2 from './BottomTabScreens/HomeScreen2';
import { MaterialIcons} from '@expo/vector-icons';
import LibraryScreen from './BottomTabScreens/LibraryScreen';
import ReadScreen from './BottomTabScreens/ReadScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle:{
        backgroundColor: 'white',
        height: 65,
        paddingTop: 5,
        borderRadius: 15,
        
        
      },
      tabBarActiveTintColor: '#0066FF',
      tabBarInactiveTintColor: '#8B8B94'
    }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen2}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
       title: 'Home'
        }}
      />
      <Tab.Screen
        name="read"
        component={ReadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="book" size={24} color={color} />
          ),
          title: 'Daily Motivation'
        }}
      />
      <Tab.Screen
        name="library"
        component={LibraryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
          title: 'Library'
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabScreen

const styles = StyleSheet.create({})