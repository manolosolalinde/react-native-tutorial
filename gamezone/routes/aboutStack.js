import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
// import Header from '../shared/header';
import About from '../screens/about';


const { Navigator, Screen } = createStackNavigator();

export const AboutNavigator = () => (
  <Navigator headerMode="screen" screenOptions={
    {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 60 }
    }
  }>
    <Screen name="About" component={About}/>
  </Navigator>
);


// options={({ navigation }) => {
//   return {
//     headerTitle: () => <Header title='GameZone' navigation={navigation} />
//   }
// }} 