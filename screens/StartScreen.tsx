import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Card from '../components/ui/Card';
import InfoText from '../components/ui/InfoText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

interface Props {
  onChoice: (number: number) => void;
}

const StartScreen = ({ onChoice }: Props) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { width, height } = useWindowDimensions();

  const numberInputHandler = (value: string) => {
    setEnteredNumber(value);
  };

  const resetInputHandler = (value: string) => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const number = parseInt(enteredNumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert('Некорректное значение', 'Выберите число от 1 до 99', [
        { text: 'Ok', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    onChoice(number);
  };

  const marginTop = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Отгадай число</Title>
          <Card>
            <InfoText>Загадайте число</InfoText>
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
              <PrimaryButton
                style={styles.button}
                onPress={confirmInputHandler}
              >
                Ok
              </PrimaryButton>
              <PrimaryButton
                style={styles.button}
                onPress={confirmInputHandler}
              >
                Отмена
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
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
