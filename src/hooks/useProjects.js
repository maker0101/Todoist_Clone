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
import { UserContext } from '../contexts/UserContext';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';
import { ProjectFormContext } from '../contexts/ProjectFormContext';
import { ProjectModalContext } from '../contexts/ProjectModalContext';
import { inboxProjectId } from '../constants/inbox-project-id';

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
      where('userId', '==', user.uid)
    );
    return onSnapshot(projectsQuery, (querySnapshot) => {
      const projectsSnapshot = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects(projectsSnapshot);
    });
  };

  const addProject = async (project) => {
    try {
      await addDoc(collection(db, 'projects'), {
        name: project.name,
        colorId: project.colorId,
        isInbox: project.isInbox,
        userId: user.uid,
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
        userId: user.uid,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteProject = (projectId) => {
    const deleteProject = async (projectId) => {
      try {
        const projectDoc = doc(db, 'projects', projectId);
        await deleteDoc(projectDoc);
      } catch (err) {
        console.error(err);
      }
    };

    deleteProject(projectId);
    clearProjectForm();
    setIsProjectModalOpen(false);
    navigate('/inbox');
  };

  const filterProjectsNoInbox = () =>
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

    const findProjectById = (projects, projectId) =>
      projects.find((project) => project.id === projectId);

    const currentProjectId = match?.params.id || inboxProjectId;
    const currentProject = findProjectById(projects, currentProjectId);
    return currentProject;
  };

  useEffect(() => getProjectsFromDB(), []);
  useEffect(
    () => setSelectedProject(getCurrentProject() || ''),
    [location, projects]
  );

  return {
    projects,
    updateProject,
    addProject,
    handleDeleteProject,
    filterProjectsNoInbox,
  };
};

export default useProjects;
