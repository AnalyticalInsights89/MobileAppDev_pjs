import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';

const saleItems = [
  { name: 'Winter Jacket', price: 'Rs. 1800 (Sale)', image: 'https://images.unsplash.com/photo-1640501986254-0020f49593fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyJTIwamFja2V0JTIwc2FsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500' },
  { name: 'Summer Dress', price: 'Rs. 1300 (Sale)', image: 'https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lciUyMGRyZXNzc2FsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500' },
  { name: 'Perfume Set', price: 'Rs. 999 (Sale)', image: 'https://images.unsplash.com/photo-1587304946976-cbbbafce2133?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyZnVtZSUyMHNldCUyMHNhbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500' },
];

export default function SaleScreen() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={{uri:'https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500'}}
        style={{flex:1}}  resizeMode="cover"
        >
      <Text style={styles.heading}>Sale Products</Text>
      <View style={styles.grid}>
        {saleItems.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
             
          </View>
        ))}
      </View>
      </ImageBackground>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#ffffffff', padding: 1 },
  heading: {
    fontSize: 22,
    fontWeight: ' bold',
    color: '#ffffffff',
    textAlign: 'center',
    marginVertical: 15,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 3,
    paddingBottom: 10,
  },
  image:
  { width: '100%', height: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  name: { fontSize: 16, fontWeight: '600', textAlign: 'center', marginTop: 8 },
  price: { color: '#e65100', textAlign: 'center', marginVertical: 5 },
  btn: {
    backgroundColor: '#ee9b81ff',
    paddingVertical: 10,
    marginHorizontal: 25,
    borderRadius: 5,
  },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
