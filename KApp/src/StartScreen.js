import React from 'react';
import { Button, View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import MapScreen from './map/MapScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  button: {
    flex: 1,
  },
  lineView: {
    flex: 1,
  },
  emptyView: {
    flex: 3,
  },
});

export default class StartScreen extends React.Component {

  onClickPath = () => {
    return <MapScreen/>;
  }

  render() {
    return (
      <View>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../assets/images/startscreen.png')}
          resizeMode="cover"
        >
          <View style={{flex: 5}}/>

          <Button title="길찾기" onPress={this.onClickPath} />

          <View style={{flex: 1}}/>

          <Button title="카풀 신청/현황" onPress={this.onClickPath}/>
          
          <View style={{flex: 3}}/>

        </ImageBackground>
      </View>
    );
  }
}
