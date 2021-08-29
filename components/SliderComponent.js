import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const SliderComponent = props => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Slider
        style={{width: 200, height: 40, marginTop: 20}}
        minimumValue={0}
        maximumValue={10}
        step={1}
        onValueChange={value => {
          props.onChanged(value);
        }}
        thumbTintColor="#6EDBE6"
        minimumTrackTintColor="#6EDBE6"
        maximumTrackTintColor="#fff"
      />
    </View>
  );
};

export default SliderComponent;
