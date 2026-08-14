import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import NativeLocalDate from './specs/NativeLocalDate';
import {useEffect, useState} from "react";

export default function App() {

  const [date, setDate] = useState<string>();
  const [asyncDate, setAsyncDate] = useState<string>();

  useEffect(() => {
    setDate(NativeLocalDate.getDate("dd-MM-yyyy"));
    NativeLocalDate.getDateAsync("yyyy-MM-dd HH:mm:ss").then(setAsyncDate);
  }, []);

  return (
    <View style={styles.container}>
      <Text>sync: {date}</Text>
      <Text>async: {asyncDate}</Text>
      <StatusBar style="auto" />
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
