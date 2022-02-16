import { useState, useEffect, useContext } from 'react';
import {
  collection,
  doc,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase-config';
import { isTaskOverdue, isTaskDueToday } from '../utilities/query-task';
import { UserContext } from '../contexts/UserContext';

const useTasks = () => {
  const { user } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  const getTasksFromDB = () => {
    const tasksQuery = query(
      collection(db, 'tasks'),
      where('userId', '==', user.uid),
      where('isChecked', '==', false),
      orderBy('createdAt')
    );

    return onSnapshot(tasksQuery, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  };

  /**
   * Get all or selection of tasks
   * @param {object} [query] - tasks filters
   * @param {string} [query.projectId] - e.g. 'Kl3wXRZLUlto7XcA7mWd'
   * @param {string} [query.isDueOnDate] -  e.g. '2022-03-13'
   * @param {boolean} [query.isDueToday]
   * @param {boolean} [query.isOverdue]
   * @returns {Array} - tasks matching all specified filters
   */
  const getTasks = (query) => {
    return tasks
      .filter((task) =>
        query?.projectId === undefined
          ? true
          : task.projectId === query.projectId
      )
      .filter((task) =>
        query?.isDueOnDate === undefined
          ? true
          : task.dueDate === query.isDueOnDate
      )
      .filter((task) =>
        query?.isOverdue === true ? isTaskOverdue(task) : true
      )
      .filter((task) =>
        query?.isDueToday === true ? isTaskDueToday(task) : true
      );
  };

  const addTask = async (task) => {
    try {
      await addDoc(collection(db, 'tasks'), {
        name: task.name,
        description: task.description,
        dueDate: task.dueDate,
        projectId: task.projectId,
        userId: user.uid,
        createdAt: serverTimestamp(),
        isChecked: false,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateTask = async (task) => {
    try {
      const taskDoc = doc(db, 'tasks', task.id);
      await updateDoc(taskDoc, {
        name: task.name,
        description: task.description,
        dueDate: task.dueDate,
        projectId: task.projectId,
        userId: user.uid,
        isChecked: false,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const closeTask = async (task) => {
    try {
      const taskDoc = doc(db, 'tasks', task.id);
      await updateDoc(taskDoc, { isChecked: !task.isChecked });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (task) => {
    try {
      const taskDoc = doc(db, 'tasks', task.id);
      await deleteDoc(taskDoc);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      return getTasksFromDB();
    }
  }, [user]);

  return {
    tasks,
    getTasks,
    addTask,
    updateTask,
    closeTask,
    deleteTask,
  };
};

export default useTasks;
