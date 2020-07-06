import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {GOOGLE_PROVIDER} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  mapView: {
    flex: 1,
  },
});

export default class MapScreen extends React.Component {
  componentDidMount() {} 

  render() {
    return ( 
      <View style={styles.container}> 
        <MapView
          provider={GOOGLE_PROVIDER}
          style={styles.mapView}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> 
      </View> 
    ); 
  }
}
