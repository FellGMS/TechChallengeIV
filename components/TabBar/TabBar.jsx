import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabBar = () => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6200ee',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
});
