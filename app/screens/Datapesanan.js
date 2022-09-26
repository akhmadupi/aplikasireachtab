import React, { useState , useEffect} from 'react';
import { StyleSheet,Text,View,Image,FlatList,ActivityIndicator  } from 'react-native';
import Axios from 'axios';
const baseUrl = 'http://solusiapp.com/gambar';
import {  useIsFocused } from '@react-navigation/native';

export default function Datapesanan() {
    const isFocused = useIsFocused();
    const [state, setState] = useState({
        data: {},
        isLoading: true,
        isError: false
      });
    //  alert("d")
      useEffect(() => {
        getDatarumahcarilist()
        },[]);

        const getDatarumahcarilist = async () => {
            
            try {
                const response = await Axios.get(`http://solusiapp.com/dataOrderprsan.php`)
                setState({ isError: false, isLoading: false, data: response.data })
    
            } catch (error) {
                setState({  isError: true,isLoading: false,data:false  })
            }
        }


        
    if (state.isLoading) {
        return (
            <View
                style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
            >
                <ActivityIndicator size='large' color='red' />
            </View>
        )
    }

    else if (state.isError) {
        return (
            <View
                style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
            >
                <Text>Koneksi Gagal</Text>
            </View>
        )
    }




  //const { harga } = route.params;
 
  return (
    <FlatList
            data={state.data}
            renderItem={({ item }) =>

    <View style={styles.container}>
        <View style={[styles.box1]}>
            <Image source={{ uri: `${baseUrl}/${item.foto}`}} style={styles.Image} />
        </View>
        <View style={[ styles.box2]}>
            <Text>Lokasi:{item.lokasi}</Text>
            <Text>NDR:{item.ndr}</Text>
            <Text>Type:{item.tipe}</Text>
            <Text>Luas Tanah:{item.luastanah}</Text>
            <Text>Luas KLT:{item.luas_klt}</Text>
            <Text>Harga:{item.harga}</Text>
            <Text>Nama Pemesan:{item.name}</Text>
            <Text>No Hp:{item.nohp}</Text>
            <Text>Alamat:{item.alamat}</Text>
        </View>
    </View>
    }

    />
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