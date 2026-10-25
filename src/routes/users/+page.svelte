<script lang="ts">
  import UserList from "$lib/components/user-list.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<main class="flex min-h-screen flex-col items-center gap-6 p-8">
  <h1 class="text-2xl font-bold">Users</h1>
  <UserList users={data.users} />
</main>
