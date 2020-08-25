import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import {v4 as uuid } from 'uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem'


function App (){
  const [items,setItems] =  useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  function deleteItem (id){
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  function addItem (item){
    setItems(prevItems => {
      return [{id: uuid, text: item}, ...prevItems]
    })
  }

  return(
    <View style ={styles.container}>
        <Header />
        <AddItem addItem = {addItem} />
        <FlatList data = {items} renderItem={({item}) => <ListItem item = {item} deleteItem = {deleteItem}/>
        }/>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 60
  }
})
export default App;