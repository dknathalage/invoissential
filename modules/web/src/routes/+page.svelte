<script>
	import { SignedIn, SignedOut, Doc, Collection } from 'sveltefire';
	import { signInWithPopup } from 'firebase/auth';
	import { GoogleAuthProvider } from 'firebase/auth';
</script>

<svelte:head>
	<title>Invoissential</title>
</svelte:head>

<SignedIn let:user let:signOut>
	<p>Hello {user.displayName}</p>
	<button on:click={signOut}>Sign Out</button>
</SignedIn>

<SignedOut let:auth>
	<button on:click={async () => await signInWithPopup(auth, new GoogleAuthProvider())}>
		Sign In with Google
	</button>
</SignedOut>
