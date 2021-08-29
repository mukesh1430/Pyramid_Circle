import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const Circular = props => {
  return (
    <View style={{justifyContent: 'center'}}>
      <View style={styles.outerRing}>
        <ProgressCircle
          style={{alignContent: 'center'}}
          percent={props.value * 10}
          radius={80}
          borderWidth={4}
          color="#fff"
          shadowColor="#89A1AC"
          bgColor="#89A1AC">
          <View style={styles.innerRing}>
            <Text style={{fontSize: 22, fontWeight: '700'}}>
              {'' + props.value}
            </Text>
          </View>
        </ProgressCircle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a6272ff',
    alignItems: 'center',
  },
  outerRing: {
    width: 220,
    height: 220,
    backgroundColor: '#3a6272ff',
    borderRadius: 110,
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 3,
    borderColor: '#678',
    alignItems: 'center',
  },
  innerRing: {
    width: 110,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Circular;
