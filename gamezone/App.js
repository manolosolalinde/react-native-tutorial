// components installation:
// expo install expo-font @expo-google-fonts/nunito
// npm install expo-app-loading

import React from 'react';
import AppLoading from 'expo-app-loading';
import { AppDrawer } from "./routes/drawer";
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

export default function App() {
    //   let [fontsLoaded] = useFonts({
    //     Inter_900Black,
    //   });
    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }   
    else {
        return <AppDrawer />;
    }
}