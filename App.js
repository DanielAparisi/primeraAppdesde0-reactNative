import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from 'react-native';

/*View por defecto tiene */
/* El button por defecto tiene los estilos de fabrica de la plataforma en la que estes  */
export default function App() {
  const icon = require('./assets/icon.png');

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Image
        fadeDuration={250}
        source={{
          uri: 'https://www.ligamas7.com/storage/soccer/customize_headers/d5f1718b-5ffb-4347-90fb-3c9ecf7b1e7b.png',
        }}
        style={styles.image}
      />
      <Text style={styles.text}>Entorno de Pruebas </Text>
      <Button
        style={{ color: '#09f' }}
        title='bottton'
        onPress={() => alert('Hola')}
      ></Button>
      <TouchableHighlight
        underlayColor={'#48fc'}
        onPress={() => alert('Hola')}
        style={{
          width: 50,
          height: 50,
          borderRadius: 10,
          backgroundColor: '#b92',
        }}
      >
        <Text>EPAAA</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 800,
    color: '#fff',
  },
  image: {
    width: 215,
    height: 294,
    resizeMode: 'contain',
  },
});
