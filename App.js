import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Szia <Text style={styles.textBold}>Carlos Nunez</Text>!{"\n"}Hogy vagy?</Text>
      <StatusBar style="auto" />
      <Image 
        style={styles.image}
        source={{
          uri: 'https://avatarfiles.alphacoders.com/988/98825.jpg'
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'coral'
  },
  textStyle: {
    paddingTop: 30,
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  textBold: {
    fontWeight: 'bold',
    color: 'green'
  },
  image: {
    marginTop: 50,
    width: 200,
    height: 200
  }
});
