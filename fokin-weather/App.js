import React from 'react';
import Alert from 'react-native';
import Loading from "./Loading"
import * as Location from 'expo-location';

export default class App extends React.Component {
  state = {
    isLoding:true
  }
  
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords :{latitude,longitude}} = await Location.getCurrentPositionAsync()
      // Send to API and get weather
      this.setState({
        isLoding:false,
      })
    } catch (error) {
      Alert.alert("Can't find you.","So Sad")
    }
  }

  componentDiDMount() {
    this.getLocation();
  }
  render() {
    const {isLoding} = this.state;
    return (
      isLoding ? <Loading></Loading> : null
    )
  }
}

