import React, { Component } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class RestauranInfo extends Component {
  static navigationOptions = {
    title: "Restaurant Info"
  };

  addReview = () => {
    this.props.navigation.navigate("AddReview");
  };

  render() {
    const place = this.props.navigation.getParam("place");

    return (
      <View>
        <Text>Info</Text>
        <Text>{place.name}</Text>
        <TouchableOpacity style={styles.button} onPress={this.addReview}>
          <Text style={styles.buttonText}>Add Review</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#0066cc",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
    marginTop: 10
  },
  buttonText: {
    color: "#0066cc",
    fontSize: 12,
    textAlign: "center"
  }
});

export default RestauranInfo;
