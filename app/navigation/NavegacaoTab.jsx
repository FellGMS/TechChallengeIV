// app/navigation/NavegacaoTab.jsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Inicio from '../screens/Home/Inicio';
import Postagens from '../screens/Home/Postagens';
import ListaProfessores from '../screens/Home/ListaProfessores';
import Perfil from '../screens/Home/Perfil/Perfil';
import Entrar from '../screens/Home/Perfil/Entrar';
import TabBarIcon from '../../components/TabBar/TabIcon';

const Tab = createBottomTabNavigator();

export default function NavegacaoTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FBED51',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#2579E7',
          borderTopWidth: 1,
          borderTopColor: '#2579E7',
          height: 70,
          paddingBottom: 2,
          paddingTop: 5,
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          let iconSize = focused ? 22 : 20;

          switch (route.name) {
            case 'Home':
              iconName = require('../../assets/icons/home.png');
              break;
            case 'Postagens':
              iconName = require('../../assets/icons/posts.png');
              break;
            case 'Professores':
              iconName = require('../../assets/icons/users.png');
              break;
            case 'Perfil':
              iconName = require('../../assets/icons/user.png');
              break;
            case 'Login':
              iconName = require('../../assets/icons/log-in.png');
              break;
            default:
              iconName = require('../../assets/icons/home.png');
          }

          return (
            <TabBarIcon
              icon={iconName}
              color={color}
              size={iconSize}
              focused={focused}
            />
          );
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Inicio}
      />
      <Tab.Screen
        name="Postagens"
        component={Postagens}
      />
      <Tab.Screen
        name="Professores"
        component={ListaProfessores}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />
      <Tab.Screen
        name="Login"
        component={Entrar}
      />
    </Tab.Navigator>
  );
}
