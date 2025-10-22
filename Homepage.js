import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';

export default function Homepage({ navigation }) {
  const categories = [
    {
      name: 'Winter',
      image: 'https://m.media-amazon.com/images/I/71BM7hxnbYL._UY1000_.jpg',
      screen: 'Winter'
    },
    {
      name: 'Summer',
      image: 'https://images.unsplash.com/photo-1560859259-fcf2b952aed8?auto=format&fit=crop&w=870&q=80',
      screen: 'Summer'
    },
    {
      name: 'Perfumes',
      image: 'https://theperfumeclub.pk/cdn/shop/collections/c3.png?v=1748690410&width=1080',
      screen: 'Perfumes'
    },
    {
      name: 'Sale',
      image: 'https://images.unsplash.com/photo-1572584642822-6f8de0243c93?auto=format&fit=crop&w=800&q=60',
      screen: 'Sale'
    }
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://plus.unsplash.com/premium_photo-1687173116184-2277b7a516ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JmdWwlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500' }}
      style={{ flex: 1 }}
    >
    <ScrollView>
        <Text style={styles.title}>🛍️ Fashion Store</Text>

      <View style={styles.grid}>
        {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
            onPress={() => navigation.navigate(item.screen)}>

              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#222'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20
  },
  card: {
    width: '47%',
    height:'50%',
    backgroundColor: 'rgba(255,255,255,0.9)',  
    borderRadius: 10,
    marginBottom: 5,
    alignItems: 'center',
    padding: 10,
     
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8
  },
  name: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600'
  }
});
