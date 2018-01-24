import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import { getAllContacts } from '../config/data';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData = () => {
    getAllContacts().then((allContacts) => {
      this.setState({ contacts: allContacts });
    }).catch((error) => {
      this.setState({ contacts: [] });
    });
  }

  handleRowPress = (item) => {
    this.props.navigator.push({
      screen: 'Details',
      title: 'Detail View',
      passProps: {
        contactID: item.id
      },
      backButtonTitle: 'Back',
    });
  };

  render() {
    return (
      <FlatList
        style={{ backgroundColor: colors.background }}
        data={this.state.contacts}
        renderItem={({ item }) =>
          <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
        }
        keyExtractor={(item) => item.id}
      />
    );
  }
}
export default Contacts;
