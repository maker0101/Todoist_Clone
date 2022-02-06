import { useState, useEffect } from 'react';
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

const useTasks = () => {
  const userId = 'userid1';
  const [tasks, setTasks] = useState([]);

  const getTasksFromDB = () => {
    const tasksQuery = query(
      collection(db, 'tasks'),
      where('userId', '==', 'userid1'),
      where('isChecked', '==', false),
      orderBy('createdAt')
    );

    return onSnapshot(tasksQuery, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  };

  /* Input: Object with parameters:
    projectId: 'Kl3wXRZLUlto7XcA7mWd',
    isDueOnDate: '2022-03-13',
    isDueToday: true,
    isOverdue: false,
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
        userId: userId,
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
        userId: userId,
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

  useEffect(() => getTasksFromDB(), []);

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
