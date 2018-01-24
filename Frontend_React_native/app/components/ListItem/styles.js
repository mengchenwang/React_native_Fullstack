import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  row: {
    backgroundColor: colors.rowBackground,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.primaryText,
  },
});
