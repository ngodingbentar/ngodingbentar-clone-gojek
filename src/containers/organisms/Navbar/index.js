import React, {Component} from 'react';
import {View} from 'react-native';
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
      </View>
    );
  }
}

export default Navbar;
