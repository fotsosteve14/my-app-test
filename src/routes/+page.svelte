<script lang="ts">
  import { resolve } from "$app/paths";
  import { Button } from "bref-ui";
</script>

<main
  class="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center"
>
  <h1 class="text-4xl font-bold tracking-tight">my-app-test</h1>
  <p class="max-w-md text-lg text-muted-foreground">Your project is ready.</p>
  <Button
    label="Browse components"
    href="https://feuersteiner.github.io/bref-ui/"
    target="_blank"
    rel="noopener noreferrer"
  />
  <p class="text-sm text-muted-foreground">
    Edit <code class="font-mono">src/routes/+page.svelte</code> to get started.
  </p>
  <a
    href={resolve("/users")}
    class="text-sm font-medium underline underline-offset-4"
    >See the example feature</a
  >
</main>
