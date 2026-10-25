<script lang="ts">
  type Preference = "light" | "dark" | "system";

  const NEXT: Record<Preference, Preference> = {
    light: "dark",
    dark: "system",
    system: "light",
  };

  /** Cycles light → dark → system. The inline script in the page <head> applies the saved choice on load. */
  function toggle() {
    const root = document.documentElement;
    const current = (root.dataset.themePreference ?? "system") as Preference;
    const next = NEXT[current] ?? "system";
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked (private browsing): the choice lasts until the page is reloaded.
    }
    root.dataset.themePreference = next;
    root.dataset.theme =
      next === "dark" ||
      (next === "system" && matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light";
  }
</script>

<button
  type="button"
  class="theme-toggle"
  onclick={toggle}
  title="Theme: light, dark or system"
>
  <span data-theme-option="light">
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><circle cx="12" cy="12" r="4" /><path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
      /></svg
    >
    Light
  </span>
  <span data-theme-option="dark">
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
    >
    Dark
  </span>
  <span data-theme-option="system">
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><rect width="20" height="14" x="2" y="3" rx="2" /><path
        d="M8 21h8M12 17v4"
      /></svg
    >
    System
  </span>
</button>

<style>
  .theme-toggle {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 50;
    display: inline-flex;
    padding: 0.375rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: 9999px;
    background: var(--background);
    color: var(--foreground);
    font: inherit;
    font-size: 0.875rem;
    cursor: pointer;
  }

  .theme-toggle:hover {
    border-color: var(--primary);
  }

  .theme-toggle:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  [data-theme-option] {
    display: none;
    align-items: center;
    gap: 0.375rem;
  }

  :global([data-theme-preference="light"]) [data-theme-option="light"],
  :global([data-theme-preference="dark"]) [data-theme-option="dark"],
  :global([data-theme-preference="system"]) [data-theme-option="system"] {
    display: inline-flex;
  }
</style>
