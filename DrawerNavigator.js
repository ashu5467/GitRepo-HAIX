import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Text } from 'react-native';
import ButtonComponent from './ButtonComponent';
import FollowerStats from './FollowerStats';
import SentimentScore from './SentimentScore';
import SentimentCategoryTimeline from './SentimentCategoryTimeline';
import SocialMediaSentimentTimeline from './SocialMediaSentimentTimeline';
import AverageSentimentTimeline from './AverageSentimentTimeline';
import EngagementTrendSummary from './EngagementTrendSummary';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>Haix</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const handleButtonPress = (screenName) => {
    // Handle navigation to the selected screen
    console.log(`Navigating to ${screenName}`);
  };

  return (
    <Drawer.Navigator initialRouteName="Follower Stats" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Follower Stats">
        {() => <FollowerStats />}
      </Drawer.Screen>
      <Drawer.Screen name="SentimentScore">
        {() => <SentimentScore />}
      </Drawer.Screen>
      <Drawer.Screen name="SocialMediaSentimentTimeline">
        {() => <SocialMediaSentimentTimeline />}
      </Drawer.Screen>
      <Drawer.Screen name="SentimentCategoryTimeline">
        {() => <SentimentCategoryTimeline />}
      </Drawer.Screen>
      <Drawer.Screen name="AverageSentimentTimeline">
        {() => <AverageSentimentTimeline />}
      </Drawer.Screen>
      <Drawer.Screen name="EngagementTrendSummary">
        {() => <EngagementTrendSummary />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
