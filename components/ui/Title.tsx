import { StyleSheet, Text, Platform } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
  },
});

export default Title;
