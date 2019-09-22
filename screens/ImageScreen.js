import React from 'react';
import { Image,Text,ScrollView, StyleSheet } from 'react-native';

export default function ImageScreen() {
    state = {
        images: [
          { title: 'kelly Brook', path: '../img/1.jpg' } 
        ],
        images2: [ '../img/1.jpg']
      };

  return (
    <ScrollView style={styles.container}>
     
      <Text>
        Image screen
      </Text>

      <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />

<Text>
    How to pass variable or array element to image?
</Text>

<Image source={require('../img/1.jpg')}  style={{width: 200, height: 200}} />
        
        <Text>State examples
            Images array1 {this.state.images[0].path}
            Images2 array{this.state.images2[0]}
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