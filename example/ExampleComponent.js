import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from './Section';
import {LoadingSpinner} from '../src';
import type {Node} from 'react';

const ExampleComponent: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title={'Squer UI Components'}>
            <View>
              <Text>Loading Spinner:</Text>
              <LoadingSpinner />
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExampleComponent;
