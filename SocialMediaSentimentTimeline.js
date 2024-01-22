import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const SocialMediaSentimentTimeline = () => {
  
  const sentimentData = [
    { date: '2022-01-01', value: 200 },
    { date: '2022-01-02', value: 500 },
    { date: '2022-01-03', value: 120 },
    { date: '2022-01-03', value: 20 },
    
  ];

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 2, 
    decimalPlaces: 0,
  };

  const data = {
    labels: sentimentData.map((dataPoint) => dataPoint.date),
    datasets: [
      {
        data: sentimentData.map((dataPoint) => dataPoint.value),
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={300}
        height={200}
        chartConfig={{ ...chartConfig, useShadowColorFromDataset: false, yAxisInterval: 1 }}
        style={styles.chart}
        yScaleLog={true} 
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
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default SocialMediaSentimentTimeline;
