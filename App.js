import React from 'react';
import {SafeAreaView, Text, StatusBar, TouchableOpacity} from 'react-native';

// No translation exists in finnish for radio button with voiceOver

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{margin: 40}}>
        <TouchableOpacity accessibilityRole="radio">
          <Text style={{color: 'white'}}>Minun radio nappini</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;
