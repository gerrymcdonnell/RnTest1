import React from 'react';
import { Text,ScrollView, View,StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

export default function LinksScreen() {

  _handlePressForums = () => {
    WebBrowser.openBrowserAsync('http://forums.expo.io');
  };


  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />

      <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressForums}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Put a link here</Text>
            </View>
          </View>
        </Touchable>

      <Text>
        Put some links here
      </Text>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
