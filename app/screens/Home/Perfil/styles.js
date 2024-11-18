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
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  profileContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 24,
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  profileDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: '#2579E7',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
