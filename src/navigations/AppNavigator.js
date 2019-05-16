import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import NavigationServices from './NavigationServices';

import HomeView from '../views/Home/HomeView';

const { width, height } = Dimensions.get('window');

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer
          ref={navigatorRef => {
            NavigationServices.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      HomeView: { screen: HomeView }
    },
    {
      initialRouteName: 'HomeView',
      headerMode: 'none'
    }
  )
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
