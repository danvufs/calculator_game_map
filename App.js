import { StyleSheet, Text, View } from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './screens/Map';
import Game from './screens/Game';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#6e995d',
  },
  label: {
    fontSize: 16,
    color: '#444',
  },
  indicator: {
    backgroundColor: '#4743e2',
  },
});

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        labelStyle: styles.label,
        activeTintColor: '#Fa6e04',
        inactiveTintColor: '#BBB',
        indicatorStyle: styles.indicator,
      }}
    >
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Jumping Game" component={Game} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
