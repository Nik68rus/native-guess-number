import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const rndNmb = Math.floor(Math.random() * (max - min)) + min;
  if (rndNmb === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNmb;
  }
};

interface Props {
  userNumber: number;
}
const GameScreen = ({ userNumber }: Props) => {
  const initialValue = generateRandomBetween(1, 100, userNumber);
  const [currentNumber, setCurrentNumber] = useState(initialValue);
  return (
    <View style={styles.screen}>
      <Title>Предположение</Title>
      <NumberContainer number={currentNumber} />
      <View>
        <Text>Больше или меньше?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
