import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import NavbarIcon from '../../../components/molecules/NavbarIcon';

class Navbar extends Component {
  render() {
    return (
      <View
        style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <NavbarIcon
          img={require('../../../assets/icon/home-active.png')}
          active
        />
        <NavbarIcon img={require('../../../assets/icon/order.png')} />
        <NavbarIcon img={require('../../../assets/icon/help.png')} />
        <NavbarIcon img={require('../../../assets/icon/inbox.png')} />
        <NavbarIcon img={require('../../../assets/icon/account.png')} />
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./src/assets/icon/home-active.png')}
          />
          <Text style={{fontSize: 10, color: '#43AB4A', marginTop: 4}}>
            Home
          </Text>
        </View> */}
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./src/assets/icon/order.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Orders
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./src/assets/icon/help.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            help
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./src/assets/icon/inbox.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            inbox
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./src/assets/icon/account.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            account
          </Text>
        </View> */}
      </View>
    );
  }
}

export default Navbar;
