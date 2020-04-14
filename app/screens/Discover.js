import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

class Discover extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Discover Page</Text>
      </View>
    );
  }
}

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
