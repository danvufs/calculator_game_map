import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default class App extends React.Component {
  render() {
    return (
      <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 42.9373324523389,
         longitude: -81.25529285740758,
         latitudeDelta: 0.0222,
         longitudeDelta: 0.0121
        }}>
        <Marker
          coordinate={{
            latitude: 42.9373324523389,
            longitude: -81.25529285740758,
          }}>
        </Marker>
        </MapView>
    );
  }
}