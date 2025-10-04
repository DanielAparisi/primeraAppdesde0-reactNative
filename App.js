import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,} from 'react-native';
import { Main } from './components/main';
import Constants from 'expo-constants';

/*View por defecto tiene */
/** SafeAreaView te reserva espacio para el StatusBar */
/* El button por defecto tiene los estilos de fabrica de la plataforma en la que estes  */
export default function App() {
 
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : Constants.statusBarHeight,
    margin: 14
  },
  
});
