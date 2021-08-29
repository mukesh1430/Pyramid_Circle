import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';

import ProgressCircle from 'react-native-progress-circle';
import Slider from '@react-native-community/slider';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 0,
    };
  }
  componentDidMount = async () => {};

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: 220,
            height: 220,
            backgroundColor: '#3a6272ff',
            borderRadius: 110,
            justifyContent: 'center',
            borderStyle: 'dashed',
            borderWidth: 3,
            borderColor: '#678',
            alignItems: 'center',
          }}>
          <ProgressCircle
            style={{alignContent: 'center'}}
            percent={this.state.sliderValue * 10}
            radius={80}
            borderWidth={4}
            color="#fff"
            shadowColor="#89A1AC"
            bgColor="#89A1AC">
            <View
              style={{
                width: 110,
                height: 110,
                backgroundColor: '#fff',
                borderRadius: 55,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18}}>
                {'' + this.state.sliderValue * 10 + '%'}
              </Text>
            </View>
          </ProgressCircle>
        </View>

        <Slider
          style={{width: 200, height: 40, marginTop: 20}}
          minimumValue={0}
          maximumValue={10}
          step={1}
          onValueChange={value => {
            this.setState({sliderValue: value});
          }}
          thumbTintColor="#6EDBE6"
          minimumTrackTintColor="#6EDBE6"
          maximumTrackTintColor="#fff"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#3a6272ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen1;
