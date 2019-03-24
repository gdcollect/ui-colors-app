import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  View
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { colorObject } from '../constants/index';

class ColorPalettes extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.main}
          onPress={() =>
            this.props.navigation.push('ColorDetails', {
              colorDetails: this.props.colorDetails
            })
          }
        >
          <View style={styles.colorName}>
            <Text style={styles.name}>{this.props.colorDetails.name}</Text>
          </View>

          <View style={styles.colorBox}>
            <View
              style={{
                width: '25%',
                backgroundColor: this.props.colorDetails.color1,
                paddingVertical: 40,
                borderBottomLeftRadius: 10
              }}
            />

            <View
              style={{
                width: '25%',
                paddingVertical: 40,
                backgroundColor: this.props.colorDetails.color2
              }}
            />

            <View
              style={{
                width: '25%',
                paddingVertical: 40,
                backgroundColor: this.props.colorDetails.color3
              }}
            />

            <View
              style={{
                width: '25%',
                paddingVertical: 40,
                backgroundColor: this.props.colorDetails.color4,
                borderBottomRightRadius: 10
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const Color = withNavigation(ColorPalettes);

class ColorList extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.mainBG}>
          <StatusBar hidden={true} />
          {colorObject.map(item => {
            return <Color colorDetails={item} key={item.name} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainBG: {
    backgroundColor: '#dcdde1'
  },

  main: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10
  },

  colorName: {
    alignSelf: 'center',
    paddingVertical: 10
  },
  name: {
    fontWeight: 'bold'
  },
  colorBox: {
    flexDirection: 'row'
  }
});

export default ColorList;
