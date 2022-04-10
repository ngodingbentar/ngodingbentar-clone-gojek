/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import GoBanner from './src/components/molecules/GoBanner';
import GoInfo from './src/components/molecules/GoInfo';
import GoNews from './src/components/molecules/GoNews';
import GopayFeature from './src/components/molecules/GopayFeature';
import MainFeature from './src/components/molecules/MainFeature';
import SearchFeature from './src/components/molecules/SearchFeature';
import Navbar from './src/containers/organisms/Navbar';
import ScrollableProduct from './src/containers/organisms/ScrollableProduct';
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* Searchbar */}
          <SearchFeature />
          <ScrollView>
            {/* Gopay */}
            <View style={{marginHorizontal: 17, marginTop: 8}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: '#2C5FB8',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  padding: 14,
                }}>
                <Image source={require('./src/assets/icon/gopay.png')} />
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                  Rp. 94.122
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 20,
                  paddingBottom: 14,
                  backgroundColor: '#2F65BD',
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                }}>
                <GopayFeature
                  title="Pay"
                  icon={require('./src/assets/icon/pay.png')}
                />
                <GopayFeature
                  title="Nearby"
                  icon={require('./src/assets/icon/nearby.png')}
                />
                <GopayFeature
                  title="Topup"
                  icon={require('./src/assets/icon/topup.png')}
                />
                <GopayFeature
                  title="More"
                  icon={require('./src/assets/icon/more.png')}
                />
              </View>
            </View>

            {/* main feature */}
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                  flexWrap: 'wrap',
                }}>
                <MainFeature
                  title="GO-RIDE"
                  icon={require('./src/assets/icon/go-ride.png')}
                />
                <MainFeature
                  title="GO-CAR"
                  icon={require('./src/assets/icon/go-car.png')}
                />
                <MainFeature
                  title="GO-BLUEBIRD"
                  icon={require('./src/assets/icon/go-bluebird.png')}
                />
                <MainFeature
                  title="GO-SEND"
                  icon={require('./src/assets/icon/go-send.png')}
                />
                <MainFeature
                  title="GO-DEALS"
                  icon={require('./src/assets/icon/go-deals.png')}
                />
                <MainFeature
                  title="GO-PULSA"
                  icon={require('./src/assets/icon/go-pulsa.png')}
                />
                <MainFeature
                  title="GO-FOOD"
                  icon={require('./src/assets/icon/go-food.png')}
                />
                <MainFeature
                  title="MORE"
                  icon={require('./src/assets/icon/go-more.png')}
                />
              </View>
            </View>
            <View
              style={{
                height: 17,
                backgroundColor: '#F2F2F4',
                marginTop: 20,
              }}
            />

            {/* News section */}
            <GoNews img={require('./src/assets/dummy/sepak-bola.jpg')} />

            {/* internal information section */}
            <GoInfo />

            {/* go-banner section */}
            <GoBanner img={require('./src/assets/dummy/food-banner.jpg')} />
            {/* end gofood banner */}

            {/* Nearby gofood */}
            <ScrollableProduct />
          </ScrollView>
        </View>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fCFF',
  },
});
