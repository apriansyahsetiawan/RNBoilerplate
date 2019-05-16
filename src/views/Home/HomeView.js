import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import NavigationServices from '../../navigations/NavigationServices';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> HOME VIEW </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
