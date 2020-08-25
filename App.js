import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import {v4 as uuid } from 'uuid';


function App (){
  const [items,setItems] =  useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ])

  return(
    <View style ={styles.container}>
        <Header />
    </View>
  );
};

2364564576

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 60
  }
})
export default App;