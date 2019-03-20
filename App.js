/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ReastaurantList from "./src/components/ReastaurantList";
import RestauranInfo from "./src/components/RestauranInfo";

const AppNavigator = createStackNavigator({
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
      }
    })
  }
});

export default createAppContainer(AppNavigator);
