import React from 'react';
import { FlatList } from 'react-native';
import Data from '../components/arrdata';
import Item from '../components/item';

export default function HomeScreen() {
  const renderItem=({item})=>(
    <Item Name={item.Name} Description={item.Description} price={item.price}
     image={item.image} likeIcon={item.likeIcon} favIcon={item.favIcon}/>
  );

  
  return (
    
    <FlatList
       data={Data}
       renderItem={renderItem}
       keyExtractor={(item)=>item.Name}
       />
  );
}


