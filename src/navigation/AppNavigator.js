import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';
import BKIHesaplamaScreen from '../screens/BKIHesaplamaScreen';
import BesinEkleScreen from '../screens/BesinEkleScreen';
import AdimsayarScreen from '../screens/AdimsayarScreen';
import HaftalikAdimlarScreen from '../screens/HaftalikAdimlarScreen';
import BilgilendirmeScreen from '../screens/BilgilendirmeScreen';
import HakkimizdaScreen from '../screens/HakkimizdaScreen';
import IletisimScreen from '../screens/IletisimScreen';
import FindriskScreen from '../screens/FindriskScreen';
import SonTestlerScreen from '../screens/SonTestlerScreen';
import SSSScreen from '../screens/SSSScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false, gestureEnabled: true }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profil" component={ProfilScreen} />
        <Stack.Screen name="BKIHesaplama" component={BKIHesaplamaScreen} />
        <Stack.Screen name="BesinEkle" component={BesinEkleScreen} />
        <Stack.Screen name="Adimsayar" component={AdimsayarScreen} />
        <Stack.Screen name="HaftalikAdimlar" component={HaftalikAdimlarScreen} />
        <Stack.Screen name="Bilgilendirme" component={BilgilendirmeScreen} />
        <Stack.Screen name="Hakkimizda" component={HakkimizdaScreen} />
        <Stack.Screen name="Iletisim" component={IletisimScreen} />
        <Stack.Screen name="OnTestler" component={FindriskScreen} />
        <Stack.Screen name="SonTestler" component={SonTestlerScreen} />
        <Stack.Screen name="SSS" component={SSSScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
