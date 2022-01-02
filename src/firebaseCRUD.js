import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const storage = {
	projects: [],

	getProjects: async function () {
		const querySnapshot = await getDocs(collection(db, 'projects'));
		querySnapshot.forEach((doc) => {
			this.projects.push(doc.data());
		});
		console.log(this.projects);
		return this.projects;
	},
};

export { storage };
// Call this inside index.js to see documents in projects collection
// storage.getProjects();
