import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});

export default Title;
