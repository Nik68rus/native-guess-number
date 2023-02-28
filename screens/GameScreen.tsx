import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, Text, FlatList } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InfoText from '../components/ui/InfoText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { Direction } from '../types';
import { Ionicons } from '@expo/vector-icons';
import LogItem from '../components/game/LogItem';

const generateRandomBetween = (min: number, max: number, exclude?: number) => {
  const rndNmb = Math.floor(Math.random() * (max - min)) + min;
  if (rndNmb === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNmb;
  }
};

interface Props {
  userNumber: number;
  onFinish: (length: number) => void;
}

let minLimit = 1;
let maxLimit = 100;

const GameScreen = ({ userNumber, onFinish }: Props) => {
  const initialValue = generateRandomBetween(1, 100, userNumber);
  const [currentNumber, setCurrentNumber] = useState(initialValue);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    if (currentNumber === userNumber) {
      minLimit = 1;
      maxLimit = 100;
      onFinish(history.length + 1);
    }
  }, [currentNumber, userNumber, onFinish]);

  useEffect(() => {
    setHistory((prev) => [currentNumber, ...prev]);
  }, [currentNumber]);

  const nextNumberHandler = (direction: Direction) => {
    if (
      (direction === Direction.LOWER && currentNumber < userNumber) ||
      (direction === Direction.GRATER && currentNumber > userNumber)
    ) {
      Alert.alert('Не ври!', 'Это же не правда!', [
        { text: ' Я случайно!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === Direction.LOWER) {
      maxLimit = currentNumber;
    } else {
      minLimit = currentNumber + 1;
    }

    setCurrentNumber((prev: number) =>
      generateRandomBetween(minLimit, maxLimit, prev)
    );
  };

  return (
    <View style={styles.screen}>
      <Title>Предположение</Title>
      <NumberContainer number={currentNumber} />
      <Card>
        <View>
          <InfoText style={styles.info}>Больше или меньше?</InfoText>
          <View style={styles.buttons}>
            <PrimaryButton
              onPress={nextNumberHandler.bind(this, Direction.LOWER)}
            >
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
            <PrimaryButton
              onPress={nextNumberHandler.bind(this, Direction.GRATER)}
            >
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <FlatList
        data={history}
        keyExtractor={(item) => item.toString()}
        renderItem={(number) => (
          <LogItem round={history.length - number.index} number={number.item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  info: {
    marginBottom: 24,
  },
});

export default GameScreen;
