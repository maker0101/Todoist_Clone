import { useState, useEffect, useContext } from 'react';
import { useLocation, matchPath, useNavigate } from 'react-router-dom';
import {
  onSnapshot,
  collection,
  doc,
  query,
  where,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';
import { ProjectFormContext } from '../contexts/ProjectFormContext';
import { ProjectModalContext } from '../contexts/ProjectModalContext';
import { INBOX_PROJECT_ID } from '../constants/inbox-project-id';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const { user } = useContext(UserContext);
  const { setSelectedProject } = useContext(SelectedProjectContext);
  const { clearProjectForm } = useContext(ProjectFormContext);
  const { setIsProjectModalOpen } = useContext(ProjectModalContext);
  const location = useLocation();
  const navigate = useNavigate();

  const getProjectsFromDB = () => {
    const projectsQuery = query(
      collection(db, 'projects'),
      where('userId', '==', user?.uid)
    );
    return onSnapshot(projectsQuery, (querySnapshot) => {
      const projectsSnapshot = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects(projectsSnapshot);
    });
  };

  const getProjectById = (projects, projectId) =>
    projects.find((project) => project.id === projectId);

  const getProjectsExceptInbox = () =>
    projects.filter((project) => project.isInbox === false);

  const getCurrentProject = () => {
    const match = matchPath(
      {
        path: '/project/:id',
        exact: true,
        strict: true,
      },
      location.pathname
    );

    const currentProjectId = match?.params.id || INBOX_PROJECT_ID;
    const currentProject = getProjectById(projects, currentProjectId);
    return currentProject;
  };

  const addSeedProject = async (project) => {
    try {
      await setDoc(doc(db, 'projects', project.id), {
        name: project.name,
        colorId: project.colorId,
        isInbox: project.isInbox,
        userId: user?.uid,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const addProject = async (project) => {
    try {
      await addDoc(collection(db, 'projects'), {
        name: project.name,
        colorId: project.colorId,
        isInbox: project.isInbox,
        userId: user?.uid,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateProject = async (project) => {
    try {
      const projectDoc = doc(db, 'projects', project.id);
      await updateDoc(projectDoc, {
        name: project.name,
        colorId: project.colorId,
        isInbox: project.isInbox,
        userId: user?.uid,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      const projectDoc = doc(db, 'projects', projectId);
      await deleteDoc(projectDoc);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteProject = (projectId) => {
    deleteProject(projectId);
    clearProjectForm();
    setIsProjectModalOpen(false);
    navigate('/inbox');
  };

  useEffect(() => {
    if (user) {
      return getProjectsFromDB();
    }
  }, [user]);

  useEffect(
    () => setSelectedProject(getCurrentProject() || ''),
    [location, projects]
  );

  return {
    projects,
    getProjectsFromDB,
    updateProject,
    addSeedProject,
    addProject,
    handleDeleteProject,
    getProjectsExceptInbox,
  };
};

export default useProjects;
