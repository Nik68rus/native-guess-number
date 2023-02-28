import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import Colors from '../../constants/colors';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const InfoText = ({ children, style }: Props) => {
  return <Text style={[styles.infoText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  infoText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InfoText;
