import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import Constants from 'expo-constants';
import { Font, AppLoading } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  <View style={styles.container}>
    <Text style={styles.paragraph}>
      Change code in the editor and watch it change on your phone! Save to get a
      shareable url.
    </Text>

    <Text style={{ fontFamily: 'Inter_900Black' }}>Inter Black</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
