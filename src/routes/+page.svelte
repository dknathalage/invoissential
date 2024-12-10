<script>
  import Auth from "$lib/components/Auth.svelte";
  import Unauth from "$lib/components/Unauth.svelte";
  import { signIn } from "$lib/firebase/firebase";
</script>

<div class="mx-auto px-4 sm:px-6 lg:px-8">
  <div class="flex items-center justify-between h-16">
    <!-- Logo -->
    <div class="flex-shrink-0">
      <a href="/" class="text-lg font-bold">Invoissential</a>
    </div>

    <!-- Links for larger screens -->
    <div class="md:flex space-x-4">
      <Unauth>
        <button class="btn btn-sm" on:click={signIn}>Login</button>
      </Unauth>
      <Auth>
        <a href="/app" class="btn btn-sm">Console</a>
      </Auth>
    </div>
  </div>
</div>
