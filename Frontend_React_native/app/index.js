import { Navigation } from 'react-native-navigation';

import Contacts from './screens/Contacts';
import Details from './screens/Details';

export default () => {
  Navigation.registerComponent('Contacts', () => Contacts);
  Navigation.registerComponent('Details', () => Details);

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'Contacts',
      title: 'People',
    },
  });
};
