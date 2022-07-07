import React from 'react';
import { SafeAreaView } from 'react-native';
import { StackNav } from './src/route';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1,}}>
      <StackNav />
    </SafeAreaView>
  );
}
