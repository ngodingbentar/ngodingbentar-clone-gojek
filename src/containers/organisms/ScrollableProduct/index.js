import React, {Component} from 'react';
import {Text, Image, View, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/SrollableItem';

class ScrollableProduct extends Component {
  render() {
    return (
      <View>
        <View style={{height: 15, width: 60, marginLeft: 16}}>
          <Image
            source={require('../../../assets/logo/go-food.png')}
            style={{
              height: undefined,
              width: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            paddingHorizontal: 16,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
            Nearby Restaurant
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
            See All
          </Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-kfc.jpg')}
            title="Sederhana Minang 1"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-kfc.jpg')}
            title="Sederhana Minang 2"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-kfc.jpg')}
            title="Sederhana Minang 3"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-kfc.jpg')}
            title="Sederhana Minang 4"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-kfc.jpg')}
            title="Sederhana Minang 5"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-kfc.jpg')}
            title="Sederhana Minang 6"
          />
        </ScrollView>
        <View
          style={{
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
            marginTop: 16,
            marginHorizontal: 16,
          }}
        />
      </View>
    );
  }
}

export default ScrollableProduct;
