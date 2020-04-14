import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MainScreenNavigator from './app/config/router';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
