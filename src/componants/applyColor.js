import React, { Component } from 'react';
import { StyleSheet, NetInfo, Text, StatusBar, View } from 'react-native';
import { withNavigation } from 'react-navigation';

class ApplyColor extends Component {
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('colorDetails');

    return (
      <View style={styles.main}>
        <StatusBar hidden={true} />
        <View style={styles.foreground}>
          <Text style={{ color: item, fontSize: 25 }}>
            This is how it looks in foreground{' '}
          </Text>
        </View>

        <View style={[styles.background, { backgroundColor: item }]}>
          <Text style={{ color: 'white', fontSize: 20 }}>
            This is how it looks in background{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  background: {
    padding: 50,
    borderRadius: 15
  },

  add: {
    borderWidth: 1
  }
});

export default withNavigation(ApplyColor);
