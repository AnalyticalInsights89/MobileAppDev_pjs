import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function MenPerfumeScreen({ navigation }) {
  const items = [
    { name: 'YSL Black Opium', image: 'https://images.unsplash.com/photo-1737424065216-bc51dd626175?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW5wZXJmdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500' },
    { name: 'Dior', image: 'https://images.unsplash.com/photo-1723391962110-299d412ca046?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVucGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500' },
    { name: 'PRADA', image: 'https://images.unsplash.com/photo-1704900167315-7753910e665a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVucGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Our Top Perfumes</Text>
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
    color: '#d81b60',
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
    backgroundColor: '#ec6999ff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});
