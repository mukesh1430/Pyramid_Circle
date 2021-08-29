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

import Pyramid from './../components/Pyramid';

import Colors from './../utils/colors';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pyramidWidth: [320, 260, 200, 140, 80],
      selectedrow: 100,
      level: '',
    };
  }
  componentDidMount = async () => {};

  handleNextPress = () => {};

  onCancel = () => {
    this.props.navigation.pop();
  };

  drawPyramid = () => {
    const {pyramidWidth, selectedrow} = this.state;

    return pyramidWidth.map((width, index) => {
      console.log(index);
      return (
        <TouchableOpacity
          style={[styles.pyramidContainer]}
          key={index}
          onPress={() => {
            let level = '';
            if (index > 3) {
              level = 'Low';
            } else if (index > 1) {
              level = 'Medium';
            } else {
              level = 'High';
            }
            this.setState({selectedrow: index, level});
          }}>
          <Pyramid
            width={width}
            color={index < selectedrow ? Colors.gray : '#fff'}
          />
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lineContainer}>
          <View style={[styles.lineStyle, {backgroundColor: '#fff'}]}></View>
          <View style={[styles.lineStyle, {backgroundColor: '#fff'}]}></View>
          <View style={styles.lineStyle}></View>
          <View style={styles.lineStyle}></View>
          <View style={styles.lineStyle}></View>
        </View>
        <View
          style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.textTitle}>
            {'RESCUE SESSION : ANGER & FRUSTATION'}
          </Text>
          <TouchableOpacity
            style={{marginRight: 20, height: 30}}
            onPress={() => this.onCancel()}>
            <Text style={[{color: '#fff', fontSize: 20, fontWeight: '700'}]}>
              X
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.textDesc}>
          {'Pick the level of your anger & Frustation right now'}
        </Text>

        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: '#fff'}}>{this.state.level}</Text>
          {this.drawPyramid()}
        </View>

        <View style={{width: '100%'}}>
          <TouchableOpacity
            style={[styles.buttonView]}
            onPress={() => this.handleNextPress()}>
            <Text style={[{color: '#000'}]}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 80,
    width: '100%',
  },
  trapezoid: {
    width: 200,
    height: 0,
    borderBottomWidth: 100,
    borderBottomColor: 'red',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
  },

  textTitle: {
    color: '#fff',
    fontSize: 14,
    padding: 20,
    flex: 1,
    textAlign: 'left',
  },
  textDesc: {
    color: '#fff',
    fontSize: 20,
    width: '100%',
    fontWeight: '700',
    paddingHorizontal: 20,
    textAlign: 'left',
  },

  lineStyle: {
    backgroundColor: Colors.gray,
    height: 4,
    width: 40,
    borderRadius: 4,
  },
  buttonView: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    margin: 40,
  },
  pyramidContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Screen1;
