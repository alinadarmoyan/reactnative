import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import SettingsScreen from './Components/SettingsScreen/SettingsScreen';
import Country from "./Components/Country/Country";
import React, { useEffect, useState } from 'react';
// import api from './helpers/api';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const HomeNavigator= createNativeStackNavigator();
const HomeNavigation = ()=>{
    return (
      <HomeNavigator.Navigator>
        <HomeNavigator.Screen name="Home" component={HomeScreen} options={{
          title: 'All countries',
        }} />
        <HomeNavigator.Screen name="Country" component={Country}/>
      </HomeNavigator.Navigator>
    )
}
export default function App() {

  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNavigation} options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: () => {
            return (
              <Entypo name="home" size={24} color="black" />
            );
          },
        }} />

        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          title: 'Settings',
          tabBarIcon: () => {
            return (
              <Ionicons name="settings" size={24} color="black" />
            );
          },
          tabBarActiveTintColor: 'tomato'
        }} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}


