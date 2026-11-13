# Localization Guide: DE → another language
**Goal:** convert all German texts in the Eureka Logos Planner to a new language (e.g. FR/ES/JP) without touching the logic.

The planner cleanly separates **language logic** (only in `index.html`) from **game data** (only in `data.js`). So you never "search through code" — instead, you fill in exactly **one specific column** per line. Below, for each table: which column that is, and what to watch out for.

---

## A. data.js — 6 places (all in the same style: `|`-separated columns)

### 1. `DATA_LINES` (actions) — column 3 = DE name
Format: `"file.png | Name EN | NAME DE | Combo 1 | Combo 2 | ..."`

| Line (example) | Column to change | Note |
|---|---|---|
| `"Wisdom of the Aetherweaver.png \| Wisdom of the Aetherweaver \| Vermächtnis des Zauberers \| ..."` | 3rd value (`Vermächtnis des Zauberers`) | Translate only the **display name**. Columns 1–2 and ALL combo columns **stay EN** — they are technical IDs linking combos and icons! |
| Each of the 56 lines | 3rd value | Applies to all. Official translations vary heavily (e.g. JP: 〇〇の智慧) — check the official SE naming convention for your language. |

⚠️ **Biggest pitfall:** The values in the combo columns ("Wisdom of the Martialist", "Cure L", etc.) must **always stay English**. Column 2 (name EN) also doubles as the **ID** under which descriptions, mneme mapping and icons are looked up — never change it.

### 2. `MNEMEN_LINES` (mnemes/splitters) — column 3 = DE name
Format: `"file.png | Mneme EN | MNEME DE"`

| Line (example) | Column | Note |
|---|---|---|
| `"mneme_offensive.png \| Wisdom of the Aetherweaver \| Vermächtnis des Zauberers"` | 3rd value (`Vermächtnis des Zauberers`) | Must **match** the DE name in `DATA_LINES`, otherwise combo popups/text show mixed names. These splitter names appear in the logos splitter list and combo views. |

Note: this table deliberately reuses the same names as `DATA_LINES` (language-consistent). If your language has different splitter names, enter them here.

### 3. `LOGOGRAM_LINES` (logograms) — column 3 = DE name
Format: `"file.png | Logogram EN | LOGOGRAM DE | Mneme 1 | Mneme 2 | ..."`

| Example | Column | Note |
|---|---|---|
| `"Conceptual.png \| Conceptual Logogram \| Unprospektierter Logos-Splitter der Erneuerung \| Wisdom of the Aetherweaver \| ..."` | 3rd value | Only this one value. The mneme list afterwards (columns 4+) stays EN — it references names from `MNEMEN_LINES`/`DATA_LINES`. |

### 4. `LOGOGRAM_INFO_LINES` (logogram sources, ℹ️ popup) — column 3 = DE sources
Format: `"Name EN | Source EN;... | SOURCES DE;..."`
⚠️ Special case: here **column 2 = EN, column 3 = DE** (reversed compared to everywhere else!). The parser reads `en: p[1]`, `de: p[2]`.

| Example | Column | Note |
|---|---|---|
| `"Conceptual Logogram \| bronze chest; Sprite \| Pyros: Bronze-Truhe; Elementare"` | 3rd value (multiple sources, separated by `;`) | **Semicolon** is the separator, not `\|`. A semicolon must never appear inside a text. Leave the EN column alone. |

### 5. `DESCRIPTION_LINES` (descriptions) — column 2 = DE text, column 4 = classes
Format: `"Name EN | DESCRIPTION DE | Description EN | Classes EN"`

| Example | Column | Note |
|---|---|---|
| `"Wisdom of the Aetherweaver \| Du erhöhst deinen ausgeteilten Magieschaden um 60%. ... \| Increases magic damage ... \| Heiler"` | 2nd value (`Du erhöhst...`) | Only this value. **No** `\|` and no `"` inside the text (would break the pipe structure). Sentences separated by ". " produce the line breaks in tooltips — keep that style. |
| All class lines | 4th value (`Heiler`) | ⚠️ This column contains **roles** (Tank, Healer, Meele, Ranged, Magic) that the parser matches against role names from `ROLE_LINES`. It must use the **EN role names** / exact strings from `ROLE_LINES` — i.e. **do not translate** (see section B.5). |

### 6. `ROLE_LINES` + `CLASS_LINES` (roles & classes)
`ROLE_LINES`: `"file.png | Role EN | ROLE DE"` → translate column 3.
`CLASS_LINES`: `"file.png | Class EN | CLASS DE | Role EN"` → translate column 3; column 4 (role reference) **stays EN** (must exactly match column 2 of ROLE_LINES).

Watch out: one role is spelled "Meele" (sic — a long-standing typo) — this string must be identical everywhere, otherwise jobs end up under "No role".

✅ Note: the five role images (`role_Tank.png`, `role_Healer.png`, `role_Melee.png`, `role_Ranged.png`, `role_Magic.png` in `class_role/`) exist now — the references in `ROLE_LINES` resolve, so translators only deal with the name columns here. Remember: filenames are case-sensitive on GitHub Pages (Linux servers).

---

## B. index.html — the DE areas

### 1. `<html lang="de">` (line 1)
New language: e.g. `lang="fr"`. Purely cosmetic (screen readers etc.), but good practice.

### 2. `let LANG = ...` initialization
Automatic language detection: `navigator.language.startsWith("de") ? "de" : "en"` — for more languages, add `fr`/`es` branches.

### 3. The `T` object (UI texts) — the main block
```js
const T = {
  de: { subtitle: "...", panelTitle: "...", full: "...", emptyHintM: "...", pngNoShare: "...", ... },
  en: { ... }
};
```
For a third language: **copy the entire `de:` block** (~65 keys), insert it as `fr: {...}` etc., and translate all values. Key entries:

| Key | Where it appears | Note |
|---|---|---|
| `subtitle` | line below the title | plain text |
| `panelTitle` | grid heading, contains a **number**: `"...(" + SKILLS.length + ")"` | keep the string concatenation, don't hardcode the count |
| `rows` | **function!** `rows: function(r, cap) { return r + " Reihen · " + cap + " Skills"; }` | translate, don't break the function |
| `emptyHint`/`emptyHintM` | hint in empty bar | `_M` = mobile variant |
| `full`, `rowFull`, `alreadyList`, `resetConfirm` | warnings, confirm dialog | |
| `pngOk`, `pngCopied`, `pngCopyFail`, `pngNoShare`, `pngAskFolder`, `pngFail` | export toasts | `pngNoShare` recommends Chrome — applies to every language, phrase it appropriately |
| `exp*` (expTitle, expView, expViewSub, expPlan, expPlanSub, expPlanOff, expList, expListSub, expCombo, expComboSub, **expCmd, expCmdSub**) | export popup: view / BA plan / logos splitter list / combo list / commands & combos | `expList`/`expListSub` say **"Logo-Splitter Liste"** (renamed from "Einkaufsliste"). `expPlanOff` replaces the subtitle when the plan option is disabled |
| `cmdTitle` | title on the "Commands & Combos" PNG card | uppercase style |
| `barHead1`, `bar2Head` | section headers on PNG cards: "LEISTE 1 – START BA" / "LEISTE 2 – NACH BENUTZUNG" (`barHead1` is also used for the in-app second-bar header in BA mode — one key, two purposes) | shared by **both** list cards; the "–" is a real en-dash character in the file |
| `rowLbl` | **function!** `rowLbl: function(i) { return "Reihe " + i + ":"; }` | row labels on both list cards |
| `comboQ` | "Kombi: ?" — red marker on the cmd card for undecided combos | keep it short |
| `combo: function(i)` | "Kombi 1:" — **function** | number passed as parameter |
| `times: function(n)` | "2×" — **function** | language-specific, e.g. fr: `"x"` |
| `addBar`, `rmList`, `hintRemove`, `takeTip`, `pickTitle`, `splTitle`, `splEmpty` | list/bar UI | |
| `lblDesc`, `lblRole`, `lblCombo` | labels in the selection list | |
| `footer` | copyright | uses the `COPYRIGHT` constant — keep the style `footer: COPYRIGHT` |
| `langBtn` | language switcher label | shows the **other** language (`"🌐 DE"` while reading EN) |

### 4. Other hardcoded German texts in the script — 7 spots:

| # | Location | What to do |
|---|---|---|
| 1 | `applyLanguage()`: `lt.textContent = LANG === "de" ? "LOGOGRAMME" : "LOGOGRAMS"` | For language 3: add a key to `T` (e.g. `logoTitle`) and use `t()` |
| 2 | `buildPngCanvas()` (BA plan): `ctx.fillText(LANG === "de" ? "NACH BENUTZUNG" : "AFTER USE", ...)` | move into `T` (e.g. `arrowLabel`) — the **arrow label** is drawn on two different cards |
| 3 | `buildCmdComboPngCanvas()`: same "NACH BENUTZUNG / AFTER USE" `fillText` for the arrows between the bars | **second copy** of spot 2 — if you add the key, change BOTH places to `t("arrowLabel")` |
| 4 | `buildComboListPngCanvas()`: `ctx.fillText(LANG === "de" ? "LOGOS-KOMBILISTE" : "LOGOS COMBO LIST", ...)` | also move into `T` (e.g. `cmbTitle`) |
| 5 | `renderSplitterPanel()`: `x.title = "Ausblenden"` (2×) | X-button tooltip → move into `T` (`splHide`) |
| 6 | HTML markup: `title="Splitter ein-/ausblenden"` on the splitter button (`#btnSplitters`) | hardcoded German tooltip attribute in the markup — either move to `applyLanguage()` or into `T` + set on init |
| 7 | HTML markup: `title="BA Prepare"` on `#btnBar2` | currently EN-ish — decide per language |

(`data.js` parser comments are code comments — they don't need translating.)

### 5. Role name matching (important!)
`groupClasses()` matches role strings from `DESCRIPTION_LINES` (column 4) and the `role` column in `CLASS_LINES` **case-insensitively, but as exact strings** against `ROLE_LINES`. Therefore, anyone translating `DESCRIPTION_LINES` must **keep the EN role names** OR migrate `ROLE_LINES`/`CLASS_LINES`/all `DESCRIPTION_LINES` to a new, consistent role spelling together — keeping in mind that `ROLES.find(...)` in `groupClasses()` also recognizes the **DE name** (e.g. "Verteidiger"). Recommendation: do **not** translate column 4 of DESCRIPTION_LINES ("Healer", "Meele" etc. stay EN) — the display translation is handled by column 3 of `ROLE_LINES`.

### 6. Extending the language switcher
Currently: `LANG = LANG === "de" ? "en" : "de"` (toggle between two languages), plus `t(key) { return T[LANG][key]; }` and a `localStorage` key `STORE_KEY + ".lang"` that only accepts `"de"`/`"en"`. For a third language, the toggle needs a **cycle logic** (de → en → fr → de ...) or a language menu. Same for the auto-detection at `let LANG = ...`. This is the only point involving real code work.

---

## C. Summary / Quick Checklist

| File | Area | Translate? |
|---|---|---|
| data.js → `DATA_LINES` | column 3 (DE name) | ✅ yes |
| data.js → `MNEMEN_LINES` | column 3 (DE name) | ✅ yes |
| data.js → `LOGOGRAM_LINES` | column 3 (DE name) | ✅ yes |
| data.js → `LOGOGRAM_INFO_LINES` | column 3 (DE sources, `;` separator!) | ✅ yes |
| data.js → `DESCRIPTION_LINES` | column 2 (DE text) | ✅ yes |
| data.js → `DESCRIPTION_LINES` | column 4 (classes/roles) | ❌ no (keep EN) |
| data.js → `ROLE_LINES` | column 3 (role DE) | ✅ yes |
| data.js → `CLASS_LINES` | column 3 (class DE) | ✅ yes; column 4 no |
| data.js → all combo columns / EN-name columns | everywhere | ❌ no (IDs!) |
| index.html → `T` object | entire `de:` block (~65 keys) | ✅ yes |
| index.html → `<html lang>` | attribute | ✅ yes |
| index.html → 7 hardcoded `"de" ? ... : ...` / title spots | see B.4 table | ✅ yes (move into `T`) |
| index.html → language toggle / auto-detect | logic | ⚙️ real code work needed |

**Editing rules:**
- Never use `"` inside a text — the line would become invalid JS.
- Never use `|` inside a value — it would break the column order.
- `%` signs and the "×" character are fine.
- Write special characters (–, ×, ä, ö, ü) **directly** into the file as UTF-8 — do NOT use escaped sequences like `\u2013`, and especially never a **double backslash** (`\\u2013`), which would print literally as "\u2013" in the UI.
- Don't break the line structure: continued lines end with `,`; the last table line ends with `],`.

## Verdict: is this enough here?
**Yes, for documenting — fully.** All textual content (names, descriptions, sources, UI, all five export cards) is cleanly distributed across the listed columns/blocks. **But:** going beyond DE+EN requires real logic work in `index.html` (language toggle cycle, auto-detection, moving the 7 hardcoded texts into `T`). Those points are flagged in sections B.4/B.6 — if you seriously want to add a third language, we'll do that step by step in a new conversation.
