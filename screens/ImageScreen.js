import React from 'react';
import { Linking,Image,Text,ScrollView, StyleSheet } from 'react-native';

import MyImages from './MyImages';
export default function ImageScreen() {
    state = {
        images: [
          { title: 'kelly Brook', 
          uri: '../img/1.jpg',
          src : require('../img/1.jpg') } 
        ],
        images2: [ '../img/1.jpg']
      };

  return (
    <ScrollView style={styles.container}>
     
      <Text>
        Image screen
      </Text>


      <Image source={MyImages["1"]}  style={styles.myImage} />

      <Text>Below is a remote image Failing to load????</Text>
      <Image
          style={styles.myImage}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
       /> 

<Text>
    Q: How to pass variable or array element to image? {"\n"}
    the require fucntion in rn cant be dynamic...see docs{"\n"}
    {"\n"}
    Q:How to do a new line? in Text
    The new line element is {"\n"}

    {"\n"}
    This is an image
    {"\n"}{"\n"}
    Heading: From the docs
    {"\n"}

    {/*Text Link example */}
    Link here 
    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://facebook.github.io/react-native/docs/images.html#images-from-hybrid-app-s-resources')}>
      React Native Images Docs
    </Text>
    
    {"\n"}

  </Text>
<Image source={require('../img/1.jpg')}  style={styles.myImage} />
        
        <Text>{"\n"}State examples
            Images array1 {this.state.images[0].uri}
            {"\n"}
            Images2 array{this.state.images2[0]}
            {"\n"}
            Dynamic image 
            {"\n"}
            <Image source={this.state.images[0].src}  style={styles.myImage} />
            {"\n"}
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
  myImage:{
    width:100,
    height:100
  }
});