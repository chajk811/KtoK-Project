/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {GOOGLE_PROVIDER} from 'react-native-maps';
import SplashScreen from 'react-native-splash-screen';
import StartScreen from './src/StartScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  mapView: {
    flex: 1,
  },
});

export default class App extends React.Component {
  componentDidMount() {
    //do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }

  render() {
    return (
      <StartScreen />
    );
  }
}
