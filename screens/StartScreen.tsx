import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

interface Props {
  onChoice: (number: number) => void;
}

const StartScreen = ({ onChoice }: Props) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (value: string) => {
    setEnteredNumber(value);
  };

  const resetInputHandler = (value: string) => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const number = parseInt(enteredNumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert('Wrong input', 'It has to be a number between 1 and 99', [
        { text: 'Ok', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    onChoice(number);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={2}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.actions}>
        <PrimaryButton style={styles.button} onPress={confirmInputHandler}>
          Ok
        </PrimaryButton>
        <PrimaryButton style={styles.button} onPress={confirmInputHandler}>
          Отмена
        </PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});

export default StartScreen;
