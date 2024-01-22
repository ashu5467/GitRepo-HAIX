import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FollowerStats = () => {
  // Replace this dummy data with your actual data
  const socialMediaData = [
    { platform: "Facebook", number: 300 },
    { platform: "Instagram", number: 10000 }, // Example with 10,000
    { platform: "Twitter", number: 2000000 }, // Example with 2,000,000
    // Add more social media platforms as needed
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "m";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num.toString();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Social Media Stats</Text>
      {socialMediaData.map(({ platform, number }, index) => (
        <View key={index} style={styles.platformContainer}>
          <Text style={styles.platformText}>{platform}</Text>
          <View style={styles.dataContainer}>
            <Text style={styles.numberText}>{formatNumber(number)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align items at the top
    alignItems: "center",
    paddingTop: 20, // Add top padding
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  platformContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
  },
  platformText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    maxWidth: "50%",
  },
  numberText: {
    fontSize: 18,
  },
});

export default FollowerStats;
