# Eureka Logos Planner

A single-file browser planner for **Final Fantasy XIV: Eureka Logos Actions**. Pick your Logos Actions, arrange them on your hotbar layout, choose mnemonic combinations, and export everything as a PNG — ready to share with your BA (Baldesion Arsenal) party.

No server, no build step, no dependencies. Just `index.html` + `data.js` and your icon folders.

---

## Features

### Planning
- **56 Logos Actions** displayed in a grid — click to add, drag & drop to place precisely
- **Hotbar layout** with 2 skills per row, 3–6 configurable rows
- **Combination picker**: every action's valid mnemonic fragments, with success-rate badges (100% / 70% / 50% / 30% or `?%` when undecided)
- **BA Mode (Bar 2)**: plan a second bar for "after use" — rows carried over unchanged are marked with a ✓ (no extra mnemes needed)
- **Logos Splitter shopping list**: aggregates all required fragments across both bars, automatically deduplicated
- **Logograms panel**: browse which fragments come from which Logograms, with ℹ️ source info popups
- **Descriptions & class roles**: German/English skill descriptions, keyword highlighting, and job/role grouping per action
- **Mnemonic filter**: click a fragment chip to highlight all actions that can use it

### Exports (PNG)
Generated entirely client-side via Canvas:
- **Logos image** — bar(s) + shopping list, as visible on screen
- **BA blueprint** — with "after use" arrows between Bar 1 and Bar 2 (BA mode only)
- **Shopping list** — the splitter list as its own compact card
- **Combo list** — per skill: which combinations and how often

Delivery depends on browser capability: clipboard (desktop), share menu (Chrome on Android), or file download as universal fallback. On mobile, exports are always rendered in desktop geometry for consistent results.

### Mobile
Fully responsive (breakpoint ≤ 700 px) with a touch-first interface:
- Tap a skill tile to add it to the bar
- ℹ️ info popups instead of hover tooltips
- Combination selection directly via the percentage cells
- Action buttons and export buttons relocated to thumb-friendly rows

### Persistence
Your layout is saved automatically to `localStorage` (key `eurekaLogosPlanner.v3`, with migration from v2), plus a language preference (DE/EN).

---

## Project Structure

```
├── index.html                 # Everything: markup, styles, logic
├── data.js                    # All game data (actions, mnemes, descriptions, ...)
├── logos_icons/               # Action icons
├── logos_fragment_icons/      # Mneme/fragment icons
├── class_role/                # Job & role icons
└── divers/                    # Misc assets (logo, splitter icon, BA prepare)
```

`data.js` contains pipe-delimited data tables (`DATA_LINES`, `MNEMEN_LINES`, `LOGOGRAM_LINES`, `LOGOGRAM_INFO_LINES`, `DESCRIPTION_LINES`, `ROLE_LINES`, `CLASS_LINES`) — extend the planner by editing these lines, no code changes required.

## Setup

1. Clone or download this repository.
2. Serve it locally (e.g. `python -m http.server`) or just open `index.html` in a browser — the File System Access API enables seamless local icon access in Chromium browsers when a folder is picked once.
3. Or host it for free on GitHub Pages, exactly as this repo does.

Recommended browsers: **Chrome / Edge** (full feature set including native share on mobile). Firefox works for all core features; clipboard-image export may fall back to download depending on OS/browser support.

## Language

German and English UI, switchable via the 🌐 button and auto-detected from your browser language.

---

## Credits & Legal

Game content and terminology from **FINAL FANTASY XIV**. This is an unofficial fan-made planning tool.

> FINAL FANTASY XIV ©2010–2026 SQUARE ENIX CO., LTD. FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. All material used under license.

