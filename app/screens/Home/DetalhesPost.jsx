// app/screens/Home/DetalhesPost.jsx
import React from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';

export default function DetalhesPost() {
  const route = useRoute();
  const { titulo, conteudo, data, autor, imagem } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
          <Text style={styles.titulo}>{titulo}</Text>
        </View>
      </View>

      <View style={styles.postContainer}>
        <Image style={styles.capaPost} source={imagem} />
        <View style={styles.infoPost}>
          <Text style={styles.tituloPost}>{titulo}</Text>
          <Text style={styles.resumoPost}>{conteudo}</Text>
          <View style={styles.infoPostRodape}>
            <Text style={styles.data}>{data}</Text>
            <Text style={styles.autor}>{autor}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
