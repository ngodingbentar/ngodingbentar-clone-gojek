/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import GoBanner from './src/components/molecules/GoBanner';
import GoInfo from './src/components/molecules/GoInfo';
import GoNews from './src/components/molecules/GoNews';
import SearchFeature from './src/components/molecules/SearchFeature';
import HomeGopay from './src/containers/organisms/HomeGopay';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import Navbar from './src/containers/organisms/Navbar';
import ScrollableProduct from './src/containers/organisms/ScrollableProduct';
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <SearchFeature />
          <ScrollView>
            <HomeGopay />
            <HomeMainFeature />
            <View
              style={{
                height: 17,
                backgroundColor: '#F2F2F4',
                marginTop: 20,
              }}
            />
            <GoNews img={require('./src/assets/dummy/sepak-bola.jpg')} />
            <GoInfo />
            <GoBanner img={require('./src/assets/dummy/food-banner.jpg')} />
            <ScrollableProduct />
          </ScrollView>
        </View>
        <Navbar />
      </View>
    );
  }
}
