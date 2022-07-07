import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import { ListRenderItem } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';
import { images } from '../../../../utils';

const renderItem: ListRenderItem<number> = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{item}</Text>
    </View>
  );
};

const headerComponent = () =>{
  return(
    <View style={styles.listHeaderContainer}>
      <Image style={styles.headerImage} source={images.headerBackGround} />
    </View>
  )
}

const keyExtractor = (item:number)=>{
  return (item + 'd')
}

export function LeaderBoard() {
  const flatlistData: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ];

  return (
    <Tabs.Container
    renderHeader={headerComponent}
    >
      <Tabs.Tab name="Tab1" label={"August"}>
        <Tabs.FlatList
        data={flatlistData}
        renderItem = {renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        bounces={false}
        />
      </Tabs.Tab>
      <Tabs.Tab name="Tab2" label={"All time"}>
        <Tabs.FlatList
        data={flatlistData}
        renderItem = {renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        bounces={false}
        />
      </Tabs.Tab>
    </Tabs.Container>
  );
}
