import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

class Inbox extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Inbox Page</Text>
      </View>
    );
  }
}

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
