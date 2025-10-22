import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WinterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Winter Collection</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Pret')}>
        <Text style={styles.btnText}>Pret</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Unstitched')}>
        <Text style={styles.btnText}>Unstitched</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e3f2fd', justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#0d47a1', marginBottom: 20 },
  btn: {
    backgroundColor: '#1976d2',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10,
  },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '500' },
});
