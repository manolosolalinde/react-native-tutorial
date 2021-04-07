import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

export const HomeNavigator = () => (
  // <NavigationContainer>
    <Navigator headerMode="screen" screenOptions={
      {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
      }
    }>
      {/* //other options: "float", "screen" */}
      <Screen name="Home" component={Home} options={{ title: 'Reviews' }} />
      <Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Details' }} />
    </Navigator>
  //</NavigationContainer>
);