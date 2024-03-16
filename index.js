import React from 'react';
import {View, StyleSheet} from 'react-native';
import audioTag from 'reactjs-audiotag';

const Index = () => {
  return (
    <View>
      <p>i_love_du</p>
      {audioTag()}
    </View>
  );
}

const styles = StyleSheet.create({})

export default Index;