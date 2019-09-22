import React from 'react';
import { Text,ScrollView, StyleSheet } from 'react-native';

export default function ImageScreen() {
  return (
    <ScrollView style={styles.container}>
     
      <Text>
        Image screen
      </Text>

    </ScrollView>
  );
}

ImageScreen.navigationOptions = {
  title: 'Image Screen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});