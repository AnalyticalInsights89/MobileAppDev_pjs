import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function SummerScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://plus.unsplash.com/premium_photo-1749544314749-d7643e41d5db?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80',
      }}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Summer Collection</Text>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Pret')}>
          <Text style={styles.btnText}>Pret</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Unstitched')}>
          <Text style={styles.btnText}>Unstitched</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  container: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8f8f8ff',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#fbc02d',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
