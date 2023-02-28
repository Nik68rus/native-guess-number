import React from 'react';
import { View, Text, StyleSheet, Pressable, ViewStyle } from 'react-native';
import Colors from '../../constants/colors';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress: () => void;
}

const PrimaryButton = ({ children, style, onPress }: Props) => {
  return (
    <View style={[styles.buttonOutterContainer, style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,
    overflow: 'hidden',
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
