import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 40 }}>
        <Text style={styles.header}>About React Component</Text>
        <Icon name="utensils" color="#0066cc" size={100} style={styles.icon} />
        <Text style={styles.icon}>writed by Baliuk Andrii</Text>
        <Text style={styles.icon}>2019</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20
  },
  icon: {
    marginVertical: 20,
    alignSelf: "center"
  },
  text: {
    fontSize: 14,
    color: "#444",
    marginTop: 20
  }
});

export default About;
