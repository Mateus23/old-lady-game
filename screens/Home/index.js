import { Button, View, Text, StyleSheet, Image } from 'react-native';

// Trabalhar na parte visual da página inicial
const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Jogo da Veia
        </Text>
        <Image source={'assets/home.png'} style={styles.image} />
        <Button
          title="Play"
          onPress={() => navigation.navigate('Game')} // Esse botão precisa ir para a página do jogo
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
      justifyContent: 'space-around',
      backgroundColor: '#eee',
      alignItems: 'center',
      flex: 1,
  },
  title: {
      fontWeight: 'bold',
      fontSize: '50px',
      color: '#842'
  },
  image: {
    width: '80%',
    aspectRatio: 1
  },
})

export default HomeScreen;