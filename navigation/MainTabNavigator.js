import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import LinksScreen2 from '../screens/LinksScreen2';
import WebScreen from '../screens/WebScreen';
import ImageScreen from '../screens/ImageScreen';
import SettingsScreen from '../screens/SettingsScreen';

import RssScreen from '../screens/RssFeedScreen';
//custom component as a scxreen
//import WebViewEx from '../screens/WebViewEx';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

//links
const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);
LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
LinksStack.path = '';
//end of links


//links2
const LinksStack2 = createStackNavigator(
  {
    Links: LinksScreen2,
  },
  config
);
LinksStack2.navigationOptions = {
  tabBarLabel: 'Links2',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
LinksStack2.path = '';
//end of links2


//new web screen
const WebStack = createStackNavigator(
  {
    Links: WebScreen,
  },
  config
);
WebStack.navigationOptions = {
  tabBarLabel: 'Webscreen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
WebStack.path = '';
//end web


//RssFeedScreen
const RSSStack = createStackNavigator(
  {
    Links: RssScreen,
  },
  config
);
RSSStack.navigationOptions = {
  tabBarLabel: 'RSScreen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
RSSStack.path = '';
//end


//ImageScreen
const ImageStack = createStackNavigator(
  {
    Links: ImageScreen,
  },
  config
);
ImageStack.navigationOptions = {
  tabBarLabel: 'Image Screen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
ImageStack.path = '';
//end

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  LinksStack2,
  WebStack,
  SettingsStack,
  RSSStack,
  ImageStack
},
{
  initialRouteName: "ImageStack"
}
);

tabNavigator.path = '';

export default tabNavigator;
