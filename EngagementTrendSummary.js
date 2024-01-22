import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

const EngagementTrendSummary = () => {
  // Replace this dummy data with your actual data
  const engagementData = [
    { date: '2022-01-01', lineValue: 200, barValue: 50, platform: 'Facebook' },
    { date: '2022-01-02', lineValue: 500, barValue: 120, platform: 'Instagram' },
    { date: '2022-01-03', lineValue: 120, barValue: 30, platform: 'Twitter' },
    { date: '2022-01-04', lineValue: 20, barValue: 80, platform: 'LinkedIn' },
    { date: '2022-01-05', lineValue: 300, barValue: 70, platform: 'Pinterest' },
    { date: '2022-01-06', lineValue: 150, barValue: 90, platform: 'Snapchat' },
    { date: '2022-01-07', lineValue: 250, barValue: 40, platform: 'TikTok' },
    // Add more data points as needed
  ];

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 2,
    decimalPlaces: 0,
  };

  const lineChart = {
    labels: engagementData.map((dataPoint) => dataPoint.date),
    datasets: [
      {
        data: engagementData.map((dataPoint) => dataPoint.lineValue),
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const barChart = {
    labels: engagementData.map((dataPoint) => dataPoint.date),
    datasets: [
      {
        data: engagementData.map((dataPoint) => dataPoint.barValue),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Engagement Trend Summary</Text>

   
      <LineChart
        data={lineChart}
        width={300}
        height={200}
        chartConfig={{ ...chartConfig, useShadowColorFromDataset: false, yAxisInterval: 1 }}
        style={styles.chart}
        yAxisSuffix=""
      />


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

export default EngagementTrendSummary;
