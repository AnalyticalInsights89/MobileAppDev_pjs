import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default function AddToCart({ route }) {
  const { cartItems = [] } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>No items in cart</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item, idx) => idx.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  empty: { fontSize: 18, color: 'gray', textAlign: 'center', marginTop: 20 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  name: { fontSize: 18 },
});
