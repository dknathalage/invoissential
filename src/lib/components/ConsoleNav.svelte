<script lang="ts">
  import { logOut } from "$lib/firebase/firebase";
</script>

<div class="mx-auto px-4 sm:px-6 lg:px-8">
  <div class="flex items-center justify-between h-16">
    <div class="flex-shrink-0">
      <a href="/app" class="text-lg font-bold">Invoissential</a>
    </div>

    <div class="md:flex space-x-4">
      <button class="btn btn-sm" on:click={logOut}>Logout</button>
    </div>
  </div>
</div>
