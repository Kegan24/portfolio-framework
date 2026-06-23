# Components & Diagrams

This file contains component diagrams and explanations. Diagrams are written in Mermaid for quick visualization.

**High-level component diagram**

```mermaid
flowchart LR
  subgraph AppShell
    A[App.tsx]
    A --> H[Header]
    A --> He[Hero]
    A --> P[Projects]
    A --> Ab[About]
    A --> Ex[Experience]
    A --> C[Contact]
    A --> F[Footer]
  end

  ThemeProvider((ThemeProvider))
  ThemeProvider --> A

  subgraph Data
    S1[site.json]
    S2[hero.json]
    S3[projects.json]
    S4[about.json]
    S5[experience.json]
    S6[contact.json]
    S7[theme.json]
  end

  S1 --> H
  S2 --> He
  S3 --> P
  S4 --> Ab
  S5 --> Ex
  S6 --> C
  S7 --> ThemeProvider

  classDef components fill:#f8fafc,stroke:#cbd5e1
  class A,H,He,P,Ab,Ex,C,F components
```

**Component responsibilities**
- `Header` — renders site title and navigation from `site.json`, contains `ThemeToggle`.
- `Hero` — renders hero heading/subheading from `hero.json`.
- `Projects` — iterates `projects.json`, creates `ProjectCard` children.
- `Experience` — lists roles from `experience.json`.
- `About` — static about text from `about.json`.
- `Contact` — contact info and social links from `contact.json`.
- `ThemeProvider` — holds theme state, applies CSS classes, persists selection to `localStorage` using key from `theme.json`.

**Sequence: Theme change**

```mermaid
sequenceDiagram
  participant U as User
  participant UI as ThemeToggle
  participant TP as ThemeProvider
  participant DOC as document.documentElement

  U->>UI: click toggle
  UI->>TP: toggleTheme()
  TP->>localStorage: set(theme-preference)
  TP->>DOC: set class theme-dark / theme-light
```

Tips for extending diagrams
- Open these files in a Markdown viewer that supports Mermaid (VS Code Markdown Preview, GitHub, etc.).
- Update the diagrams when adding components or new data files.
