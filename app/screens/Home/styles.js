// app/screens/Home/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    paddingVertical: 16,
    backgroundColor: '#2579E7',
    width: '100%',
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
  },
  titulo: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 12,
    flexShrink: 1,
  },
  barraPesquisa: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 5,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  imgPesquisa: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  inputPesquisa: {
    flex: 1,
    fontSize: 16,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  postContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra (horizontal e vertical)
    shadowOpacity: 0.1, // Opacidade da sombra (suave)
    shadowRadius: 4, // Difusão da sombra
    elevation: 3, // Para aplicar a sombra no Android
  },
  capaPost: {
    width: '100%',
    height: 150,
  },
  infoPost: {
    padding: 12,
  },
  tituloPost: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  resumoPost: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  infoPostRodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: {
    fontSize: 12,
    color: '#999',
  },
  autor: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});
