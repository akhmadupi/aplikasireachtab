import React, { useState , useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator,Button } from 'react-native';
import Axios from 'axios';
const baseUrl = 'http://solusiapp.com/gambar';
//import useCaridata from '../hook/useCaridata';


export default function Datarumahcari({ navigation ,term}) {
    
    const [state, setState] = useState({
        data: {},
        isLoading: true,
        isError: false
      });
    // console.log(term)
      useEffect(() => {
      // alert(term)
        getDatarumahcari(term);
        
        },[term]);  

     const getDatarumahcari = async (term) => {
        //alert(term)  
        try {
            const url = `http://solusiapp.com/dataRumahcari.php?nama=${term}`;
            const response = await Axios.get(url)
            console.log(response.data);
            setState({ isError: false, isLoading: false, data: response.data })

        } catch (error) {
            setState({ isLoading: false, isError: true,data:false })
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

    return (
        <FlatList
            data={state.data}
            renderItem={({ item }) =>
            
                <View style={styles.viewList}>
                    
                    <View>
                        <Image source={{ uri: `${baseUrl}/${item.foto}`}} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.textItemlist}> {item.lokasi}</Text>
                        <Text style={styles.textItemlist}> {item.ndr}</Text>
                        <Text style={styles.textItemHarga}> {item.harga}</Text>
                        <View style={styles.butonDetail}>
                        <Button 
                            onPress={() => {
                                navigation.navigate('Details', {
                                id: item.id,
                                ndr: item.ndr,
                                tipe: item.tipe,
                                keterangan: item.keterangan,
                                luastanah: item.luastanah,
                                luas_klt: item.luas_klt,
                                foto: item.foto,
                                lokasi: item.lokasi,
                                harga: item.harga,
                                });
                            }}
                            color="coral"
                            title="Detail" 
                        />
                        </View>
                    </View>
                    
                    
                </View>
            }
          
        />
    );
        

}

const styles = StyleSheet.create({
    viewList: {
        height: 150,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#DDD',
        alignItems: 'center'
    },
    butonDetail:{
        top:10,
        width: 88,
        height: 80,
        marginLeft:30,
    },
    Image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        margin:20
    },
    textItemlist: {
        top:25,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginLeft: 20,
        fontSize: 16
    },
    textItemHarga: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginLeft: 20,
        fontSize: 20,
        marginTop: 25,
        color: 'blue'
    }
})

