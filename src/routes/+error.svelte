<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
</script>

<main
  class="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center"
>
  <h1 class="text-2xl font-bold">
    {page.status === 404 ? "Page not found" : "Something went wrong"}
  </h1>
  <p class="text-muted-foreground">
    {page.error?.message ?? "An unexpected error occurred."}
  </p>
  <a
    href={resolve("/")}
    class="text-sm font-medium underline underline-offset-4">Back to home</a
  >
</main>
