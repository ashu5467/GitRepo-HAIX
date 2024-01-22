import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const AverageSentimentTimeline = () => {
  
  const averageSentimentData = [
    { date: '2022-01-01', averageSentiment: 0.8, followers: 50000, platform: 'Facebook' },
    { date: '2022-01-02', averageSentiment: 0.6, followers: 60000, platform: 'Instagram' },
    { date: '2022-01-03', averageSentiment: 0.7, followers: 75000, platform: 'Twitter' },
    { date: '2022-01-04', averageSentiment: 0.5, followers: 40000, platform: 'LinkedIn' },
    { date: '2022-01-05', averageSentiment: 0.9, followers: 90000, platform: 'Pinterest' },
    { date: '2022-01-06', averageSentiment: 0.4, followers: 30000, platform: 'Snapchat' },
    { date: '2022-01-07', averageSentiment: 0.6, followers: 80000, platform: 'TikTok' },
    
  ];

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 2,
    decimalPlaces: 1,
    horizontalLabelRotation: 90, 
  };

  const barChart = {
    labels: averageSentimentData.map((dataPoint) => dataPoint.platform),
    datasets: [
      {
        data: averageSentimentData.map((dataPoint) => dataPoint.followers),
        color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Average Sentiment Timeline</Text>

      
      <BarChart
        data={barChart}
        width={300}
        height={200}
        chartConfig={{ ...chartConfig, useShadowColorFromDataset: false, yAxisInterval: 1 }}
        style={styles.chart}
        yAxisSuffix=""
      />
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
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default AverageSentimentTimeline;
