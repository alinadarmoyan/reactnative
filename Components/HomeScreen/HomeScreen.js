<<<<<<< HEAD
import { StyleSheet, Text, View , ScrollView} from 'react-native';
=======
import { StyleSheet, Text, View, ScrollView } from 'react-native';
>>>>>>> 76f0edb58451f9c1dd5671e5942c53999cda705c
import React, { useEffect, useState } from 'react';
import api from '../helpers/api';


export default function HomeScreen({name,url}) {

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
<<<<<<< HEAD
    <ScrollView>
=======
    <ScrollView >
>>>>>>> 76f0edb58451f9c1dd5671e5942c53999cda705c
      {/* <Text>Home!</Text> */}
      {
        ccountries.map(({ name, url }, index) => {
          return(
            <ScrollView>
              <Text style={{margin: 10}}>{name}</Text>
              <Text style={{margin: 20}}>{url}</Text>
            </ScrollView>
          )
        })
      }
    </ScrollView>
  );
}