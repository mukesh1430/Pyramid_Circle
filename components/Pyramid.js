import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//****************** Pyramid Level  */

const Pyramid = props => {
  return (
    <View
      style={{
        width: props.width,
        height: 0,
        marginTop: 10,
        borderTopWidth: 25,
        borderTopColor: props.color,
        borderLeftWidth: 15,
        borderRightWidth: 15,

        borderTopStartRadius: props.width / 9,
        borderTopEndRadius: props.width / 9,
        borderBottomEndRadius: props.width / 9,
        borderBottomStartRadius: props.width / 9,

        borderLeftColor: 'transparent',

        borderRightColor: 'transparent',
        borderStyle: 'solid',
      }}
    />
  );
};

const styles = StyleSheet.create({
  trapezoid: {},
});

export default Pyramid;
