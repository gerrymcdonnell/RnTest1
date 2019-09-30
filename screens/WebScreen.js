import React from 'react';
import { View,WebView,ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function WebScreen() {

  state={
    homeUrl:'http://news.irishbloke.net/'
  }
  return (
    <View style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      
         <WebView
         source = {{ uri:
         this.state.homeUrl }}
         />
      
    </View>
  );
}

WebScreen.navigationOptions = {
  title: 'Webscreen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});