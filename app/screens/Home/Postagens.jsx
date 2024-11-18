// app/screens/Home/Postagens.jsx
import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const posts = [
  {
    id: 1,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Como a Tecnologia Pode Facilitar o Aprendizado',
    conteudo: 'A tecnologia trouxe inúmeras ferramentas que facilitam o aprendizado dos alunos, tornando as aulas mais dinâmicas.',
    data: '21/10/2024',
    autor: 'Professor Carlos',
  },
  // Outros posts...
];

export default function Postagens() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  // Função para navegação ao clicar no post
  const handlePress = (post) => {
    navigation.navigate('DetalhesPost', {
      titulo: post.titulo,
      conteudo: post.conteudo,
      data: post.data,
      autor: post.autor,
      imagem: post.imagem,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
          <Text style={styles.titulo}>Postagens</Text>
        </View>
        <View style={styles.barraPesquisa}>
          <Image style={styles.imgPesquisa} source={require('../../../assets/icons/search.png')} />
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="#999"
            style={styles.inputPesquisa}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {posts.map((post, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(post)} style={styles.postContainer}>
            <Image style={styles.capaPost} source={post.imagem} />
            <View style={styles.infoPost}>
              <Text style={styles.tituloPost}>{post.titulo}</Text>
              <Text style={styles.resumoPost}>{post.conteudo}</Text>
              <View style={styles.infoPostRodape}>
                <Text style={styles.data}>{post.data}</Text>
                <Text style={styles.autor}>{post.autor}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
