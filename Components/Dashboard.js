import React from "react";
import { View, StyleSheet } from "react-native";
// import SocialMediaCards from "./Components/SocialMediaCards";

const Dashboard = () => {
  const socialMediaPlatforms = [
    { platform: "Facebook", icon: "facebook" },
    { platform: "Instagram", icon: "instagram" },
    { platform: "Twitter", icon: "twitter" },
    // Add more social media platforms as needed
  ];

  const handlePlatformPress = (platform) => {
    // Handle the press event for each platform
    console.log(`Pressed on ${platform} card.`);
  };

  return (
    <View style={styles.container}>
      {socialMediaPlatforms.map(({ platform, icon }, index) => (
        <SocialMediaCards
          key={index}
          platform={platform}
          icon={icon}
          onPress={() => handlePlatformPress(platform)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default Dashboard;
