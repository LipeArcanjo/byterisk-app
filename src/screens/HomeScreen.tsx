import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
 
const HomeScreen = () => {
  return (
<View style={styles.container}>
      {/* Cabeçalho */}
<View style={styles.header}>
<FontAwesome name="user-circle" size={40} color="#007bff" />
<View style={styles.adminInfo}>
<Text style={styles.adminName}>Fulano</Text>
<Text style={styles.adminRole}>Administrador</Text>
</View>
<TouchableOpacity>
<FontAwesome name="bell" size={24} color="gray" />
</TouchableOpacity>
</View>
 
      {/* Barra de Pesquisa */}
<View style={styles.searchContainer}>
<FontAwesome name="search" size={20} color="gray" />
<TextInput placeholder="Buscar..." style={styles.searchInput} />
<TouchableOpacity>
<Ionicons name="options-outline" size={24} color="gray" />
</TouchableOpacity>
</View>
 
      {/* Card Beneficiários */}
<View style={styles.cardBeneficiarios}>
<Text style={styles.cardTitle}>Gerenciar</Text>
<Text style={styles.cardSubtitle}>Beneficiários</Text>
<TouchableOpacity style={styles.cardButton}>
<Text style={styles.cardButtonText}>Acessar</Text>
</TouchableOpacity>
</View>
 
      {/* Indicadores */}
<Text style={styles.sectionTitle}>Estatísticas - Mês atual</Text>
<View style={styles.statsContainer}>
<View style={styles.statCard}>
<FontAwesome name="shield" size={24} color="white" />
<Text style={styles.statValue}>920</Text>
<Text style={styles.statLabel}>Prevenções</Text>
</View>
<View style={styles.statCard}>
<FontAwesome name="stethoscope" size={24} color="white" />
<Text style={styles.statValue}>52</Text>
<Text style={styles.statLabel}>Intervenções</Text>
</View>
<View style={styles.statCard}>
<FontAwesome name="money" size={24} color="white" />
<Text style={styles.statValue}>R$ 9mil</Text>
<Text style={styles.statLabel}>Sinistro reduzido</Text>
</View>
</View>
 
      {/* Mensagens Recentes */}
<Text style={styles.sectionTitle}>Mensagens recentes</Text>
<View style={styles.messageCard}>
<FontAwesome name="user-circle" size={30} color="#007bff" />
<View style={styles.messageContent}>
<Text style={styles.messageTitle}>Ciclano</Text>
<Text style={styles.messageSubtitle}>Assunto: ...</Text>
</View>
<Text style={styles.messageTime}>1h</Text>
</View>
<View style={styles.messageCard}>
<FontAwesome name="user-circle" size={30} color="#007bff" />
<View style={styles.messageContent}>
<Text style={styles.messageTitle}>Ciclano</Text>
<Text style={styles.messageSubtitle}>Assunto: ...</Text>
</View>
<Text style={styles.messageTime}>1h</Text>
</View>
 
      {/* Barra de Navegação */}
<View style={styles.navbar}>
<TouchableOpacity style={styles.navItem}>
<FontAwesome name="home" size={24} color="#007bff" />
<Text style={styles.navText}>Início</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navItem}>
<FontAwesome name="bar-chart" size={24} color="#007bff" />
<Text style={styles.navText}>Dash</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navItem}>
<FontAwesome name="th" size={24} color="#007bff" />
<Text style={styles.navText}>Grid</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navItem}>
<FontAwesome name="users" size={24} color="#007bff" />
<Text style={styles.navText}>Funcionários</Text>
</TouchableOpacity>
</View>
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  adminInfo: {
    flex: 1,
    marginLeft: 10,
  },
  adminName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  adminRole: {
    fontSize: 14,
    color: 'gray',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  cardBeneficiarios: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
  },
  cardSubtitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  cardButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  statLabel: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  messageContent: {
    flex: 1,
    marginLeft: 10,
  },
  messageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  messageTime: {
    fontSize: 12,
    color: 'gray',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#007bff',
    marginTop: 3,
  },
});
 
export default HomeScreen;