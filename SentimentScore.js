import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SentimentScore = () => {
  // Replace this dummy data with your actual data
  const socialMediaData = [
    { platform: "Facebook", percentage: 30 },
    { platform: "Instagram", percentage: 100 }, // Example with 100%
    { platform: "Twitter", percentage: 20 },
    // Add more social media platforms as needed
  ];

  // Find the maximum percentage to calculate flex ratios
  const maxPercentage = Math.max(...socialMediaData.map(item => item.percentage));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sentiment Score</Text>
      {socialMediaData.map(({ platform, percentage }, index) => (
        <View key={index} style={styles.platformContainer}>
          <Text style={styles.platformText}>{platform}</Text>
          <View style={styles.dataContainer}>
            <View style={[styles.percentageBar, { flex: percentage / maxPercentage }]} />
            <Text style={styles.percentageText}>{percentage}%</Text>
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
  percentageBar: {
    backgroundColor: "#3498db",
    height: 20,
    borderRadius: 5,
  },
  percentageText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default SentimentScore;
