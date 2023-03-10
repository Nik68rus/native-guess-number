import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: deviceWidth < 380 ? 20 : 40,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignSelf: 'stretch',
  },
});

export default Card;
