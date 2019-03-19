import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class RestaurantRow extends Component {
  render() {
    const { place, index } = this.props;

    return (
      <View key={index} style={styles.cafeItem}>
        <View style={styles.cafeInfo}>
          <Text>{place.name}</Text>
          <Text style={styles.cafeAddress}>{place.address}</Text>
        </View>
        <Text style={styles.cafeGetInfo}>View Info</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cafeItem: {
    flexDirection: "row",
    padding: 15
  },
  cafeInfo: {
    flexDirection: "column",
    flex: 8
  },
  cafeAddress: {
    color: "grey"
  },
  cafeGetInfo: {
    flex: 2,
    alignContent: "center",
    justifyContent: "center"
  }
});
