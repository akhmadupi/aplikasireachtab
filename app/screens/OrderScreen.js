import * as React from 'react'
import { TextInput, Text, Button, Alert, View, StyleSheet } from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'

export default function OrderScreen({ route, navigation }) {
 // alert(route)
  const { idrumah,ndr,lokasi,harga } = route.params;

  const pindahKehome = () =>{
   navigation.navigate('HomeScreen');
   
  }


  const addReview = (values) => {

    //alert(values.name); http://10.10.12.148/react/inputPesanan.php
    fetch('http://solusiapp.com/inputPesanan.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idrumah: idrumah,
        harga: harga,
        name: values.name,
        nohp: values.nohp,
        alamat: values.alamat
    
      })
    
    }).then((response) => response.json())
          .then((json) => {
    
            alert("Simpan Data Berhasil");
            pindahKehome();
          }).catch((error) => {
            console.error(error);
          });
  
  }



return (
<Formik
  initialValues={{ 
    name: '',
    nohp: '', 
    alamat: '' 
  }}
  onSubmit={(values) => {
    // Proses penyimpanan data
    // console.log(values);
    addReview(values);                    
}}
 


  validationSchema={yup.object().shape({
    name: yup
      .string()
      .required('Nama Pelangan Harus Diisi!'),
      nohp: yup
      .string()
      .required('No HP Pelangan Harus Diisi!'),
      alamat: yup
      .string()
      .required('Alamat Pelangan Harus Diisi!'),
  })}
 >
  {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
    <View style={styles.formContainer}>
      <TextInput style={styles.hiddenInput }
        value={idrumah}
        editable={false}
        onChangeText={handleChange('idrumah')}
        onBlur={() => setFieldTouched('idrumah')}
        placeholder="ID"
      />
      <TextInput
        value={lokasi} style={styles.inputStyle}
        editable={false}
        onChangeText={handleChange('lokasi')}
        onBlur={() => setFieldTouched('lokasi')}
        placeholder="Lokasi"
      />
      <TextInput style={styles.inputStyle}
        value={ndr}
        editable={false}
        onChangeText={handleChange('ndr')}
        onBlur={() => setFieldTouched('ndr')}
        placeholder="NDR"
      />
      <TextInput style={styles.inputStyle}
        value={harga}
        editable={false}
        onChangeText={handleChange('harga')}
        onBlur={() => setFieldTouched('harga')}
        placeholder="Harga"
      />
      



      <TextInput style={styles.inputStyle}
        value={values.name}
        onChangeText={handleChange('name')}
        onBlur={() => setFieldTouched('name')}
        placeholder="Name Pemesan"
      />
      {touched.name && errors.name &&
        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
      }            
      <TextInput style={styles.inputStyle}
        value={values.nohp}
        onChangeText={handleChange('nohp')}
        onBlur={() => setFieldTouched('nohp')}
        placeholder="No HP"
      />
      {touched.nohp && errors.nohp &&
        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.nohp}</Text>
      }
      <TextInput style={styles.inputStyle}
        value={values.alamat}
        onChangeText={handleChange('alamat')}
        placeholder="Alamat"
        onBlur={() => setFieldTouched('alamat')}
      />
      {touched.alamat && errors.alamat &&
        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.alamat}</Text>
      }
      <Button
        color="#3740FE"
        title='Simpan'
        disabled={!isValid}
        onPress={handleSubmit}
      />

    </View>
  )}
</Formik>
);

}


const styles = StyleSheet.create({
  formContainer: {
    padding: 10 
  },
  inputStyle :{
    borderWidth: 1,
    borderColor: '#4e4e4e',
    padding: 3,
    fontSize:30,
    fontSize:14,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color:"#000"
    },
    hiddenInput: {
      width: 0,
      height: 0,
    },
});