import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import InshortTabs from './components/InshortTabs';
import Context from './API/Context';

function App() {
  return (
    <View style={{...styles.container,backgroundColor:'#282C35'}}>
     <InshortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});


export default () => {
  return (
  <Context>
    <App/>
  </Context>
  );
}
