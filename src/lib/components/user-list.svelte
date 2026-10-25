<script lang="ts">
  import type { User } from "$lib/domain/entities/user";

  let { users }: { users: User[] } = $props();
</script>

<ul class="w-full max-w-md divide-y rounded-lg border">
  {#each users as user (user.id)}
    <li class="flex flex-col p-4 text-left">
      <span class="font-medium">{user.name}</span>
      <span class="text-sm text-muted-foreground">{user.email}</span>
    </li>
  {/each}
</ul>
