import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: {},
      name: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      picture: nextProps.picture,
      name: nextProps.name
    });
  }

  render() {
    const picture = this.state.picture;
    const name = this.state.name;

    return (
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: picture.large }}
            style={styles.image}
          />
        </View>
        <Text style={styles.name}>
          {name.first} {name.last}
        </Text>
      </View>
    );
  }
}

export default Header;
