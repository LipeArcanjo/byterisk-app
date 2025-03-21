import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import arcanjoImage from '../../assets/arcanjo.png';
import celoImage from '../../assets/celo.png';
 
const FuncionariosScreen = () => {
  return (
<View style={styles.container}>
      {/* Perfil do Administrador */}
<View style={styles.adminContainer}>
<FontAwesome name="user-circle" size={40} color="#007bff" />
<View style={styles.adminInfo}>
<Text style={styles.adminName}>Fulano</Text>
<Text style={styles.adminRole}>Administrador</Text>
</View>
<TouchableOpacity>
<FontAwesome name="bell" size={24} color="gray" />
</TouchableOpacity>
</View>
 
      {/* Cartões de Usuário */}
<View style={styles.card}>
        <Image source={arcanjoImage} style={styles.avatar} />
    <View style={styles.cardInfo}>
        <Text style={styles.rm}>RM: 554018</Text>
        <Text style={styles.name}>Felipe Arcanjo</Text>
        <Text style={styles.subtitle}>Matos dos santos</Text>
            <View style={styles.row}>
        <FontAwesome name="map-marker" size={16} color="black" />
        <Text style={styles.iconText}>São Paulo</Text>
            </View>
            <View style={styles.row}>
        <FontAwesome name="building" size={16} color="black" />
        <Text style={styles.iconText}>FIAP</Text>
            </View>
        <View style={styles.row}>
        <FontAwesome name="globe" size={16} color="black" />
        <Text style={styles.iconText}>LipeArcanjo</Text>
        </View>
    </View>
</View>

<View style={styles.card}>
        <Image source={celoImage} style={styles.avatar} />
    <View style={styles.cardInfo}>
        <Text style={styles.rm}>RM: 553640</Text>
        <Text style={styles.name}>Marcelo Vieira</Text>
        <Text style={styles.subtitle}>Junior</Text>
            <View style={styles.row}>
        <FontAwesome name="map-marker" size={16} color="black" />
        <Text style={styles.iconText}>São Paulo</Text>
            </View>
            <View style={styles.row}>
        <FontAwesome name="building" size={16} color="black" />
        <Text style={styles.iconText}>FIAP</Text>
            </View>
        <View style={styles.row}>
        <FontAwesome name="globe" size={16} color="black" />
        <Text style={styles.iconText}>X</Text>
        </View>
    </View>
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
  adminContainer: {
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
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  rm: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#007bff',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  iconText: {
    marginLeft: 5,
    fontSize: 14,
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
 
export default FuncionariosScreen;