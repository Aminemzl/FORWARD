import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'; // Importe les composants React Native
import { FontAwesome } from '@expo/vector-icons'; // Importe les icônes FontAwesome

const ProjectScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ROMAIN DUCLOS (Chef de projet)</Text>
        <View style={styles.projectNameContainer}>
          <Text style={styles.projectName}>PROJET P1</Text>
          <FontAwesome name="download" size={30} color="white" style={styles.downloadIcon} />
        </View>
      </View>
      <View style={styles.teamSection}>
        <Text style={styles.teamText}>Mon équipe (4)</Text>
        <View style={styles.teamIcons}>
          <FontAwesome name="user-circle" size={30} color="green" />
          <FontAwesome name="user-circle" size={30} color="green" />
          <FontAwesome name="user-circle" size={30} color="green" />
          <FontAwesome name="user-circle" size={30} color="orange" />
        </View>
      </View>
      <View style={styles.statisticsSection}>
        <Text>Tâches totale : 60</Text>
        <Text>Tâches réalisées : 27</Text>
        <Text>Tâche restantes : 17</Text>
        <View style={styles.dates}>
          <Text>19/07/23</Text>
          <Text>25/12/23</Text>
        </View>
        <View style={styles.progressCircle}>
          <Text style={styles.progressText}>65%</Text>
        </View>
      </View>
      <View style={styles.membershipButtons}>
        <TouchableOpacity style={styles.addMemberButton}>
          <FontAwesome name="user-plus" size={20} color="green" />
          <Text style={styles.buttonText}>Ajouter un membre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeMemberButton}>
          <FontAwesome name="user-times" size={20} color="red" />
          <Text style={styles.buttonText}>Révoquer un membre</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskSection}>
        <TouchableOpacity style={styles.taskButton}>
          <Text style={styles.taskButtonText}>Tâche(s) terminée(s)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton}>
          <Text style={styles.taskButtonText}>Tâche(s) en cours</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton}>
          <Text style={styles.taskButtonText}>Tâche(s) à venir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="plus" size={20} color="white" />
          <Text style={styles.footerButtonText}>Ajouter une tâche</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="tasks" size={20} color="white" />
          <Text style={styles.footerButtonText}>Gérer une tâche</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={{ uri: 'https://imagizer.imageshack.com/img923/7079/DiPvZI.png' }} style={styles.logo} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#008080',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    color: 'white',
  },
  projectNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectName: {
    fontSize: 24,
    color: 'white',
    marginVertical: 10,
  },
  downloadIcon: {
    marginRight: 10,
  },
  teamSection: {
    backgroundColor: '#404040',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  teamText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  teamIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statisticsSection: {
    backgroundColor: '#808080',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  progressCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#008080',
    alignSelf: 'center',
  },
  progressText: {
    color: 'white',
    fontSize: 18,
  },
  membershipButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  addMemberButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
  },
  removeMemberButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    marginLeft: 10,
  },
  taskSection: {
    backgroundColor: '#d0d0d0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  taskButton: {
    backgroundColor: '#a0a0a0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  taskButtonText: {
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#404040',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
    marginLeft: 10,
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 10,
  },
  logo: {
    width: 150,
    height: 50,
  },
});

export default ProjectScreen;
