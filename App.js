/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";

import ReastaurantList from "./src/components/ReastaurantList";
import RestauranInfo from "./src/components/RestauranInfo";
import About from "./src/components/About";
import AddReview from "./src/components/AddReview";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: ReastaurantList
    },
    Info: {
      screen: RestauranInfo,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: "#0066cc",
          color: "#fff"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff"
        },
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="list" color={tintColor} size={22} />;
        }
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);

const MainTabs = createBottomTabNavigator({
  List: {
    screen: AppNavigator,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="list" color={tintColor} size={22} />;
      },
      tabBarOptions: {
        activeBackgroundColor: "#e6f0fa"
      }
    })
  },
  About: {
    screen: About,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="info-circle" color={tintColor} size={22} />;
      },
      tabBarOptions: {
        activeBackgroundColor: "#e6f0fa"
      }
    })
  }
});

const AppStack = createStackNavigator(
  {
    Tabs: { screen: MainTabs },
    AddReview: { screen: AddReview }
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false }
  }
);

export default createAppContainer(AppStack);
