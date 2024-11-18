// app/screens/Home/Inicio.jsx
import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';  // Arquivo de estilos separado

export default function Inicio() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

// Dados de posts simulados para exibir no feed
const posts = [
  {
    id: 1,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'A Importância da Leitura na Formação dos Alunos',
    conteudo: 'A leitura é uma das habilidades mais essenciais que uma criança pode desenvolver ao longo de sua educação.',
    data: '11/10/2024',
    autor: 'Professor André',
  },
  {
    id: 2,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Como a Tecnologia Pode Ajudar na Educação',
    conteudo: 'A tecnologia pode ser uma aliada poderosa no processo de ensino-aprendizagem, facilitando o acesso à informação.',
    data: '12/10/2024',
    autor: 'Professor Beatriz',
  },
  {
    id: 3,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Benefícios da Educação Física na Escola',
    conteudo: 'A prática regular de atividades físicas contribui para o desenvolvimento físico e mental dos alunos.',
    data: '13/10/2024',
    autor: 'Professor Carlos',
  },
  {
    id: 4,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'A Importância da Arte na Educação Infantil',
    conteudo: 'A arte desempenha um papel fundamental no desenvolvimento cognitivo e emocional das crianças.',
    data: '14/10/2024',
    autor: 'Professor Daniela',
  },
  {
    id: 5,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Estratégias para Melhorar a Concentração dos Alunos',
    conteudo: 'A concentração é uma habilidade que pode ser desenvolvida com técnicas e práticas adequadas.',
    data: '15/10/2024',
    autor: 'Professor Eduardo',
  },
  {
    id: 6,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Dicas para o Ensino Remoto Eficiente',
    conteudo: 'Ensino remoto pode ser desafiador, mas com boas práticas é possível manter o nível de aprendizado dos alunos.',
    data: '16/10/2024',
    autor: 'Professor Fernanda',
  },
  {
    id: 7,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Como Aumentar a Participação dos Pais na Educação',
    conteudo: 'A participação ativa dos pais pode transformar o ambiente de aprendizagem e trazer melhores resultados.',
    data: '17/10/2024',
    autor: 'Professor Gustavo',
  },
  {
    id: 8,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Inovação no Ensino com Gamificação',
    conteudo: 'A gamificação é uma técnica que pode aumentar a motivação dos alunos através de elementos de jogos.',
    data: '18/10/2024',
    autor: 'Professor Helena',
  },
  {
    id: 9,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Metodologias Ativas para Engajar os Alunos',
    conteudo: 'As metodologias ativas colocam os alunos como protagonistas do processo de ensino-aprendizagem.',
    data: '19/10/2024',
    autor: 'Professor Igor',
  },
  {
    id: 10,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Como Criar um Ambiente Escolar Inclusivo',
    conteudo: 'A inclusão de todos os alunos é essencial para um ambiente escolar saudável e acolhedor.',
    data: '20/10/2024',
    autor: 'Professor Juliana',
  },
  {
    id: 11,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'A Importância da Nutrição no Desenvolvimento Escolar',
    conteudo: 'Uma boa alimentação é crucial para o desempenho acadêmico e o bem-estar dos alunos.',
    data: '21/10/2024',
    autor: 'Professor Lucas',
  },
  {
    id: 12,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Técnicas de Relaxamento para Alunos',
    conteudo: 'Ensinar técnicas de relaxamento pode ajudar os alunos a lidarem melhor com o estresse escolar.',
    data: '22/10/2024',
    autor: 'Professora Mariana',
  },
  {
    id: 13,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Aprendendo com Projetos Colaborativos',
    conteudo: 'Os projetos colaborativos ajudam a desenvolver habilidades sociais e de resolução de problemas nos alunos.',
    data: '23/10/2024',
    autor: 'Professor Natan',
  },
  {
    id: 14,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'O Papel do Professor na Motivação dos Alunos',
    conteudo: 'A motivação é uma das chaves para o sucesso escolar e o professor desempenha um papel fundamental nesse processo.',
    data: '24/10/2024',
    autor: 'Professora Olivia',
  },
  {
    id: 15,
    imagem: require('../../../assets/images/capaPost.png'),
    titulo: 'Como Implementar Aulas Interativas',
    conteudo: 'Aulas interativas tornam o aprendizado mais dinâmico e ajudam os alunos a absorver melhor o conteúdo.',
    data: '25/10/2024',
    autor: 'Professor Paulo',
  },
];

  // Função para navegação ao tocar no post
  const handlePress = (post) => {
    navigation.navigate('Entrar', {
      titulo: post.titulo,
      conteudo: post.conteudo,
      data: post.data,
      autor: post.autor,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Cabeçalho da página */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
          <Text style={styles.titulo}>Bem Vindo, Professor</Text>
        </View>
        {/* Barra de Pesquisa */}
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

      {/* Conteúdo - Posts */}
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
