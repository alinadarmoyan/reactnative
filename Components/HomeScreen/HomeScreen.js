import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function HomeScreen({name, url}) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Home!</Text> */}
      <Text style={{margin: 10}}>{name}</Text>
      <Text style={{margin: 20}}>{url}</Text>
    </View>
  );
}