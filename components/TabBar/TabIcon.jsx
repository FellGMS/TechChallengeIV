import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function TabIcon({ icon, color, focused }) {
  return (
    <View style={styles.iconContainer}>
      <Image source={icon} style={[styles.icon, { tintColor: color }]} />
      <Text style={[styles.label, { color }]}>{focused ? '•' : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});
