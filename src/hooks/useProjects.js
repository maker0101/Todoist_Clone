import { useState, useEffect, useContext } from 'react';
import { useLocation, matchPath, useNavigate } from 'react-router-dom';
import {
  onSnapshot,
  collection,
  doc,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase-config';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';
import { ProjectFormContext } from '../contexts/ProjectFormContext';
import { ProjectModalContext } from '../contexts/ProjectModalContext';
import { inboxProjectId } from '../constants/inbox-project-id';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const { setSelectedProject } = useContext(SelectedProjectContext);
  const { clearProjectForm } = useContext(ProjectFormContext);
  const { setIsProjectModalOpen } = useContext(ProjectModalContext);
  const location = useLocation();
  const match = matchPath(
    {
      path: '/project/:id',
      exact: true,
      strict: true,
    },
    location.pathname
  );
  const navigate = useNavigate();

  const getProjectsFromDB = (db) => {
    const projectsQuery = query(
      collection(db, 'projects'),
      where('userId', '==', 'userid1')
    );
    return onSnapshot(projectsQuery, (querySnapshot) => {
      const projectsSnapshot = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects(projectsSnapshot);
    });
  };

  const updateProject = async (db, projectForm, userId) => {
    try {
      const projectDoc = doc(db, 'projects', projectForm.id);
      await updateDoc(projectDoc, {
        name: projectForm.name,
        colorId: projectForm.colorId,
        isInbox: projectForm.isInbox,
        userId: userId,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const addProject = async (db, projectForm, userId) => {
    try {
      await addDoc(collection(db, 'projects'), {
        name: projectForm.name,
        colorId: projectForm.colorId,
        isInbox: projectForm.isInbox,
        userId: userId,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProject = async (db, projectId) => {
    try {
      const projectDoc = doc(db, 'projects', projectId);
      await deleteDoc(projectDoc);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteProject = (db, projectId) => {
    deleteProject(db, projectId);
    clearProjectForm();
    setIsProjectModalOpen(false);
    navigate('/inbox');
  };

  const filterProjectsNoInbox = () =>
    projects.filter((project) => project.isInbox === false);

  const getSelectedProject = () => {
    const findProjectById = (projects, projectId) =>
      projects.find((project) => project.id === projectId);

    const selectProjectId = match?.params.id || inboxProjectId;
    const selectProject = findProjectById(projects, selectProjectId);
    setSelectedProject(selectProject || '');
  };

  useEffect(() => getProjectsFromDB(db), []);
  useEffect(() => getSelectedProject(), [location, projects]);

  return {
    projects,
    updateProject,
    addProject,
    handleDeleteProject,
    filterProjectsNoInbox,
  };
};

export default useProjects;
