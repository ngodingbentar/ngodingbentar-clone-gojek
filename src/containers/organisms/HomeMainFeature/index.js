import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';
class HomeMainFeature extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          <MainFeature
            title="GO-RIDE"
            icon={require('../../../assets/icon/go-ride.png')}
          />
          <MainFeature
            title="GO-CAR"
            icon={require('../../../assets/icon/go-car.png')}
          />
          <MainFeature
            title="GO-BLUEBIRD"
            icon={require('../../../assets/icon/go-bluebird.png')}
          />
          <MainFeature
            title="GO-SEND"
            icon={require('../../../assets/icon/go-send.png')}
          />
          <MainFeature
            title="GO-DEALS"
            icon={require('../../../assets/icon/go-deals.png')}
          />
          <MainFeature
            title="GO-PULSA"
            icon={require('../../../assets/icon/go-pulsa.png')}
          />
          <MainFeature
            title="GO-FOOD"
            icon={require('../../../assets/icon/go-food.png')}
          />
          <MainFeature
            title="MORE"
            icon={require('../../../assets/icon/go-more.png')}
          />
        </View>
      </View>
    );
  }
}

export default HomeMainFeature;
