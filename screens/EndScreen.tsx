import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

interface Props {
  rounds: number;
  number: number;
  onReset: () => void;
}

const EndScreen = ({ rounds, number, onReset }: Props) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Конец игры!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summary}>
        Вы загадали число <Text style={styles.highlight}>{number}</Text>. Мне
        понадобилось <Text style={styles.highlight}>{rounds}</Text> попыток!
      </Text>
      <View>
        <PrimaryButton onPress={onReset}>Еще раз</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summary: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
  },
  highlight: {
    color: Colors.primary500,
  },
});

export default EndScreen;
