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

import Circular from './../components/Circular';
import SliderComponent from './../components/SliderComponent';

import Colors from './../utils/colors';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 0,
    };
  }
  componentDidMount = async () => {};

  onSliderValueChanged = value => {
    this.setState({sliderValue: value});
  };
  handleSignUpPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lineContainer}>
          <View style={[styles.lineStyle, {backgroundColor: '#fff'}]}></View>
          <View style={styles.lineStyle}></View>
          <View style={styles.lineStyle}></View>
          <View style={styles.lineStyle}></View>
          <View style={styles.lineStyle}></View>
        </View>

        <Text style={styles.textTitle}>
          {'Rescue Session : Anger & Frustation'}
        </Text>

        <Text style={styles.textDesc}>
          {'Pick the label of anger & Frustation right now'}
        </Text>

        <View style={{justifyContent: 'center', flex: 1, marginBottom: 20}}>
          <Circular value={this.state.sliderValue} />
          <SliderComponent onChanged={this.onSliderValueChanged.bind(this)} />
        </View>

        <View style={{width: '100%'}}>
          <TouchableOpacity
            style={[styles.buttonView]}
            onPress={() => this.handleSignUpPress()}>
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

  textTitle: {
    color: '#fff',
    fontSize: 18,
    width: '100%',
    padding: 20,
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
});

export default Screen1;
