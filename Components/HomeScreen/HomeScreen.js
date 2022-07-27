import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../helpers/api';
import Country from "../Country/Country";
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();
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
      {
        countries.map(({ name, url }, index) => {
          let curl = url.substring(27);
          // console.log(curl);
                
            return(
              <ScrollView>
                <Text onPress={() => 
                  navigation.navigate(Country({curl}))
                  // alert(curl);
                  // console.log(curl);
                  // <View>
                    // <Country curl={curl} key={index}/> 
                  // </View>
                  }>
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