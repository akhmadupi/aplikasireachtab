import { useState,useEffect } from "react";

import { StyleSheet,Text,View,Button,FlatList,SafeAreaView,ScrollView  } from 'react-native';
import Search from '../content/Search';
//import Header from '../content/Header';
import Datarumahcari from "../content/Datarumahcari";
//import DetailsScreen from './app/screens/DetailScreen';

export default function HomeScreen({ navigation }) {
 // alert(navigation)
    const [term, setTerm] = useState("");
    const [datacari, setDatacari] = useState("RS");

   
  const submitHandler = (text) => {
    setDatacari(text); 
  } 
    return (
      <View style={ styles.container }>
        <Search setTerm={setTerm} submitHandler={submitHandler}/>
        <Datarumahcari navigation={navigation} term={datacari} />
       
      </View>
    );

    
    
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },    
});