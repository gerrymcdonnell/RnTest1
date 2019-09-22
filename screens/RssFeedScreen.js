import React from 'react';
import { Text,ScrollView, StyleSheet } from 'react-native';

export default function RssScreen() {
  return (
    <ScrollView style={styles.container}>
     
      <Text>
        RSS
      </Text>

    </ScrollView>
  );
}

RssScreen.navigationOptions = {
  title: 'Rss',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
