import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function PretScreen({ navigation }) {
  const items = [
    {
      name: 'Stylish Pret',
      price: 'Rs. 2500',
      image: 'https://media.istockphoto.com/id/2211245582/photo/a-traveler-in-a-bright-dress-is-walking-along-a-sunny-street-with-palm-trees-around.webp?a=1&b=1&s=612x612&w=0&k=20&c=m3PtBh599UPWMTUut0b2f3XrRxxi2QCO2XvQBEWlIk0=',
    },
    {
      name: 'Pakistani Collection',
      price: 'Rs. 3000',
      image: 'https://images.unsplash.com/photo-1742800788220-1e42256d6022?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R5bGlzaCUyMHByZXQlMjBwYWtpc3RhbmklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Pret Collection</Text>
      <View style={styles.grid}>
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e91e63',
    textAlign: 'center',
    marginVertical: 15,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '47%',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center',
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  name: { fontSize: 16, fontWeight: '600', marginTop: 8 },
  price: { fontSize: 14, color: '#666', marginBottom: 5 },
  btn: {
    backgroundColor: '#ec407a',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});
