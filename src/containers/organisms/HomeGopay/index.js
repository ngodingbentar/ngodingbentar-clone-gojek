import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import GopayFeature from '../../../components/molecules/GopayFeature';

class HomeGopay extends Component {
  render() {
    return (
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
          <Image source={require('../../../assets/icon/gopay.png')} />
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
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
            icon={require('../../../assets/icon/pay.png')}
            onPress={() => this.props.navigation.navigate('ScanQRCode')}
          />
          <GopayFeature
            title="Nearby"
            icon={require('../../../assets/icon/nearby.png')}
          />
          <GopayFeature
            title="Topup"
            icon={require('../../../assets/icon/topup.png')}
          />
          <GopayFeature
            title="More"
            icon={require('../../../assets/icon/more.png')}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(HomeGopay);
