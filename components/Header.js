import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon{"\n"}Restaurant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
  },
  headerText: {
    paddingTop: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});

export default Header;