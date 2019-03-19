import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class RestaurantRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false
    };
  }
  onPress = () => {
    this.setState(state => ({ showInfo: !state.showInfo }));
  };

  render() {
    const { place, index } = this.props;
    const { showInfo } = this.state;

    return (
      <View key={index} style={styles.cafeItem}>
        <View style={styles.cafeInfo}>
          <Text>{place.name}</Text>
          <Text style={styles.cafeAddress}>{place.address}</Text>
        </View>
        <View style={styles.cafeGetInfo}>
          <Button
            title="Info"
            color="#c93f0b"
            accessibilityLabel="Info"
            onPress={this.onPress}
          />
        </View>
        {showInfo && (
          <View>
            <Text>Show Info</Text>
          </View>
        )}
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
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    minWidth: 50
  }
});
