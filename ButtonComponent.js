import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ButtonComponent = ({ onPress }) => {
    const navigation = useNavigation();
    
    const handleFollowerStatsPress = () => {
     
        navigation.navigate('FollowerStats');    
      };
      
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onPress(1)}>
        <Text style={styles.buttonText}>Follower Stats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPress(2)}>
        <Text style={styles.buttonText}>Sentiment Score</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPress(3)}>
        <Text style={styles.buttonText}>Social Media Sentiment Timeline</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPress(4)}>
        <Text style={styles.buttonText}>Sentiment Category Timeline</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPress(5)}>
        <Text style={styles.buttonText}>Average Sentiment Timeline</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPress(6)}>
        <Text style={styles.buttonText}>Engagement Trend Summary</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
