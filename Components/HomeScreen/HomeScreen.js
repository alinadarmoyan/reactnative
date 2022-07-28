import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../helpers/api';
import Country from "../Country/Country";
import { useNavigation } from '@react-navigation/native';


// Style start
const styles = StyleSheet.create({
  home: {
    textAlign: "center",
  },

  homeText: {
    flex: 1,
    padding: 5,
    backgroundColor: "#eaeaea"
  },

  homeTitle: {
    marginTop: 16,
    paddingVertical: 5,
    paddingBottom: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
})
//Style end

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
    <ScrollView style={styles.home}>
      {
        countries.map(({ name, url }, index) => {
          let curl = url.substring(27);
          // console.log(curl);

          return (
            <View style={styles.homeText} key={index}>
              <Text style={styles.homeTitle} onPress={() =>
                navigation.navigate('Country', { curl })

              }>
                {name}
              </Text>

            </View>
          )
        })
      }
    </ScrollView>
  );
}