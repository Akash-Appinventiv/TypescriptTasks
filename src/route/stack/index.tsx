import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ParentTabNav} from '..';

const Stack = createNativeStackNavigator();

export function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Home" component={ParentTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
