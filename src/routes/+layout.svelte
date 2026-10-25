<script lang="ts">
  import "../app.css";
  import { Theme } from "bref-ui";
  import ThemeToggle from "$lib/components/theme-toggle.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <title>my-app-test</title>
</svelte:head>

<!-- Palette, reset and fonts of bref-ui components. -->
<Theme
  palette={{
    light: {
      primary: "#1d4ed8",
      secondary: "#c51630",
      background: "#f1eee7",
      foreground: "#151515",
      muted: "#696661",
      info: "#2563b8",
      success: "#34745a",
      warning: "#945c08",
      error: "#bc2436",
    },
    dark: {
      primary: "#92b4df",
      secondary: "#df97a5",
      background: "#18191c",
      foreground: "#eceef2",
      muted: "#acb0b8",
      info: "#a3c1d1",
      success: "#abc3a3",
      warning: "#d9bc82",
      error: "#dfa4a7",
    },
  }}
/>

<ThemeToggle />

{@render children()}
