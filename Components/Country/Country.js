import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../helpers/api';

export default function Country({curl}) {
    const [country, setCountry] = useState([]);
    console.log(curl);
    const getCountry = async () => {
        try {
            const { info } = await api.get({curl});
            setCountry(info);
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getCountry();
    }, []); 
    return (
        country.map(({names}) => {
            // return(
            //     <View>
            //         <Text>{names.full}</Text>
            //     </View>
            // )
            console.log(names.full)
        })
       
    );
}  