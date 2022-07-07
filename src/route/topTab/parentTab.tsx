import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {LeaderBoard, NewsTab} from '../../modules/home';
import {vw} from '../../utils';

const ParentTab = createMaterialTopTabNavigator();

export function ParentTabNav() {
  return (
    <ParentTab.Navigator
      overScrollMode="always"
      screenOptions={{
        swipeEnabled: false,
        tabBarScrollEnabled: false,
        tabBarItemStyle: {
          width: vw(175),
        },
        tabBarStyle: {
          paddingHorizontal: vw(20),
        },
        tabBarIndicatorStyle: {
          width: vw(175),
          backgroundColor: '#000',
          marginLeft: vw(20),
        },
        tabBarLabelStyle: {textTransform: 'capitalize'},
      }}>
      <ParentTab.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{
          tabBarLabel: 'LeaderBoard',
        }}
      />
      <ParentTab.Screen
        name="NewsTab"
        component={NewsTab}
        options={{
          tabBarLabel: 'My Karma Points',
        }}
      />
    </ParentTab.Navigator>
  );
}
