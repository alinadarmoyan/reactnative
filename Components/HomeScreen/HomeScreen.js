import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../helpers/api';
import Country from "../Country/Country";


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
    <ScrollView >
      {/* <Text>Home!</Text> */}
      {
        countries.map(({ name, url }, index) => {
          let curl = url.substring(27);
          // console.log(curl);
                
            return(
              <ScrollView>
                <Text onPress={() => {
                  
                  // alert(curl);
                  // console.log(curl);
                  
                  <Country curl={curl}/> 
                  }}>
                  {name}
                </Text>
                {/* <Text style={{margin: 20}}>{names.full}</Text> */}
              </ScrollView>
            )
        })
      }
    </ScrollView>
  );
}