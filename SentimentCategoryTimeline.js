import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';

const SentimentCategoryTimeline = () => {
 
  const socialMediaData = [
    {
      date: '2022-01-01',
      facebook: 50,
      instagram: 30,
      twitter: 20,
    },
    {
      date: '2022-01-02',
      facebook: 40,
      instagram: 35,
      twitter: 25,
    },
    {
      date: '2022-01-03',
      facebook: 30,
      instagram: 40,
      twitter: 30,
    },
    
  ];

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 2,
    decimalPlaces: 0,
  };

  const stackedBarChartSocialMedia = {
    labels: socialMediaData.map((dataPoint) => dataPoint.date),
    legend: ['Facebook', 'Instagram', 'Twitter'],
    data: socialMediaData.map((dataPoint) => [
      dataPoint.facebook,
      dataPoint.instagram,
      dataPoint.twitter,
    ]),
    barColors: ['#3b5998', '#c32aa3', '#1da1f2'], 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Social Media Followers Timeline</Text>

    
      <StackedBarChart
        data={stackedBarChartSocialMedia}
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

export default SentimentCategoryTimeline;
