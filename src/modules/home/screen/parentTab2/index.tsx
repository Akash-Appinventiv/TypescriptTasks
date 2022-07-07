import {View, Text, Animated} from 'react-native';
import React from 'react';
import {styles} from './style';


export function NewsTab() {
  return (
      <View style={{flex: 1}}>
        <Animated.View style={[styles.listHeaderContainer]}>
          <Text>{'Hello'}</Text>
        </Animated.View>
      </View>
  );
}
