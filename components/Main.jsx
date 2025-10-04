     
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import { getLatestGames } from './lib/metacritic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/*ESTE COMPONENTE SERÍA EL LAYOUT DE NUESTRA PÁGINA*/
/*View por defecto tiene */
/** SafeAreaView te reserva espacio para el StatusBar */
/* El button por defecto tiene los estilos de fabrica de la plataforma en la que estes  */
export  function Main() {
  const icon = require('./assets/icon.png');
  const [games, setGames] = useState([])
  const inset = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games)
    })
  },[])

  return (
    <View style={{paddingBottom : inset.bottom, paddingTop: inset.top}}>
        <Text style={styles.text}>Entorno de Pruebas </Text>
        <Button
          style={{ color: '#09f' }}
          title='bottton'
          onPress={() => alert('Manuel guapo')}
        ></Button>
        {
        games.map((game) => (
            <View key={game.slug} style={styles.card}>
              <Image source={{uri : game.image}} style={styles.imgCard}></Image>
              <Text>Hoolaaa</Text>
            </View> 
          ))
        } 
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 24,
    fontWeight: 800,
    color: '#fff',
  },
  imgCard: {
    width: 215,
    height: 294,
    resizeMode: 'contain',
  },
});
