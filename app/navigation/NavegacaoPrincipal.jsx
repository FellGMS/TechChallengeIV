// app/navigation/NavegacaoPrincipal.jsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavegacaoTab from './NavegacaoTab';
import DetalhesPost from '../screens/Home/DetalhesPost'; // Certifique-se de que o caminho esteja correto

const Stack = createStackNavigator();

export default function NavegacaoPrincipal() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tela principal com as Tabs */}
      <Stack.Screen name="NavegacaoTab" component={NavegacaoTab} />
      
      {/* Tela de detalhes do post */}
      <Stack.Screen name="DetalhesPost" component={DetalhesPost} />
    </Stack.Navigator>
  );
}
