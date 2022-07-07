import {StyleSheet} from 'react-native';
import {vw} from '../../../../utils';

export const styles = StyleSheet.create({
  listHeaderContainer: {
    height: vw(327),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1661ac',
    overflow: 'hidden',
  },
  headerImage: {
    height: vw(327),
    resizeMode: 'contain',
  },
  itemContainer: {
    height: vw(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarContainer: {
    backgroundColor: 'red',
    height: vw(40),
    borderTopEndRadius: vw(10),
    borderTopStartRadius: vw(10),
    flexDirection: 'row',
  },
});
