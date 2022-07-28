import { StyleSheet, Text, View, ScrollView, Image, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../helpers/api';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    },
})
export default function Country({ route }) {
    const [country, setCountry] = useState([]);
    const [language, setLanguage] = useState()
    const [neighbors, setNeighbors] = useState()
    const curl = route.params.curl
    const getCountry = async () => {
        try {
            const { data } = await api.get(curl);
            setCountry(data);
            setLanguage(data.language[0].language)
            setNeighbors(data.neighbors.map(({ name }, id) => {

                return (
                    <View key={id}>
                        <Text>{name} ,</Text>
                        {console.log({name})}
                        
                    </View>
                )
            }))
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getCountry();
    }, []);
    console.log(country);

    const iso2 = country ?.names ?.iso2.toLowerCase();
    const image = `https://travelbriefing.org/sites/views/default/images/flags/4x3/${iso2}.svg`;
    const link = country ?.advise ?.UA ?.url;
    // console.log(language);
    console.log(neighbors);
    
    return (
        <View>
            <Text>{country ?.names ?.name}</Text>
            <Text>{country ?.names ?.full}</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: image,
                }}
            />
            <Text>{country ?.advise ?.UA ?.advise}</Text>
            <Text
                onPress={() => Linking.openURL(link)}>
                Full Report
            </Text>
            <Text>The currency in {country ?.names ?.name} is {country ?.currency ?.name}</Text>
            <Text>1 USD = {country ?.currency ?.rate} {country ?.currency ?.code}</Text>
            <Text>Language is {language && language}</Text>
            <Text>Neighbors are {neighbors && neighbors} </Text>
            <View>
                <Feather name="phone-call" size={24} color="black" />
                <Text>{country ?.telephone ?.calling_code}</Text>
                <FontAwesome5 name="ambulance" size={24} color="black" />
                <Text>{country ?.telephone ?.ambulance}</Text>
                <FontAwesome5 name="fire-alt" size={24} color="black" />
                <Text>{country ?.telephone ?.fire}</Text>
                <MaterialCommunityIcons name="police-station" size={24} color="black" />
                <Text>{country ?.telephone ?.police}</Text>
            </View>

            <Text><MaterialIcons name="electrical-services" size={24} color="black" /> Electricity </Text>
            <Text>{country ?.electricity ?.frequency} Herz</Text>
            <Text>{country ?.electricity ?.voltage} Volt</Text>
        </View>

    );
}  