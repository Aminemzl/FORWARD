import React, { useState, useEffect } from 'react'; // Importe les hooks React
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'; // Importe les composants React Native
import { FontAwesome } from '@expo/vector-icons'; // Importe les icônes FontAwesome
import { getProjects, createProject, deleteProject } from '/services/api'; // Importe les fonctions API

const Dashboard = () => {
  const [projects, setProjects] = useState([]); // Initialise l'état des projets

  useEffect(() => {
    // Utilise useEffect pour exécuter du code après le montage du composant
    const fetchProjects = async () => {
      try {
        const projects = await getProjects(); // Récupère les projets via l'API
        setProjects(projects); // Met à jour l'état des projets
      } catch (error) {
        console.error('Failed to fetch projects:', error); // Gère les erreurs
      }
    };

    fetchProjects(); // Appelle la fonction pour récupérer les projets
  }, []); // Tableau de dépendances vide signifie que ça s'exécute une seule fois

  const handleCreateProject = async () => {
    try {
      const newProject = { name: 'New Project' }; // Exemple de données de projet
      const createdProject = await createProject(newProject);
      setProjects([...projects, createdProject]);
    } catch (error) {
      console.error('Failed to create project:', error);
    }
  };
  
  const handleDeleteProject = async (projectId) => {
    try {
      await deleteProject(projectId);
      setProjects(projects.filter(project => project.id !== projectId));
    } catch (error) {
      console.error('Failed to delete project:', error);
    }
  };
  

  return (
    <ImageBackground source={{ uri: 'https://www.alliancy.fr/wp-content/uploads/2023/03/move-to-cloud-comment-penser-lapres-projet.jpg.webp' }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>BIENVENUE, ROMAIN DUCLOS (Chef de projet)</Text>
          <View style={styles.headerIcons}>
            <FontAwesome name="bell" size={30} color="yellow" />
            <Text style={styles.notificationCount}>3</Text>
            <FontAwesome name="download" size={30} color="white" />
          </View>
        </View>
        <View style={styles.logoContainer}>
          <ImageBackground source={{ uri: 'https://imagizer.imageshack.com/img923/7079/DiPvZI.png' }} style={styles.logo} />
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Rechercher un projet..." />
          <FontAwesome name="search" size={20} color="gray" />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createButton} onPress={handleCreateProject}>
            <Text style={styles.buttonText}>Créer un projet</Text>
            <FontAwesome name="plus" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteProject(selectedProjectId)}>
            <Text style={styles.buttonText}>Supprimer un projet</Text>
            <FontAwesome name="trash" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.projectContainer}>
          <Text style={styles.projectHeader}>MES PROJETS</Text>
          <View style={styles.projects}>
            {projects.map((project) => (
              <TouchableOpacity key={project.id} style={styles.projectCircle}>
                <Text>{project.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <FontAwesome name="history" size={20} color="white" />
            <Text style={styles.footerButtonText}>Historique des activités</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <FontAwesome name="comment" size={20} color="white" />
            <Text style={styles.footerButtonText}>Déposer un commentaire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: 'white',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationCount: {
    color: 'yellow',
    marginLeft: -10,
    marginRight: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    marginRight: 10,
  },
  projectContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  projectHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  projects: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  projectCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#404040',
    borderRadius: 10,
  },
  footerButtonText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default Dashboard;
