import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Speech from './Speech.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Speech/>
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
