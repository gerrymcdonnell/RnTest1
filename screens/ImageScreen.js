import React from 'react';
import { Image,Text,ScrollView, StyleSheet } from 'react-native';

export default function ImageScreen() {
  return (
    <ScrollView style={styles.container}>
     
      <Text>
        Image screen
      </Text>

      <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />

        <Image source={require('../img/1.jpg')}  style={{width: 400, height: 400}} />
        <Image source={require('../img/1.jpg')}  style={{width: 400, height: 400}} />



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