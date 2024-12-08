<script lang="ts">
	import { FirebaseApp } from 'sveltefire';
	import { initializeApp } from 'firebase/app';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';

	// Initialize Firebase
	const app = initializeApp({
		apiKey: 'AIzaSyAx9sHjdLMtzz7PqDJN54oNr7aWbT9C1y0',
		authDomain: 'invoissential.firebaseapp.com',
		projectId: 'invoissential',
		storageBucket: 'invoissential.firebasestorage.app',
		messagingSenderId: '534631897526',
		appId: '1:534631897526:web:cdf401367da9b847c38917',
		measurementId: 'G-82PGRS1X26'
	});
	const firestore = getFirestore(app);
	const auth = getAuth(app);
</script>

<FirebaseApp {auth} {firestore}>
	<slot />
</FirebaseApp>
