import React, { Component } from "react";

import { View, Text } from "react-native";

class RestauranInfo extends Component {
  static navigationOptions = {
    title: "Restaurant Info"
  };
  render() {
    const place = this.props.navigation.getParam("place");

    return (
      <View>
        <Text>Info</Text>
        <Text>{place.name}</Text>
      </View>
    );
  }
}

export default RestauranInfo;
