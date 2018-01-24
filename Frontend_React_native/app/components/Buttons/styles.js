import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  primaryButtonContainer: {
    backgroundColor: colors.rowBackground,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 15,
  },
  primaryButton: {
    borderColor: colors.border,
    borderRadius:10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.link,
  },
  primaryButtonText: {
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 120,
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
  },
  cancelButtonContainer: {
    backgroundColor: colors.rowBackground,
    marginHorizontal: 10,
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 15,
  },
  cancelButton: {
    width: 150,
    borderColor: colors.border,
    borderRadius:10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.cancelLink,
  },
  cancelButtonText: {
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
  },
  saveButtonContainer: {
    backgroundColor: colors.rowBackground,
    marginHorizontal: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 15,
  },
  saveButton: {
    width: 150,
    borderColor: colors.border,
    borderRadius:10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.link,
  },
  ratingButton: {
    width: 15,
    height: 40,
  },
  ratingButtonText: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: '800',
    color: colors.primaryText,
  },
});
