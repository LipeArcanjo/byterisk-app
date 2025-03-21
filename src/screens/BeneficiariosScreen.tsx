import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
 
const BeneficiariosScreen = () => {
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
 
      {/* Cards de Estatísticas */}
<View style={styles.statsContainer}>
<View style={styles.statCardBlue}>
<Text style={styles.statTitle}>Novos Beneficiários</Text>
<Text style={styles.statNumber}>3,457</Text>
<Text style={styles.statIncrease}>+15%</Text>
</View>
<View style={styles.statCardRed}>
<Text style={styles.statNumberLarge}>239%</Text>
<Text style={styles.statLabel}>last year</Text>
</View>
</View>
 
      {/* Filtros e Exportação */}
<View style={styles.filterContainer}>
<TouchableOpacity style={styles.filterButton}>
<FontAwesome name="calendar" size={16} color="black" />
<Text style={styles.filterText}>Últimos 6 meses: Jan 1, 2024 - Jun 30, 2024</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.exportButton}>
<FontAwesome name="download" size={16} color="black" />
<Text style={styles.exportText}>Export</Text>
</TouchableOpacity>
</View>
 
      {/* Classificação por Categoria */}
<View style={styles.categoriesContainer}>
<View style={styles.categoryCardRed}>
<Text style={styles.categoryLabel}>F</Text>
<Text style={styles.categoryNumber}>10.789</Text>
</View>
<View style={styles.categoryCardYellow}>
<Text style={styles.categoryLabel}>E</Text>
<Text style={styles.categoryNumber}>40.759</Text>
</View>
<View style={styles.categoryCardGreen}>
<Text style={styles.categoryLabel}>S</Text>
<Text style={styles.categoryNumber}>31.486</Text>
</View>
</View>
 
      {/* Lista de Segurados Críticos */}
<Text style={styles.sectionTitle}>Principais segurados - Críticos</Text>
 
      <View style={styles.insuredCard}>
<Text style={styles.insuredName}>Felipe A. M. S.</Text>
<Text style={styles.insuredDetail}>Idade: <Text style={styles.boldText}>20 Anos</Text></Text>
<Text style={styles.insuredDetail}>CPF: XXX.XXX.XXX-XX</Text>
<Text style={styles.insuredDetail}>Ranking: <Text style={styles.boldText}>99,94</Text></Text>
<Text style={styles.categoryBadge}>Nota F</Text>
<Text style={styles.statusActive}>Status: Ativo</Text>
</View>
 
      <View style={styles.insuredCard}>
<Text style={styles.insuredName}>Gustavo R. F.</Text>
<Text style={styles.insuredDetail}>Idade: <Text style={styles.boldText}>20 Anos</Text></Text>
<Text style={styles.insuredDetail}>CPF: XXX.XXX.XXX-XX</Text>
<Text style={styles.categoryBadge}>Nota F</Text>
<Text style={styles.statusActive}>Status: Ativo</Text>
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
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  adminInfo: { flex: 1, marginLeft: 10 },
  adminName: { fontSize: 18, fontWeight: 'bold' },
  adminRole: { fontSize: 14, color: 'gray' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 15, paddingVertical: 10, marginBottom: 20 },
  searchInput: { flex: 1, marginLeft: 10 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statCardBlue: { backgroundColor: '#007bff', borderRadius: 10, padding: 20, flex: 1, marginRight: 10 },
  statCardRed: { backgroundColor: 'red', borderRadius: 10, padding: 20, justifyContent: 'center', alignItems: 'center' },
  statTitle: { color: '#fff', fontSize: 16 },
  statNumber: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  statIncrease: { color: '#fff', fontSize: 12 },
  statNumberLarge: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  filterContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  filterButton: { flexDirection: 'row', alignItems: 'center' },
  filterText: { marginLeft: 5 },
  exportButton: { flexDirection: 'row', alignItems: 'center' },
  exportText: { marginLeft: 5 },
  categoriesContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  categoryCardRed: { backgroundColor: 'red', borderRadius: 10, padding: 15, alignItems: 'center' },
  categoryCardYellow: { backgroundColor: 'orange', borderRadius: 10, padding: 15, alignItems: 'center' },
  categoryCardGreen: { backgroundColor: 'green', borderRadius: 10, padding: 15, alignItems: 'center' },
  categoryLabel: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  insuredCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
  insuredName: { fontSize: 16, fontWeight: 'bold' },
  insuredDetail: { fontSize: 14, color: 'gray' },
  boldText: { fontWeight: 'bold' },
  categoryBadge: { backgroundColor: 'red', color: '#fff', padding: 5, borderRadius: 5, textAlign: 'center', marginTop: 5 },
  statusActive: { color: 'green', fontWeight: 'bold', marginTop: 5 },
  navbar: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', paddingVertical: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  navText: { fontSize: 12, color: '#007bff', marginTop: 3 },
  statLabel: { color: '#fff', fontSize: 14 },
  navItem: {
    alignItems: 'center',
  },
  categoryNumber: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
});
 
export default BeneficiariosScreen;