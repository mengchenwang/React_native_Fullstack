import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const CancelButton = ({ label, onPress }) => {
  return (
    <View style={styles.cancelButtonContainer}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={styles.cancelButton}
      >
        <Text style={styles.cancelButtonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CancelButton;
