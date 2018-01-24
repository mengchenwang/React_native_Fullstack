import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';

const window = Dimensions.get('window');

export default StyleSheet.create({
  imageContainer: {
    width: window.width / 1.8,
    height: window.width / 1.8,
    borderWidth: 2,
    borderRadius: window.width / 3.6,
    borderColor: colors.subtleText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: window.width / 2,
    height: window.width / 2,
    borderRadius: window.width / 4,
  },
  headerContainer: {
    backgroundColor: colors.rowBackground,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  name: {
    fontSize: 25,
    marginTop: 30,
    fontWeight: '500',
    color: colors.primaryText,
  },
  birthday: {
    fontSize: 16,
    marginTop: 5,
    color: colors.subtleText,
  },
  ageContainer: {
    backgroundColor: colors.rowBackground,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  ratingContainer: {
    backgroundColor: colors.rowBackground,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  rating: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: '500',
    color: colors.primaryText,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});
