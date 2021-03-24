import React from 'react';
import {SafeAreaView, Text, StatusBar, TouchableOpacity} from 'react-native';

// No translation exists in finnish for radio button with voiceOver

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{margin: 40}}>
        <TouchableOpacity accessibilityRole="radio">
          {/* If finnish VoiceOver language set, should be read out as finnish equilevant "valintanappi", instead read out as "radio button" */}
          <Text style={{color: 'white'}}>Minun radio nappini</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;
