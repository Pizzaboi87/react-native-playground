import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
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