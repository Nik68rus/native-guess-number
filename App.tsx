import { useCallback, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar as ExpoBar } from 'expo-status-bar';

import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from 'react-native';

import Colors from './constants/colors';

import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState<number>();

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const choiceHandler = (number: number) => {
    setUserNumber(number);
  };

  const gameOverHandler = useCallback((length: number) => {
    setGameOver(true);
    setRounds(length);
  }, []);

  const gameResetHandler = () => {
    setGameOver(false);
    setUserNumber(undefined);
    setRounds(undefined);
  };

  let screen = gameOver ? (
    <EndScreen rounds={rounds} number={userNumber} onReset={gameResetHandler} />
  ) : userNumber === undefined ? (
    <StartScreen onChoice={choiceHandler} />
  ) : (
    <GameScreen userNumber={userNumber} onFinish={gameOverHandler} />
  );

  return (
    <View style={styles.rootScreen} onLayout={onLayoutRootView}>
      <ExpoBar style="light" />
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colors.primary700, Colors.accent500]}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
