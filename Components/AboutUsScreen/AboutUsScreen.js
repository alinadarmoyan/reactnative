import { StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,

    // backgroundColor: '#99E2FF',
  },
  title1: {
    fontSize: 30,
    color: '#000',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: "center",
  },
})
export default function AboutUsScreen() {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title1}>Error 404!!! <br/>Text not found</Text>
    </ScrollView>
  );
}     