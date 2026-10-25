# my-app-test

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) with Svelte 5 (runes) and TypeScript
- [Tailwind CSS](https://tailwindcss.com): Utility-first CSS framework (v4).
- [bref-ui](https://github.com/feuersteiner/bref-ui): Svelte 5 components with scoped CSS and theming, which you can copy into your project to customize.
- [ESLint](https://eslint.org): Linting with the framework's recommended rules (TypeScript, React Hooks…).

## Project structure

Architecture: **Clean Architecture**. Layered domain / application / infrastructure. Familiar if you come from Spring or .NET.

```
src/
  routes/             Presentation: load functions call use cases from the container
  lib/
    domain/           Entities and repository interfaces. Pure TypeScript, no framework.
    application/      Use cases: the business rules, depending only on domain/
    infrastructure/   Implementations: database, auth, external services
      container.ts    Composition root: wires implementations into use cases
    components/       Presentation: Svelte components

Dependencies point inward: routes → application → domain, infrastructure → domain.
```

## Scripts

| Command             | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `npm run dev`       | `vite dev`                                                   |
| `npm run build`     | `vite build`                                                 |
| `npm run preview`   | `vite preview`                                               |
| `npm run prepare`   | `svelte-kit sync                                             |     | echo ''` |
| `npm run typecheck` | `svelte-kit sync && svelte-check --tsconfig ./tsconfig.json` |
| `npm run lint`      | `eslint`                                                     |

## bref-ui

Components are imported from the `bref-ui` package:

```svelte
<script lang="ts">
  import { Button } from "bref-ui";
</script>

<Button label="Save" onClick={() => console.log("saved")} />
```

`<Theme />` is rendered once in `src/routes/+layout.svelte`. To own a component's source and customize it, copy it into `src/lib/ui` with the bref-ui CLI (requires [Bun](https://bun.sh)):

```bash
bunx bref-ui init
bunx bref-ui add button
```

Then import it from `$lib/ui` instead of `bref-ui`. Browse the components on [the gallery](https://feuersteiner.github.io/bref-ui/).

## Theme

Colors are CSS variables in `src/app.css`: light values on `:root`, dark values under `[data-theme="dark"]`. The text color on each fill (`--primary-foreground`…) was picked for contrast; check it again if you change a color.

| Role       | Light     | Dark      | Used for                                      |
| ---------- | --------- | --------- | --------------------------------------------- |
| Primary    | `#1d4ed8` | `#92b4df` | Main actions: buttons, links, focus ring      |
| Secondary  | `#c51630` | `#df97a5` | Secondary buttons and badges                  |
| Accent     | `#e5e1d8` | `#26272b` | Hovered and selected items in menus and lists |
| Background | `#f1eee7` | `#18191c` | Page background                               |
| Foreground | `#151515` | `#eceef2` | Body text                                     |
| Muted      | `#696661` | `#acb0b8` | Secondary text: descriptions, placeholders    |
| Border     | `#d4cfc4` | `#34363b` | Borders, dividers and inputs                  |
| Success    | `#34745a` | `#abc3a3` | Confirmations                                 |
| Warning    | `#945c08` | `#d9bc82` | Warnings                                      |
| Error      | `#bc2436` | `#dfa4a7` | Errors and destructive actions                |
| Info       | `#2563b8` | `#a3c1d1` | Informational messages                        |

An inline script in the page `<head>` sets `data-theme` on `<html>` before the first paint, from the visitor's choice (saved in `localStorage`) or the system preference. `src/lib/components/theme-toggle.svelte` switches between light, dark and system.

---

Generated with [StackCraft](https://github.com/fotsosteve14/stackcraft).
