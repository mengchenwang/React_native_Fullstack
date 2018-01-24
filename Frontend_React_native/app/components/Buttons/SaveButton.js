import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const SaveButton = ({ label, onPress }) => {
  return (
    <View style={styles.saveButtonContainer}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={styles.saveButton}
      >
        <Text style={styles.cancelButtonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveButton;
