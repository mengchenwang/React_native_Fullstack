import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';

const ListItem = ({ contact, onPress }) => {
  const name = `${(contact.name.first)} ${(contact.name.last)}`;
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.rowUnderlay}
    >
      <View style={styles.row}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableHighlight>
  )
};

export default ListItem;
