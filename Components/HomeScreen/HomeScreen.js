import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../helpers/api'


export default function HomeScreen({name, url}) {

  const [countries, setCountries] = useState([]);
  const getCountries = async () => {
    try {
      const { data } = await api.get('countries.json');
      setCountries(data);
    }
    catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getCountries();

  }, []);
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Home!</Text> */}
      {
        countries.map(({ name, url }, index) => {
          return(
            <View>
              <Text style={{margin: 10}}>{name}</Text>
              <Text style={{margin: 20}}>{url}</Text>
            </View>
          )
        })
      }
    </View>
  );
}