import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Discover from '../screens/Discover';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon name="ios-home" color={focused ? '#fff' : 'gray'} size={22} />
        ),
      },
    },
    Discover: {
      screen: Discover,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="ios-compass"
            color={focused ? '#fff' : 'gray'}
            size={22}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon name="ios-person" color={focused ? '#fff' : 'gray'} size={22} />
        ),
      },
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon name="ios-mail" color={focused ? '#fff' : 'gray'} size={22} />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="ios-settings"
            color={focused ? '#fff' : 'gray'}
            size={22}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'top',
    swipeEnabled: true,
    lazyLoad: true,
    animationEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: '#000',
        height: 50,
        paddingTop: 3,
        paddingBottom: 3,
      },
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
    },
  },
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
  },
});

export default createAppContainer(MainScreenNavigator);
