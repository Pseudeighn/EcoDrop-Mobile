import { StyleSheet } from 'react-native';

const palette = {
  cafeNoir: '#4C3D19',
  kombuGreen: '#354024',
  mossGreen: '#889063',
  tan: '#CFBB99',
  bone: '#E5D7C4',
};

export const styles = StyleSheet.create({
  cardContainer: {
    position: 'absolute',
    top: 50, // Adjust based on your bell icon size
    right: 0,
    width: 300,
    borderRadius: 8,
    backgroundColor: palette.bone,
    borderColor: palette.kombuGreen,
    borderWidth: 1,
    overflow: 'hidden',
    zIndex: 1000,
    elevation: 10, // Shadow for Android
    shadowColor: palette.kombuGreen, // Shadow for iOS
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  header: {
    backgroundColor: palette.cafeNoir,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  headerText: {
    color: palette.bone,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  body: {
    paddingVertical: 8,
  },
  itemContainer: {
    padding: 16,
  },
  titleText: {
    color: palette.kombuGreen,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  messageText: {
    color: palette.cafeNoir,
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: palette.tan,
    marginHorizontal: 16,
  },
});