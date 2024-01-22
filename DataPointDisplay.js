
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataPointDisplay = ({ selectedDataPoint }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected Data Point:</Text>
      <Text style={styles.text}>X: {selectedDataPoint.x}</Text>
      <Text style={styles.text}>Y: {selectedDataPoint.y}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DataPointDisplay;
