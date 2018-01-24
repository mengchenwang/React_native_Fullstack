import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Header, Age, Rating } from '../components/ContactDetails';
import colors from '../config/colors';
import { getContact, updateContact } from '../config/data';

class Details extends Component {
  constructor(props) {
    super(props);
    this.updateRating = this.updateRating.bind(this);
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  updateRating = (rating) => {
    updateContact(this.props.contactID, rating).then((result) => {
      if (result === 'ok') {
        this.refreshData();
      }
    });
  }

  refreshData = () => {
    getContact(this.props.contactID).then((singleContact) => {
      this.setState({ contact: singleContact });
    }).catch((error) => {
      this.setState({ contact: {} });
    });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...this.state.contact} />
        <Age {...this.state.contact} />
        <Rating contact = {this.state.contact}
                updateRating = {this.updateRating} />
      </ScrollView>
    );
  }
}

export default Details;
