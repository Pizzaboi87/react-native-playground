import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Header from './components/Header';
import Footer from './components/Footer';
import MenuItems from './components/MenuItems';
import WriteReview from './components/WriteReview';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <Stack.Navigator
            initialRouteName="Home"
            style={styles.footerContainer}
            screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
              <Stack.Screen name="Home" component={WelcomeScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="Menu" component={MenuItems} />
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});