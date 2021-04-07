import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
 {/* //other options: "float", "screen" */}
    <Screen name="Home" component={Home} options={{ title: 'Reviews' }}/>
    <Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Details' }}/>
  </Navigator>
);

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);