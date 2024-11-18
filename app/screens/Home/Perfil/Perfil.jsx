import React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

export default function Perfil() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
          <Image style={styles.logo} source={require('../../../../assets/images/logo.png')} />
          <Text style={styles.titulo}>Meu Perfil</Text>
        </View>

        {/* Conteúdo do Perfil */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.profileContainer}>
            <Image style={styles.profileImage} source={require('../../../../assets/images/capaPost.png')} />
            <Text style={styles.profileName}>Professor André</Text>
            <Text style={styles.profileDescription}>Professor de Matemática com 10 anos de experiência em ensino fundamental e médio.</Text>

            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
