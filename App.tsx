import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import NativeLocalDate from './specs/NativeLocalDate';
import {useEffect, useState} from "react";

export default function App() {

  const [date, setDate] = useState<string>();

  useEffect(() => {
     const date = NativeLocalDate.getDate("dd-MM-yyyy");
     setDate(date);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
