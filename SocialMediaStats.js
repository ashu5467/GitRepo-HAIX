import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SocialMediaStats = () => {
  // Replace this dummy data with your actual data
  const socialMediaData = [
    { platform: 'Facebook', percentage: 30 },
    { platform: 'Instagram', percentage: 25 },
    { platform: 'Twitter', percentage: 20 },
    // Add more social media platforms as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Social Media Stats</Text>
      {socialMediaData.map(({ platform, percentage }, index) => (
        <View key={index} style={styles.platformContainer}>
          <Text style={styles.platformText}>{platform}</Text>
          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  platformContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  platformText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  percentageText: {
    fontSize: 18,
  },
});

export default SocialMediaStats;
