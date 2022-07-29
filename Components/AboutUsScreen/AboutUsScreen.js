import { StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,

    // backgroundColor: '#99E2FF',
  },
  title1: {
    marginVertical: 60,
    fontSize: 30,
    color: '#000',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: "center",
    paddingVertical: 30,
    paddingHorizontal: 30,
    // paddingBottom: 15,
    // borderWidth: 4,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    // backgroundColor: "#5BC0DC",
    color: "#20232a",
    textAlign: "center",
    fontSize: 25,
   
  },
})
export default function AboutUsScreen() {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title1}>
      This app is very usefull for travellers around the world. Everyone can access the set of information that is considered a prerequisite to having a hassle-free journey. The information that our app provides includes the following: name, currency, language, neighbors, extra-phone-numbers, electricity.
      </Text>
    </ScrollView>
  );
}     