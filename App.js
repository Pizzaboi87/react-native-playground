import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import MenuItems from './components/MenuItems';
import WriteReview from './components/WriteReview';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        {/*<MenuItems />*/}
        <WriteReview />
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