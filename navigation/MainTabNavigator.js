import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListScreen from '../screens/ListScreen';
import GraphicScreen from '../screens/GraphicScreen';




const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`md-home${focused ? '' : ''}`}
    />
  ),
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#000', // active icon color
        inactiveTintColor: '#586589',  // inactive icon color
        style: {
            color: '#000' // TabBar background
        }
},
};
const GraphicStack = createStackNavigator({
  Graphic: GraphicScreen,
});

GraphicStack.navigationOptions = {
  tabBarLabel: 'Graphic',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      style={{ color: '#000', }}
      focused={focused}
      name={`ios-stats${focused ? '' : ''}`}    />
  ),
  tabBarOptions: {
    showLabel: false,
},
};


const ListStack = createStackNavigator({
  List: ListScreen,
});

ListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`md-list-box${focused ? '' : ''}`}
    />
  ),
  tabBarOptions: {
    showLabel: false
},
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
  tabBarOptions: {
    showLabel: false
},
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      style={{ color: '#000', }}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  tabBarOptions: {
    showLabel: false,
},
};

export default createBottomTabNavigator({
  HomeStack,
  ListStack,
  GraphicStack,
  LinksStack,
  SettingsStack,
});
