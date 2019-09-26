import React from 'react';
import { Linking,Text,ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen2() {
  return (
    <ScrollView style={styles.container}>
      <Text>
        Put some links here
      </Text>


      {/*Text Link example */}      
      <Text style={{color: 'blue'}}
        onPress={() => Linking.openURL('https://facebook.github.io/react-native/docs/images.html#images-from-hybrid-app-s-resources')}>
        React Native Images Docs
      </Text>

      

    </ScrollView>
  );
}

LinksScreen2.navigationOptions = {
  title: 'Links2: React Native Help',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
