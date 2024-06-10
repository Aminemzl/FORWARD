import axios from 'axios'; // Importe axios pour les requêtes HTTP

const api = axios.create({
  baseURL: 'https://your-api-url.com/api', // URL de base de votre API
  timeout: 1000, // Temps d'attente avant expiration
});

export const getProjects = async () => {
  try {
    const response = await api.get('/projects'); // Requête GET pour récupérer les projets
    return response.data; // Retourne les données des projets
  } catch (error) {
    console.error(error); // Affiche les erreurs dans la console
    throw error; // Lance l'erreur
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await api.post('/projects', projectData); // Requête POST pour créer un projet
    return response.data; // Retourne les données du projet créé
  } catch (error) {
    console.error(error); // Affiche les erreurs dans la console
    throw error; // Lance l'erreur
  }
};

export const deleteProject = async (projectId) => {
  try {
    const response = await api.delete(`/projects/${projectId}`); // Requête DELETE pour supprimer un projet
    return response.data; // Retourne la réponse de suppression
  } catch (error) {
    console.error(error); // Affiche les erreurs dans la console
    throw error; // Lance l'erreur
  }
};
