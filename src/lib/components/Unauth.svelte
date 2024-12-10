<script lang="ts">
  import { user } from "$lib/firebase/firebase";
</script>

{#if !$user}
  <slot />
{/if}
