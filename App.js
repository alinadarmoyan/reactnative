import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import SettingsScreen from './Components/SettingsScreen/SettingsScreen';
import React, { useEffect, useState } from 'react';
import api from './Components/helpers/api';

const Tab = createBottomTabNavigator();

export default function App() {
  const [countries,setCountries]=useState([]);
  const getCountries = async()=>{
    try{
      const {data} = await api.get('countries.json');
      setCountries(data);
    }
    catch(error){
      console.log(error);
      
    }
  }
  useEffect( ()=>{
    getCountries();

  },[]);
  return (
    <>
      {
      countries.map(({name, url},index)=>{
        return(
          // <Post name={post.title} year={post.body} key={post.id} titleHender={titleHendler}/>
          <HomeScreen name={name} url={url} key={index} />
        )
      })
      }
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
    
  );
}


