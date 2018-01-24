import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { PrimaryButton, CancelButton, SaveButton, RatingButton } from '../Buttons';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInEditMode: false,
      rating: 1
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ rating: nextProps.contact.rating });
  }

  toggleEdit() {
    this.setState(previousState => {
      return { isInEditMode: !previousState.isInEditMode };
    });
  }

  changeRating(value) {
    this.setState(previousState => {
      return { rating: previousState.rating + value };
    });
  }

  cancelChange() {
    this.toggleEdit();
    this.setState({ rating: this.props.contact.rating });
  }

  saveChange() {
    this.toggleEdit();
    this.props.updateRating(this.state.rating);
  }

  render() {
    const rating = this.state.rating;
    const plusButton = <RatingButton
                         label="+"
                         onPress={() => this.changeRating(1)}
                       />;
    const minusButton = <RatingButton
                         label="-"
                         onPress={() => this.changeRating(-1)}
                       />;

    if (this.state.isInEditMode === false) {
      return (
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>
            Rating:     {rating}
          </Text>

          <PrimaryButton
            label="Edit"
            onPress={() => this.toggleEdit()}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>
            Rating:   {minusButton} {rating} {plusButton}
          </Text>
          <View style={styles.buttonsContainer}>
            <CancelButton
              label="Cancel"
              onPress={() => this.cancelChange()}
            />
            <SaveButton
              label="Save"
              onPress={() => this.saveChange()}
            />
          </View>
        </View>
      );
    }
  }
}

export default Rating;
