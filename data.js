/* ============================================================
   EUREKA LOGOS PLANNER – DATEN-TABELLEN
   ------------------------------------------------------------
   Diese Datei enthaelt NUR Daten. Der Programmcode liegt in
   index.html und laedt diese Datei vorher (script src).
   
   Regeln fuer alle Tabellen:
   - Jede Zeile: Spalten getrennt durch  |
   - Werte in doppelte Anfuehrungszeichen:  "wert"
   - KEINE doppelten Anfuehrungszeichen IM Text selbst
   - Leere Zeilen und Zeilen mit // oder # am Anfang werden ignoriert
   - Lange Texte koennen per +  auf mehrere Zeilen verteilt werden
     (Komma am Ende der fortgesetzten Zeile nicht vergessen!)
   ============================================================ */

// Icon-Groesse fuer Klassen- und Oberklassen-Icons (Pixel):
const CLASS_ICON_PX = 22;

/* ------------------------------------------------------------
   TABELLE 1 – AKTIONEN (LOGOS/MNEMEN)
   FORMAT: "datei.png" | "Name EN" | "Name DE" | "Kombi 1" | "Kombi 2" | ...
   Kombis: Fragmentnamen mit + getrennt, Vielfache mit x2/x3 (z. B. "Wise x2")
   ------------------------------------------------------------ */
const DATA_LINES = [
    "Wisdom of the Aetherweaver.png | Wisdom of the Aetherweaver | Vermächtnis des Zauberers | Wisdom of the Aetherweaver",
    "Wisdom of the Martialist.png | Wisdom of the Martialist | Vermächtnis des Kämpfers | Wisdom of the Martialist",
    "Wisdom of the Platebearer.png | Wisdom of the Platebearer | Vermächtnis des Ritters | Wisdom of the Platebearer",
    "Wisdom of the Guardian.png | Wisdom of the Guardian | Vermächtnis des Wächters | Wisdom of the Guardian | Wisdom of the Platebearer + Protect L | Wisdom of the Platebearer + Stoneskin L | Wisdom of the Platebearer + Incense L + Incense L | Stoneskin L + Stoneskin L + Stoneskin L",
    "Wisdom of the Ordained.png | Wisdom of the Ordained | Vermächtnis des Priesters | Wisdom of the Ordained | Wisdom of the Aetherweaver + Esuna L | Wisdom of the Aetherweaver + Cure L + Cure L | Cure L II + Cure L II + Cure L II",
    "Wisdom of the Skirmisher.png | Wisdom of the Skirmisher | Vermächtnis des Kampfkünstlers | Wisdom of the Skirmisher | Wisdom of the Martialist + Feint L | Wisdom of the Martialist + Wisdom of the Martialist + Wisdom of the Martialist",
    "Wisdom of the Watcher.png | Wisdom of the Watcher | Vermächtnis des Spähers | Stealth L + Stealth L",
    "Wisdom of the Templar.png | Wisdom of the Templar | Vermächtnis des heiligen Ritters | Wisdom of the Skirmisher + Cure L II | Wisdom of the Skirmisher + Stoneskin L | Wisdom of the Platebearer + Cure L + Stoneskin L",
    "Wisdom of the Irregular.png | Wisdom of the Irregular | Vermächtnis des Berserkers | Wisdom of the Skirmisher + Wisdom of the Guardian | Wisdom of the Martialist + Incense L + Wisdom of the Skirmisher",
    "Wisdom of the Breathtaker.png | Wisdom of the Breathtaker | Vermächtnis des Diebes | Wisdom of the Breathtaker | Featherfoot L + Stealth L | Stealth L + Stealth L + Stealth L | Featherfoot L + Featherfoot L + Featherfoot L",
    "Spirit of the Remembered.png | Spirit of the Remembered | Segen des Helden | Spirit of the Remembered | Wisdom of the Martialist + Wisdom of the Guardian | Wisdom of the Aetherweaver + Wisdom of the Martialist + Wisdom of the Platebearer",
    "Protect L.png | Protect L | Logos-Protes | Protect L",
    "Shell L.png | Shell L | Logos-Vallum | Shell L | Esuna L + Protect L",
    "Death L.png | Death L | Logos-Tod | Raise L + Dispel L | Raise L + Tranquilizer L + Tranquilizer L",
    "Focus L.png | Focus L | Logos-Ladung | Wisdom of the Skirmisher + Bloodbath L | Bloodbath L + Bloodbath L + Bloodbath L",
    "Paralyze L.png | Paralyze L | Logos-Paralyse | Paralyze L",
    "Paralyze L III.png | Paralyze L III | Logos-Paralyga | Paralyze L + Spirit Dart L | Paralyze L + Paralyze L + Paralyze L | Wisdom of the Aetherweaver + Paralyze L + Paralyze L",
    "Swift L.png | Swift L | Logos-Eile | Featherfoot L + Featherfoot L | Backstep L + Backstep L + Featherfoot L",
    "Featherfoot L.png | Featherfoot L | Logos-Leichtfuß | Featherfoot L | Feint L + Feint L",
    "Spirit Dart L.png | Spirit Dart L | Logos-Geistpfeil | Spirit Dart L | Tranquilizer L + Wisdom of the Ordained | Wisdom of the Aetherweaver + Paralyze L + Tranquilizer L",
    "Catastrophe L.png | Catastrophe L | Logos-Magieexplosion | Wisdom of the Guardian + Spirit Dart L | Bloodbath L + Bloodbath L | Spirit Dart L + Spirit Dart L + Spirit Dart L",
    "Dispel L.png | Dispel L | Logos-Entzauberung | Dispel L | Esuna L + Wisdom of the Ordained | Esuna L + Esuna L + Esuna L | Tranquilizer L + Tranquilizer L + Tranquilizer L",
    "Feint L.png | Feint L | Logos-Finte | Feint L",
    "Stealth L.png | Stealth L | Logos-Tarnung | Stealth L | Wisdom of the Ordained + Shell L",
    "Aetherial Manipulation L.png | Aetherial Manipulation L | Logos-Äthermanipulation | Backstep L + Stealth L | Wisdom of the Martialist + Backstep L + Feint L",
    "Backstep L.png | Backstep L | Logos-Entrinnung | Backstep L",
    "Tranquilizer L.png | Tranquilizer L | Logos-Betäubung | Tranquilizer L",
    "Bloodbath L.png | Bloodbath L | Logos-Blutbad | Bloodbath L | Cure L + Wisdom of the Skirmisher | Wisdom of the Martialist + Wisdom of the Martialist + Cure L",
    "Rejuvenate L.png | Rejuvenate L | Logos-Aufladung | Bloodbath L + Shell L | Spirit of the Remembered + Spirit Dart L | Wisdom of the Aetherweaver + Wisdom of the Martialist + Cure L",
    "Haymaker L.png | Haymaker L | Logos-Konter | Wisdom of the Skirmisher + Featherfoot L | Wisdom of the Martialist + Incense L + Featherfoot L",
    "Rapid Recast L.png | Rapid Recast L | Logos-Velocitas | Esuna L + Dispel L | Cure L + Esuna L + Feint L",
	"Cure L.png | Cure L | Logos-Vita | Cure L",
    "Cure L II.png | Cure L II | Logos-Vitra | Cure L + Wisdom of the Ordained | Cure L + Cure L + Cure L | Raise L + Raise L + Raise L",
    "Stoneskin L.png | Stoneskin L | Logos-Steinhaut | Stoneskin L | Protect L + Shell L | Protect L + Protect L + Protect L | Shell L + Shell L + Shell L",
    "Cure L III.png | Cure L III | Logos-Vitaga | Bloodbath L + Wisdom of the Ordained | Cure L II + Cure L II | Cure L + Cure L + Wisdom of the Ordained",
    "Regen L.png | Regen L | Logos-Regena | Tranquilizer L | Feint L + Cure L III | Cure L + Cure L + Feint L",
    "Esuna L.png | Esuna L | Logos-Medica | Esuna L",
    "Incense L.png | Incense L | Logos-Hohn | Incense L",
    "Raise L.png | Raise L | Logos-Wiederbelebung | Raise L",
    "Bravery L.png | Bravery L | Logos-Courage | Wisdom of the Skirmisher + Wisdom of the Guardian + Wisdom of the Ordained",
    "Solid Shield L.png | Solid Shield L | Logos-Schild | Protect L + Wisdom of the Guardian + Stoneskin L",
    "Spell Shield L.png | Spell Shield L | Logos-Magieschild | Wisdom of the Guardian + Shell L + Stoneskin L",
    "Reflect L.png | Reflect L | Logos-Reflektion | Protect L + Wisdom of the Ordained + Shell L",
    "Smite L.png | Smite L | Logos-Schattenhieb | Tranquilizer L + Wisdom of the Skirmisher + Spirit Dart L",
    "Refresh L.png | Refresh L | Logos-Erfrischung | Wisdom of the Aetherweaver + Wisdom of the Ordained + Cure L II",
    "Banish L.png | Banish L | Logos-Bann | Wisdom of the Aetherweaver + Dispel L + Dispel L",
    "Banish L III.png | Banish L III | Logos-Bannga | Wisdom of the Ordained + Dispel L + Dispel L",
    "Magic Burst L.png | Magic Burst L | Logos-Magieexplosion | Magic Burst L | Spirit of the Remembered + Wisdom of the Ordained + Stoneskin L",
    "Double Edge L.png | Double Edge L | Logos-Zweischneid | Double Edge L | Wisdom of the Skirmisher + Bloodbath L + Wisdom of the Guardian",
    "Eagle Eye Shot L.png | Eagle Eye Shot L | Logos-Adlerauge | Eagle Eye Shot L | Wisdom of the Skirmisher + Spirit of the Remembered + Spirit Dart L",
    "Perception L.png | Perception L | Logos-Tigerauge | Wisdom of the Breathtaker + Wisdom of the Breathtaker | Stealth L + Dispel L + Wisdom of the Breathtaker",
    "Wisdom of the Elder.png | Wisdom of the Elder | Vermächtnis des Weisen | Wisdom of the Aetherweaver + Wisdom of the Ordained + Magic Burst L | Wisdom of the Guardian + Stoneskin L + Magic Burst L",
    "Wisdom of the Duelist.png | Wisdom of the Duelist | Vermächtnis des Fechtmeisters | Wisdom of the Skirmisher + Wisdom of the Skirmisher + Double Edge L | Bloodbath L + Bloodbath L + Double Edge L",
    "Wisdom of the Fiendhunter.png | Wisdom of the Fiendhunter | Vermächtnis des Bogengeweihten | Featherfoot L + Spirit Dart L + Eagle Eye Shot L | Feint L + Tranquilizer L + Eagle Eye Shot L",
    "Wisdom of the Indomitable.png | Wisdom of the Indomitable | Vermächtnis des Helden | Wisdom of the Platebearer + Incense L + Double Edge L | Protect L + Spirit of the Remembered + Double Edge L",
    "Sacrifice L.png | Sacrifice L | Logos-Aufopferung | Esuna L + Raise L + Magic Burst L",
];

// Fallback-Liste: Skills, die nur ueber den Namen (ohne eigene Zeile oben)
// bekannt sind. Normalerweise leer lassen!
const NAMES = [];

/* ------------------------------------------------------------
   TABELLE 2 – MNEMEN (ehemals FRAGMENT_LINES, umbenannt)
   FORMAT: "datei.png" | "Mnemen EN" | "Mnemen DE"
   ------------------------------------------------------------ */
const MNEMEN_LINES = [
    "mneme_inimical.png | Paralyze L | Logos-Splitter der Paralyse",
    "mneme_inimical.png | Tranquilizer L | Logos-Splitter der Betäubung",
    "mneme_inimical.png | Spirit Dart L | Logos-Splitter des Geistpfeils",
    "mneme_inimical.png | Dispel L | Logos-Splitter der Entzauberung",
    "mneme_offensive.png | Wisdom of the Aetherweaver | Vermächtnis des Zauberers",
    "mneme_offensive.png | Wisdom of the Martialist | Vermächtnis des Kämpfers",
    "mneme_offensive.png | Wisdom of the Skirmisher | Logos-Splitter des Kampfkünstlers",
    "mneme_offensive.png | Bloodbath L | Logos-Splitter des Blutbads",
    "mneme_offensive.png | Magic Burst L | Logos-Splitter der Magieexplosion",
    "mneme_offensive.png | Eagle Eye Shot L | Logos-Splitter des Adlerauges",
    "mneme_offensive.png | Double Edge L | Logos-Splitter des Zweischneids",
    "mneme_protective.png | Wisdom of the Platebearer | Vermächtnis des Ritters",
    "mneme_protective.png | Incense L | Logos-Splitter des Hohns",
    "mneme_protective.png | Wisdom of the Guardian | Vermächtnis des Wächters",
    "mneme_protective.png | Spirit of the Remembered | Segen des Helden",
    "mneme_curative.png | Cure L | Logos-Splitter des Vita",
    "mneme_curative.png | Esuna L | Logos-Splitter des Medica",
    "mneme_curative.png | Raise L | Logos-Splitter der Wiederbelebung",
    "mneme_curative.png | Wisdom of the Ordained | Vermächtnis des Priesters",
    "mneme_curative.png | Cure L II | Logos-Splitter des Vitra",
    "mneme_tactical.png | Backstep L | Logos-Splitter der Entrinnung",
    "mneme_tactical.png | Feint L | Logos-Splitter der Finte",
    "mneme_tactical.png | Featherfoot L | Logos-Splitter des Leichtfußes",
    "mneme_tactical.png | Stealth L | Logos-Splitter der Tarnung",
    "mneme_tactical.png | Wisdom of the Breathtaker | Vermächtnis des Diebes",
    "mneme_mitigative.png | Protect L | Logos-Splitter des Protes",
    "mneme_mitigative.png | Shell L | Logos-Splitter des Vallum",
    "mneme_mitigative.png | Stoneskin L | Logos-Splitter der Steinhaut",
];

/* ------------------------------------------------------------
   TABELLE 2b – FRAGMENT-ZUORDNUNG (NEU)
   FORMAT: "datei.png" | "Fragment DE" | "Fragement EN" | "Mnemen 1" | "Mnemen 2" | "Mnemen ..."
   Sagt zu jedem Fragment/Eintrag, in welchen Mnemen es verwendet wird.
   ------------------------------------------------------------ */
const LOGOGRAM_LINES = [
  "Conceptual.png | Conceptual Logogram | Unprospektierter Logos-Splitter der Erneuerung | Wisdom of the Aetherweaver | Wisdom of the Martialist | Wisdom of the Platebearer | Incense L | Cure L | Backstep L | Paralyze L |",
  "Fundamental.png | Fundamental Logogram | Unprospektierter Logos-Splitter des Talents | Esuna L | Raise L | Feint L | Tranquilizer L | Protect L ",
  "Offensive.png | Offensive Logogram | Unprospektierter Logos-Splitter des Angreifers | Bloodbath L | Wisdom of the Skirmisher ",
  "Protective.png | Protective Logogram | Unprospektierter Logos-Splitter des Verteidigers | Wisdom of the Guardian | Spirit of the Remembered ",
  "Curative.png | Curative Logogram | Unprospektierter Logos-Splitter des Heilers | Cure L II | Wisdom of the Ordained ",
  "Tactical.png | Tactical Logogram | Unprospektierter Logos-Splitter des Spähers | Stealth L | Featherfoot L ",
  "Inimical.png | Inimical Logogram | Unprospektierter Logos-Splitter des Störers | Spirit Dart L | Dispel L ",
  "Mitigative.png | Mitigative Logogram |Unprospektierter Logos-Splitter des Unterstützers | Shell L | Stoneskin L ",
  "Obscure.png | Obscure Logogram | Unprospektierter Logos-Splitter des Siegels | Double Edge L | Wisdom of the Breathtaker | Eagle Eye Shot L | Magic Burst L ",
];

/* ------------------------------------------------------------
   TABELLE 3 – BESCHREIBUNGEN + KLASSEN (4 Spalten)
   FORMAT: "Name EN" | "Beschreibung DE" | "Description EN" | "Klassen (EN, mit + getrennt)"
   Rollennamen wie "Healer" expandieren automatisch zu allen Klassen der Rolle,
   mischbar mit Einzelklassen (z. B. "Healer+Warrior").
   ------------------------------------------------------------ */
const DESCRIPTION_LINES = [
	"Wisdom of the Aetherweaver | Du erhöhst deinen ausgeteilten Magieschaden um 60%. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases magic damage dealt by 60%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Heiler",
	"Wisdom of the Martialist | Du erhöhst deinen ausgeteilten Schaden um 40%. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases damage dealt by 40%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Tank ",
    "Wisdom of the Platebearer | Du verringerst deinen erlittenen Schaden um 80% und erhöhst deine maximalen LP um 50%. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Reduces damage taken by 80% while increasing maximum HP by 50%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Meele + Ranged + Healer + Magic ",
    "Wisdom of the Guardian | Du verringerst deinen erlittenen Schaden um 40% und erhöhst deine maximalen LP um 10%. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Reduces damage taken by 45% while increasing maximum HP by 10%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Tank ",
    "Wisdom of the Ordained | Deine maximalen MP sind um 50% und die Wirkung deiner Heilmagie ist um 25% erhöht. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases maximum MP by 50% and healing magic potency by 25%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Healer ",
    "Wisdom of the Skirmisher | Du erhöhst deinen ausgeteilten Schaden um 20%. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases damage dealt by 20%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Meele + Ranged + Magic ",
    "Wisdom of the Watcher | Deine Ausweichrate ist um 25% erhöht, dein ausgeteilter Schaden jedoch um 5% verringert. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases evasion by 25% while reducing damage dealt by 5%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Tank ",
    "Wisdom of the Templar | Deine maximalen LP sind um 30% und die Wirkung deiner Heilmagie ist um 50% erhöht. Dein ausgeteilter Schaden ist jedoch um 5% verringert. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases healing magic potency by 50% and maximum HP by 30%, while reducing damage dealt by 5%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Healer ",
    "Wisdom of the Irregular | Du erhöhst deinen ausgeteilten physischen Schaden um 30%, deine Magieabwehr ist jedoch um 60% verringert. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases damage dealt by 30% while reducing magic defense by 60%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Meele + Ranged + Magic ",
    "Wisdom of the Breathtaker | Du erhöhst deine Ausweichrate um 10%. Außerdem ist deine Be­we­gungs­ge­schwin­dig­keit auf- und abgesessen erhöht und deine Giftresistenz verstärkt. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases poison resistance and movement speed, including mount speed, and increases evasion by 10%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Tank + Meele + Ranged + Healer + Magic ",
    "Spirit of the Remembered | Deine maximalen LP sind um 10% und deine Präzision um 30% erhöht. Außerdem belebst du dich mit einer Wahr­schein­lich­keit von 70% bei erlittener Kampfunfähigkeit wieder. Dauer: 180 Minuten | Increases maximum HP by 10% and accuracy by 30%. Additional Effect: Grants a 70% chance of automatic revival upon KO. Duration: 180m | Tank + Meele + Ranged + Healer + Magic ",
    "Protect L | Du verringerst den erlittenen physischen Schaden des Ziels um 22%. Dauer: 30 Minuten | Reduces physical damage taken by 22%. Duration: 30m  | Tank + Meele + Ranged + Healer + Magic ",
    "Shell L | Du verringerst den erlittenen magischen Schaden des Ziels um 22%. Dauer: 30 Minuten | Reduces magic damage taken by 22%. Duration: 30m | Tank + Meele + Ranged + Healer + Magic ",
    "Death L | Du machst das Ziel kampfunfähig. Je niedriger die LP des Ziels, desto größer die Erfolgschance. | KOs target. The less the target's HP, the greater the chance of success. | Tank + Meele + Magic + Healer + Ranged ",
    "Focus L | Du versiehst dich mit Starksammeln. Der Effekt kann bis zu 16 Mal gestapelt werden. Effekt von Starksammeln: Erhöht den Attacke-Wert der nächsten Waf­fen­fer­tig­keit pro Stapel um 30%. Gemeinsamer Reaktivierungs-Timer mit allen anderen Waf­fen­fer­tig­kei­ten und Magie. Dauer: 30 Sekunden | Grants a stack of Boost, up to a maximum of 16. Boost Bonus: Increases potency of next weaponskill by 30% per stack. Shares a recast timer with all other weaponskills and spells. Duration: 30s | Tank + Meele + Ranged + Healer + Magic ",
    "Paralyze L | Du fügst dem Ziel Paralyse zu. Dauer: 60 Sekunden | Afflicts target with Paralysis. Duration: 60s | Tank + Meele + Healer + Ranged + Magic ",
    "Paralyze L III | Du fügst dem Ziel und den Gegnern in seiner Nähe Paralyse zu. Dauer: 60 Sekunden | Afflicts target and all neaby enemies with Paralysis. Duration: 60s | Tank + Meele + Ranged + Healer + Magic ",
    "Swift L | Du erhöhst deine Be­we­gungs­ge­schwin­dig­keit beträchtlich. Dauer: 10 Sekunden | Greatly increases movement speed. Duration: 10s | Tank + Meele + Ranged + Healer + Magic ",
    "Featherfoot L | Du erhöhst deine Ausweichrate um 15%. Dauer: 45 Sekunden | Increases evasion by 15%. Duration: 45s | Tank + Meele + Ranged + Healer + Magic ",
    "Spirit Dart L | Du führst eine physische Fernkampfattacke aus. Attacke-Wert: 100. Zusatzeffekt: Erhöht den erlittenen Schaden des Ziels um 8%. Dauer: 60 Sekunden | Delivers a ranged attack with a potency of 100. Additional Effect: Afflicts target with Spirit Dart L, increasing damage taken by 8%. Duration: 60s | Meele + Ranged + Magic ",
    "Catastrophe L | Du führst eine magische Attacke auf alle umstehenden Gegner aus. Attacke-Wert: 4.000 bei Gegnern und 999.999 bei Ausführendem. | Deals unaspected damage to all nearby enemies with a potency of 4,000, while dealing damage with a potency of 999,999 to self. | Tank + Meele + Ranged ",
    "Dispel L | Du entfernst einen positiven Status vom Ziel. | Removes one beneficial status from target. | Meele + Ranged + Healer + Magic ",
    "Feint L | Du führst eine physische Attacke aus. Attacke-Wert: 100. Zusatzeffekt: Verringert die Ausweichrate des Ziels. Dauer: 60 Sekunden | Delivers an attack with a potency of 100. Additional Effect: Reduces target's evasion. Duration: 60s | Tank + Healer ",
    "Stealth L | Du verbirgst dich vor den Blicken der meisten Gegner, verlangsamst aber deine Be­we­gungs­ge­schwin­dig­keit um 50%. Einige Gegner können dich sehen. Bedingung: nach Ausführung nicht im Kampf. Effekt endet bei erneuter Ausführung oder nächstem Kommando mit Ausnahme von Sprint. | Blend in with your surroundings, making it impossible for most enemies to detect you, but reducing movement speed by 50%. Has no effect on certain enemies with special sight. Cannot be executed while in combat. Effect ends upon use of any action other than Sprint, or upon reuse. | Tank + Meele + Ranged + Magic + Healer ",
    "Aetherial Manipulation L | Du bewegst dich augenblicklich vor dein anvisiertes Ziel. Kann nicht während Fessel ausgeführt werden. | Rush to a target's side. Unable to cast if bound. | Tank + Meele + Magic + Healer + Ranged ",
    "Backstep L | Du springst 10 Yalme von deiner aktuellen Position zurück. Kann nicht während Fessel ausgeführt werden. | Jump 10 yalms back from current position. Cannot be executed while bound. | Tank + Meele + Ranged + Healer + Magic ",
    "Tranquilizer L | Du fügst dem Ziel Betäubung zu. Dauer: 8 Sekunden | Stuns target. Duration: 8s | Tank + Meele + Ranged + Healer + Magic ",
    "Bloodbath L | Du wandelst einen Teil deines ausgeteilten Schadens in LP um. Dauer: 45 Sekunden | Converts a portion of damage dealt into HP. Duration: 45s | Tank + Meele + Ranged + Healer + Magic",
    "Rejuvenate L | Du regenerierst augenblicklich 50 % deiner Maximal-LP und 50% deiner Maximal-MP. | Instantly restores 50% of maximum HP and MP. | Tank + Meele + Ranged + Healer + Magic ",
    "Haymaker L | Du führst eine physische Attacke aus. Attacke-Wert: 300 Zusatzeffekt: Gegner wird um 20% verlangsamt. Bedingung: Nur direkt nach erfolgreichem Ausweichen. Dauer: 30 Sekunden | Delivers an attack with a potency of 300. Can only be executed immediately after evading an attack. Additional Effect: Slow +20%. Duration: 30s | Tank ",
    "Rapid Recast L | Du halbierst die Re­ak­ti­vie­rungs­zeit des nächsten ausgeführten Talents. Dauer: 15 Sekunden | Shortens recast time for next ability used by 50%. Duration: 15s | Tank + Meele + Ranged + Magic ",
	"Cure L | Du regenerierst LP des Ziels. Heilpotenzial: 9.000 | Restores target's HP. Cure Potency: 9,000 | Tank + Meele + Ranged ",
    "Cure L II | Du regenerierst LP des Ziels. Heilpotenzial: 12.000 | Restores target's HP. Cure Potency: 12,000 | Meele + Magic + Ranged ",
    "Stoneskin L | Du errichtest eine Barriere um das Ziel, die insgesamt 10% der Maximal-LP des Ziels absorbiert. Dauer: 30 Sekunden | Creates a barrier around target that absorbs damage totaling 10% of target's maximum HP. Duration: 30s | Tank + Meele + Magic + Healer + Ranged ",
    "Cure L III | Du regenerierst eigene LP oder die eines Grup­pen­mit­glieds und aller umstehenden Grup­pen­mit­glieder. Heilpotenzial: 9.000 | Restores own or target party member's HP and all party members nearby target. Cure Potency: 9,000 | Tank + Meele + Ranged ",
    "Regen L | Du regenerierst stetig LP des Ziels. Heilpotenzial: 2.500. Dauer: 21 Sekunden | Grants Regen to target. Cure Potency: 2,500. Duration: 21s | Tank + Meele + Ranged + Magic ",
    "Esuna L | Du entfernst einen negativen Status vom anvisierten Ziel. | Removes a single detrimental effect from target. | Tank + Meele + Ranged + Magic ",
    "Incense L | Du setzt dich an die erste Stelle der Feindseligkeitsliste des Gegners und erhöhst die Feindseligkeit noch weiter. Dauer: 15 Sekunden | Gesture threateningly, placing yourself at the top of a target's enmity list and increasing enmity generation. Duration: 15s | Meele + Ranged + Healer + Magic ",
    "Raise L | Du belebst das Ziel wieder, wonach es für gewisse Zeit unter Schwäche leidet. | Resurrects target to a weakened state. | Tank + Meele + Ranged ",
    "Bravery L | Du erhöhst den ausgeteilten Schaden des Ziels um 10%. Dauer: 300 Sekunden | Increases target's damage dealt by 10%. Duration: 300s | Healer + Magic ",
    "Solid Shield L | Du verringerst den Schaden, den du durch phyische Angriffe erleidest, um 99%. Dauer: 8 Sekunden | Reduces physical damage taken by 99%. Duration: 8s | Meele + Magic + Healer + Ranged ",
    "Spell Shield L | Du reduzierst Schaden, den du durch magische Angriffe erleidest, um 99%. Dauer: 8 Sekunden | Reduces magic damage taken by 99%. Duration: 8s | Tank + Meele + Ranged + Magic ",
    "Reflect L | Du errichtest eine Barriere um dich oder ein anderes Grup­pen­mit­glied, die jedwede Magie reflektiert. Dauer: 10 Sekunden | Creates a magic-reflecting barrier around self or party member. Duration: 10s | Tank + Meele + Ranged + Magic + Healer",
    "Smite L | Du führst eine physische Attacke aus. Attacke-Wert: 1.000. Zusatzeffekt: Du wandelst einen Teil deines ausgeteilten Schadens in LP um. Bedingung: Die eigenen LP betragen 50% oder weniger. | Delivers an attack with a potency of 1,000. Can only be executed when your HP is below 50%. Additional Effect: Restores an amount of own HP proportional to damage dealt | Tank ",
    "Refresh L | Erhöht die Magia-Ätherregeneration von dir und umstehenden Grup­pen­mit­gliedern. Dauer: 30 Sekunden | Increases the amount of magia aether regenerated over time by self and nearby party members. Duration: 30s | Healer ",
    "Banish L | Du führst eine elementneutrale magische Attacke aus. Attacke-Wert: 200. Zusatzeffekt: Erhöht den erlittenen Schaden untoter Gegner um 25%. Dauer: 60 Sekunden | Deals unaspected damage with a potency of 200. Additional Effect: Afflicts undead targets with Banish L, increasing damage taken by 25%. Duration: 60s | Healer ",
    "Banish L III | Du führst eine elementneutrale magische Attacke auf das Ziel und die Gegner in seiner Nähe aus. Attacke-Wert: 150. Zusatzeffekt: Erhöht den erlittenen Schaden untoter Gegner um 25%. Dauer: 60 Sekunden | Deals unaspected damage with a potency of 150 to target and all enemies nearby it. Additional Effect: Afflicts undead targets with Banish L, increasing damage taken by 25%. Duration: 60s | Healer ",
    "Magic Burst L | Du verdoppelst den Schaden magischer Attacken im Austausch für erhöhten MP-Verbrauch. Dauer: 20 Sekunden | Increases spell damage by 100% while increasing MP cost. Duration: 20s | Healer + Magic ",
    "Double Edge L | Du erhöhst deinen ausgeteilten physischen Schaden alle 3 Sekunden um 15%, während deine LP pro Stapel um jeweils 360 LP mehr sinken. Der Effekt ist bis zu 16 Einheiten stapelbar. | Increases physical damage dealt while dealing damage to self over time. Stacks increase every 3 seconds, up to a maximum of 16. For each stack, physical damage dealt is increased by 15%, and potency of damage dealt to self increases by 360. | Tank + Meele ",
    "Eagle Eye Shot L | Du führst eine physische Fernkampfattacke aus. Attacke-Wert: 80. Mit sinkenden LP des Ziels steigt der Attacke-Wert bis zum maximal Zehnfachen. Erhöht die Feindseligkeit extrem. | Delivers a ranged attack with a potency of 80. Potency increases up to 1,000% the lower the target's HP. Generates significant enmity upon use. | Ranged ",
    "Perception L | Du deckst im Umkreis von 15 Yalmen alle Fallen auf. Wenn sich keine Fallen im Umkreis von 15 Yalmen befinden, wird der Suchkreis auf 36 Yalme erweitert und dir wird gewahr, ob sich dort noch Fallen befinden. Dieses Logos-Kommando kann nur in Dungeons angewendet werden. | Reveals all traps within a 15-yalm radius. If no traps exist within 15 yalms, detects whether any traps are present within a 36-yalm radius. Only effective within dungeons. | Meele + Ranged ",
    "Wisdom of the Elder | Du erhöhst deinen ausgeteilten magischen Schaden um 35% und verringerst deinen erlittenen magischen Schaden um 22%. Außerdem verringerst du den MP-Verbrauch deiner Zauber. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases magic damage dealt by 35% while reducing magic damage taken by 22% and decreasing spell MP cost. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Magic ",
    "Wisdom of the Duelist | Du erhöhst deinen ausgeteilten physischen Schaden um 40% und deine maximalen LP um 15%. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases physical damage dealt by 40% and maximum HP by 15%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Meele ",
    "Wisdom of the Fiendhunter | Du erhöhst deinen ausgeteilten physischen Schaden um 25% und deine Ausweichrate wird um 25% erhöht. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. | Increases physical damage dealt by 25% and evasion by 25%. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. | Ranged ",
    "Wisdom of the Indomitable | Du verringerst deinen erlittenen Schaden um 64%. Wenn dich eine Attacke trifft und du 50% oder mehr deiner Lebenspunkte verlierst, erhältst du einen Stapel „LP-Bonus“. Der Effekt kann bis zu 16 Mal gestapelt werden. Kann nicht zusammen mit anderen Vermächtnisfähigkeiten eingesetzt werden. Effekt endet bei erneuter Ausführung oder wenn ein anderes Vermächtnis aktiviert wird. Dauer: 15 Minuten | Reduces damage taken by 64%. Grants one stack of HP Boost each time damage equal to or greater than half of maximum HP is taken from a single-target attack, up to a maximum of 16. Cannot be used with other Wisdom abilities. Effect ends upon reuse or upon replacement of duty action. Duration: 15m | Tank ",
    "Sacrifice L | Du regenerierst alle LP des Ziels und belebst es wieder. Zusatzeffekt: Du erhältst den Status Aufopferung. Effekt von Aufopferung: Kampfunfähigkeit nach Ablauf der Effektdauer. Bedingung: Aufopferung nicht aktiv. Dauer: 10 Sekunden | Restores all of a KO'd target's HP. Cannot be executed if currently afflicted with Sacrifice. Additional Effect: Inflicts Sacrifice on self. Sacrifice Effect: When effect expires, you will be KO'd Duration: 10s | Healer ",
];

/* ------------------------------------------------------------
   TABELLE 4 – OBERKLASSEN (Rollen)
   FORMAT: "datei.png" | "Rolle EN" | "Rolle DE"
   Die REIHENFOLGE dieser Zeilen bestimmt die Anzeige-Reihenfolge im Tooltip:
   Tank > Heiler > Nahkaempfer > Fernkaempfer > Magier
   ------------------------------------------------------------ */
const ROLE_LINES = [
    "role_Tank.png | Tank | Verteidiger",
    "role_Healer.png | Healer | Heiler",
    "role_Meele.png | Meele | Nahkämpfer",
    "role_Ranged.png | Ranged | Fernkämpfer",
    "role_Magic.png | Magic | Magier",
];

/* ------------------------------------------------------------
   TABELLE 5 – KLASSEN (4 Spalten)
   FORMAT: "datei.png" | "Klasse EN" | "Klasse DE" | "Rolle EN (genau wie in Tabelle 4)"
   Klassen ohne passende Rolle werden unter "Ohne Rolle" gesammelt.
   ------------------------------------------------------------ */
const CLASS_LINES = [
    "Paladin.png | Paladin | Paladin | Tank",
    "Warrior.png | Warrior | Krieger | Tank",
    "DarkKnight.png | Dark Knight | Dunkelritter | Tank",
    "Gunbreaker.png | Gunbreaker | Revolverklinge | Tank",
    "WhiteMage.png | White Mage | Weismagier | Healer",
    "Scholar.png | Scholar | Gelehrter | Healer",
    "Astrologian.png | Astrologian | Astrologe | Healer",
    "Sage.png | Sage | Weiser | Healer",
    "Monk.png | Monk | Mönch | Meele",
    "Dragoon.png | Dragoon | Dragoon | Meele",
    "Ninja.png | Ninja | Ninja | Meele",
    "Samurai.png | Samurai | Samurai | Meele",
    "Reaper.png | Reaper | Schnitter | Meele",
    "Bard.png | Bard | Barde | Ranged",
    "Machinist.png | Machinist | Maschinist | Ranged",
    "Dancer.png | Dancer | Tänzer | Ranged",
    "BlackMage.png | Black Mage | Schwarzmagier | Magic",
    "Summoner.png | Summoner | Beschwörer | Magic",
    "RedMage.png | Red Mage | Rotmagier | Magic",
];

// Woher bekommt man welches Logogramm? (parallel zu LOGOGRAM_LINES)
// Format: "Name EN" | "Source EN;Source EN;..." | "Quelle DE;Quelle DE;..."
const LOGOGRAM_INFO_LINES = [
  "Conceptual Logogram | bronze chest; Sprite | Pyros: Bronze-Truhe; Elementare",
  "Fundamental Logogram | Pyros: bronze chest; Level 41 Thunderstorm Sprite; Level 58 Death Sprite; Level 65 Death Sprite;Pyros: Chain 30 | Pyros: Bronze-Truhe; Level 41 Gewitter-Exergon; Level 58 Dunkel Exergon; Level 65 Dunkel Exergon; Pyros: Erfolgsträhne 30",
  "Offensive Logogram | Pyros: gold chest; Hydatos: gold chest | Pyros: Gold-Truhe; Hydatos: Gold-Truhe",
  "Protective Logogram | Pyros: gold chest; Hydatos: bronze chest; Flauros; Askalphos; Lesath; Lamebrix; Glaukopis; Skoll | Pyros: Gold-Truhe; Hydatos: Bronze-Truhe; Flauros; Askalphos; Lesath; Wüterix-Söldner; Glaukopis; Skalli",
  "Curative Logogram | Pyros: silver chest; Hydatos: bronze chest; Leucosia; Graffiance; Aetolus; Iris; Lumber Jack; Penthesilea | Pyros: Silber-Truhe; Hydatos: Bronze-Truhe; Leukosia; Graffiance; Aetolus; Iris; Holzfäller; Penthesilea",
  "Tactical Logogram | Heat-Warped Lockbox; Moisture Warped Lockbox | Feuerversengte Schließkassette; Wassergeschliffene Schließkassette",
  "Inimical Logogram | Hydatos: bronze chest; Hydatos: silver chest; Pyros: Level 52 Snowstorm Sprite Adaptation; Pyros: Level 54 Thunder Sprite Adaptation; Pyros: Level 55 Typhoon Sprite Adaptation; The Sophist; Grand Duke Batym; Eldthurs; Dux; Ying-Yang | Hydatos: Bronze-Truhe; Hydatos: Silber-Truhe; Pyros: Level 52 Schneesturm-Exergon; Level 54 Gewitter-Exergon; Level 55 Taifun-Exergon; Der Sophist; Großherzog Batym; Eldthurs; Dux; Ying-Yang",
  "Mitigative Logogram | Hydatos: silver chest; Level 43 Ember Sprite Adaptation; Level 46 Thunderstorm Sprite; Level 46 Thunderstorm Sprite Adaptation; Undead Adaptation | Hydatos: Silber-Truhe; Level 43 Asche-Exergon Adaptation; Level 46 Gewitter-Exergon Adaptation; Untote Adaptation",
  "Obscure Logogram | Chest in Balders Arsenal;Hydatos: Chain 30 | Truhe in Balders Arsenal; Hydatos: Erfolgsträhne 30",
];