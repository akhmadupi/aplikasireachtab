import * as React from 'react'
import { StyleSheet,Text,View,Image,Button,ScrollView  } from 'react-native';
const baseUrl = 'http://solusiapp.com/gambar';

export default function DetailsScreen({ route, navigation }) {
  
  const { id,ndr,tipe,keterangan,luastanah,luas_klt,foto,lokasi,harga } = route.params;


  //const { harga } = route.params;
  return (
   <ScrollView>
    <View style={styles.container}>
     <View style={[styles.box1]}>
     <Image source={{ uri: `${baseUrl}/${foto}`}} style={styles.Image} />
     </View>
    <View style={[ styles.box2]}>
    <Text>Lokasi:{lokasi}</Text>
    <Text>NDR:{ndr}</Text>
    <Text>Type:{tipe}</Text>
    <Text>Luas Tanah:{luastanah}</Text>
    <Text>Luas KLT:{luas_klt}</Text>
    <Text>Harga:{harga}</Text>

    </View>
    <View style={[ styles.box3]}>
    <Button 
        onPress={() => {
          navigation.navigate('Ordersdata', {
          idrumah: id,
          ndr: ndr,
          lokasi: lokasi,
          harga: harga,
          });
      }}
        color="coral"
        title="Order" 
    />
    </View>
    </View>


  </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#DDD',
    margin:10
  },
  box1: {
    backgroundColor: '#FFF'
  },
  box2: {
    backgroundColor: '#FFF',
    marginTop:20,
  },
  box3: {
    backgroundColor: '#FFF',
    marginTop:20,
  },

  Image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    margin:5
}
})