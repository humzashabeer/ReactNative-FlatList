import React from "react";
import {TouchableOpacity,Text,Image,StyleSheet, View} from 'react-native'

const Item = ({Name , image, likeIcon, favIcon, Description}) => (
  <View style={styles.container}>
    
      <View style={styles.products}>
       
      <Image source={image} style={styles.imageStyle} />
      <View>
      <Text style={styles.title}>{Name}</Text>
      <Text style={styles.title}>{Description}</Text>
      <View style={styles.iconArrange}>
       <TouchableOpacity> 
       <Image source={likeIcon} style={styles.imageIconStyle}/></TouchableOpacity>
      <TouchableOpacity>
      <Image source={favIcon} style={styles.imageIconStyle}/></TouchableOpacity>
      </View>
      </View>
      </View>
      
     
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    
    title:{
      fontSize: 15,
      fontWeight:'bold',
      color:'black',
      alignItems:'flex-start',
      marginTop:10,
      marginLeft:10,
      marginRight:10,
      fontFamily:'Poppins-Regular'
      
      
    },
    imageStyle:{
        height:250,
        width:150,
       alignItems:'flex-start',
       marginVertical:10,
       marginHorizontal:10
       
       
      },
      
    imageIconStyle:{
        height:50,
        width:50,
        margin:15,
        backgroundColor:'white',
     
       
      },

      iconArrange: {
        alignItems:'center',
        flexDirection:'row',
        marginTop:130
      
        
      },

      touchable:{
        alignItems:'center',
        justifyContent:'space-around',
        alignContent:'space-around'
      },
      products:{
        borderRadius:12,
        borderColor:'red',
        borderWidth:3,
        height:290,
        width:350,
        margin:15,
        backgroundColor:'gray',
        justifyContent:'space-between',
        alignItems:'flex-start',
        flexDirection:"row",
        alignContent:"space-around"
        
      }

  });
  export default Item;

