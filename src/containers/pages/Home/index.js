/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import GoBanner from '../../../components/molecules/GoBanner';
import GoInfo from '../../../components/molecules/GoInfo';
import GoNews from '../../../components/molecules/GoNews';
import SearchFeature from '../../../components/molecules/SearchFeature';
import HomeGopay from '../../../containers/organisms/HomeGopay';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import Navbar from '../../../containers/organisms/Navbar';
import ScrollableProduct from '../../../containers/organisms/ScrollableProduct';

export default class Home extends Component {
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
                {/* <GoNews img={require('../../../assets/dummy/sepak-bola.jpg')} onPress={() => alert('hah')} /> */}
                <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')} />
                <GoInfo />
                <GoBanner img={require('../../../assets/dummy/food-banner.jpg')} />
                <ScrollableProduct />
            </ScrollView>
            </View>
            <Navbar />
        </View>
    )
  }
}
