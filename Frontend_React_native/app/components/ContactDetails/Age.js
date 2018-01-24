import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { getAge, getTimeUntilBirthday } from '../../helpers/date';
import styles from './styles';

class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dob: nextProps.dob
    });
  }

  render() {
    const dob = this.state.dob;

    return (
      <View style={styles.ageContainer}>
        <Text style={styles.name}>
          {getAge(dob)} years old
        </Text>
        <Text style={styles.birthday}>
          {getTimeUntilBirthday(dob)} until next birthday
        </Text>
      </View>
    );
  }
}


export default Age;
