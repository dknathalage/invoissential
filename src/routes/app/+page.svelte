<script lang="ts">
  import Auth from "$lib/components/Auth.svelte";
  import ConsoleNav from "$lib/components/ConsoleNav.svelte";
  import Unauth from "$lib/components/Unauth.svelte";
  import { signIn } from "$lib/firebase/firebase";
</script>

<Auth>
  <ConsoleNav />
</Auth>
<Unauth>
  <div class="flex items-center justify-center min-h-screen">
    <div class="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://st4.depositphotos.com/5240153/20613/v/450/depositphotos_206133306-stock-illustration-online-invoice-technology-laptop-paper.jpg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <div class="card-actions justify-center">
          <button class="btn w-full" on:click={signIn}>Google</button>
        </div>
      </div>
    </div>
  </div>
</Unauth>
