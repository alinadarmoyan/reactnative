import { StyleSheet, Text, View, ScrollView, Image, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../helpers/api';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


// Style start
const styles = StyleSheet.create({
    tinyLogo: {
        width: 150,
        height: 100,
        marginTop: 20,
    },
    container: {
        flex: 1,
        padding: 24,
        // backgroundColor: '#E6E7C2',
    
    },
    title1: {
        fontSize: 30,
        color: '#000',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    titleFull: {
        marginTop: 3,
        fontSize: 15,
        color: '#000',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    butSubFullReport: {
        marginTop: 16,
        marginBottom: 5,
        paddingVertical: 5,
        paddingBottom: 8,
        // borderWidth: 4,
        borderWidth: 1,
        borderColor: "#6E85B7",
        borderRadius: 6,
        backgroundColor: "#B2C8DF",
        color: "#20232a",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    currency: {
        marginVertical: 10,
        fontSize: 16,

    },
    currencyInUsd: {
        marginVertical: 10,
        fontSize: 16,

    },
    language: {
        marginVertical: 10,
        fontSize: 16,

    },
    naighbors: {
        marginVertical: 10,
        fontSize: 16,

    },
    containerNumbers: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: "row",
        flexWrap: "wrap",
    },

    number: {
        fontSize: 16,
        textAlign: "center",

    },

    containerNumbersNumber: {
        marginHorizontal: 10,
    },

    containerElectricity: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    containerElectricityText: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 20,
    },
    containerElectricityTexts1: {
        marginHorizontal: 10,

        marginBottom: 15,
    },
    containerElectricityText1: {
        fontSize: 16,
    },
})
//Style end



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
                        <Text>{name}, </Text>
                        {console.log({ name })}

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
        <ScrollView style={styles.container}>
            <Text style={styles.title1}>{country ?.names ?.name}</Text>
            <Text style={styles.titleFull}>{country ?.names ?.full}</Text>
          

            <Image
                style={styles.tinyLogo}
                source={{
                    uri: image,
                }}
            />

            {/* <Text>{country?.advise?.UA?.advise}</Text> */}
            <Text style={styles.butSubFullReport}
                onPress={() => Linking.openURL(link)}>
                Full Report
            </Text>
            <Text style={styles.currency}>The currency in {country ?.names ?.name} is {country ?.currency ?.name}</Text>
            <Text style={styles.currencyInUsd}>1 USD = {country ?.currency ?.rate} {country ?.currency ?.code}</Text>
            <Text style={styles.language}>Language is {language && language}</Text>
            <Text style={styles.naighbors}>Neighbors are: {neighbors && neighbors} </Text>

            <View style={styles.containerNumbers}>
                <View style={styles.containerNumbersNumber}>
                    <Feather name="phone-call" size={24} color="black" />
                    <Text style={styles.number}>{country ?.telephone ?.calling_code}</Text>
                </View>

                <View style={styles.containerNumbersNumber}>
                    <FontAwesome5 name="ambulance" size={24} color="black" />
                    <Text style={styles.number}>{country ?.telephone ?.ambulance}</Text>
                </View>

                <View style={styles.containerNumbersNumber}>
                    <FontAwesome5 name="fire-alt" size={24} color="black" />
                    <Text style={styles.number}>{country ?.telephone ?.fire}</Text>
                </View>

                <View style={styles.containerNumbersNumber}>
                    <MaterialCommunityIcons name="police-station" size={24} color="black" />
                    <Text style={styles.number}>{country ?.telephone ?.police}</Text>
                </View>

            </View>


            <View style={styles.containerElectricity}>
                <Text style={styles.containerElectricityText}>Electricity</Text>
                <MaterialIcons name="electrical-services" size={24} color="black" />
            </View>

            <View style={styles.containerElectricityTexts1}>
                <Text style={styles.containerElectricityText1}>{country ?.electricity ?.frequency} Herz</Text>
                <Text style={styles.containerElectricityText1}>{country ?.electricity ?.voltage} Volt</Text>
            </View>
        </ScrollView>

    );
}  