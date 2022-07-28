import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../helpers/api';

export default function Country({route}) {
    const [country, setCountry] = useState([]);
    const curl = route.params.curl
    const getCountry = async () => {
        try {
            const {data} = await api.get(curl);
            setCountry(data);
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getCountry();
    }, []); 
    console.log(country);
    
    return (
        <View>
            <Text>{country?.names?.full}</Text>
        </View>
       
    );
}  