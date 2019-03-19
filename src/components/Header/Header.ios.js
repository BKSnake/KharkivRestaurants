import React, { Component } from "react";
import { Text } from "react-native";

import HeaderStyle from "styles/HeaderStyle";

class Header extends Component {
  render() {
    return <Text style={HeaderStyle.iOSHeader}>Kharkiv Restaurant</Text>;
  }
}

export default Header;
