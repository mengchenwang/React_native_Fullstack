import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const RatingButton = ({ label, onPress }) => {
  return (

      <TouchableOpacity
        onPress={() => onPress()}
        style={styles.ratingButton}
      >
        <Text style={styles.ratingButtonText}>{label}</Text>
      </TouchableOpacity>

  );
};

export default RatingButton;
