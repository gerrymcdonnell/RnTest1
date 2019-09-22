import React, { Component } from 'react'
import { View, WebView, StyleSheet }

from 'react-native'
export default WebViewExample = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://youtube.com' }}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: 350,
   }
})

WebViewExample.navigationOptions = {
    title: 'Webscreen',
};