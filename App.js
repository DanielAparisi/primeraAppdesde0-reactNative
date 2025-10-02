import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput,LinearGradient } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
    const statusBarHeight = Constants.statusBarHeight;

  return (
    <View style={styles.container}>
      <StatusBar 
        style='auto'
        hidden = {false}
        backgroundColor='#883030ff'
      />
      <Text>Bienvenido a la liga A+7</Text>
      <ScrollView>
        <Text>Contenido que se puede desplazar...</Text>
      </ScrollView> 
      <TextInput
        placeholder="Escribe aquí..."
      />
      <LinearGradient
      colors={['#ff7e5f', '#feb47b']}
    
    >
      <Text>Texto con gradiente</Text>
    </LinearGradient>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
