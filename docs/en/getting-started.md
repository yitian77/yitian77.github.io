---
title: Getting Started
---

# Getting Started

This page is intended for first-time players, modpack authors, and server administrators who want a quick overview of BlockZ before digging into the full documentation.

## Runtime Environment {#runtime}

- **Minecraft**: 1.20.1
- **Loader**: Forge 47.4.15
- **Java**: 17
- **Main dependencies**: GeckoLib, Curios
- **Key integrations**: TaCZ, Thirst

## Core Gameplay Focus

- Carrying capacity is limited much more strictly than in vanilla.
- Equipment choice directly changes how much loot you can carry.
- Injury, fractures, bleeding, and stamina drain shape the combat and travel rhythm.
- Leaning, shoulder camera, and prone behavior make combat more tactical.

## Key Assumption Before You Start

In BlockZ, your carrying space is not a single giant backpack. It is a combined system made of backpacks, clothing, vests, extra equipment slots, and item sizes.

You should think of it as **equipment defines carrying ability**, not "open inventory and automatically get a lot of empty space."

## Default Keybindings {#keybindings}

These bindings are based on the current project code.

| Action | Default key | What it really does | Notes |
| --- | --- | --- | --- |
| Vanilla inventory key | `E` | Opens inventory | If DayZ UI is enabled, this opening is intercepted and replaced with the BlockZ inventory screen. |
| `key.blockz.open_dayz` | `I` | Toggle DayZ UI mode | This toggles the UI mode. It does **not** directly open the inventory. |
| `key.blockz.rotate_item` | `Space` | Rotate a grid item | Relevant when holding a rotatable item in the DayZ inventory screen. |
| `key.blockz.lean_left` | `Q` | Lean left | Disabled while sprinting, airborne, or prone. |
| `key.blockz.lean_right` | `E` | Lean right | You may want to rebind this if it conflicts with your habits. |
| `key.blockz.prone` | `Z` | Go prone / stand up | While prone, jump input first tries to stand the player up. |
| `key.blockz.focus` | `Middle mouse` | Focus zoom | Works only in first person, outside menus, and while not scoping. |

## First Steps in a New World {#first-steps}

1. Press your normal inventory key first.
2. If DayZ UI is enabled, the game will open the BlockZ inventory instead of the vanilla one.
3. Learn the three important areas:
   - nearby loot
   - equipment and worn gear
   - storage / pockets
4. Expect limited starting capacity based on config.
5. Prioritize backpacks, vests, jackets, and pants that increase carrying ability.
6. Keep medical items ready for bleeding, fractures, and general recovery.

## What To Do In Your First 5 Minutes

- **Check whether DayZ UI is enabled**: use `I` to toggle the mode if needed.
- **Understand your starting capacity**: some packs intentionally begin with very few free pockets.
- **Find your first capacity upgrade quickly**: backpacks, vests, tops, and pants matter a lot.
- **Keep medical items accessible**: bandages, rags, splints, morphine, and codeine are all meaningful early tools.
- **Do not fill every slot immediately**: BlockZ plays better when you preserve operating space instead of stuffing everything into your inventory.

## What To Remember In Combat And Movement

- **Stamina matters**: sprinting, jumping, and water movement directly affect your rhythm.
- **Leaning is conditional**: it does not behave as a universal movement tool in every state.
- **Prone changes control expectations**: jump input first tries to stand you up.
- **Focus zoom is first-person only**: middle mouse does not work the same way in third person or while scoped.
- **TaCZ can affect camera behavior**: current compatibility may force first-person view while aiming.

## Recommended Companion Mods {#recommended-mods}

- **TaCZ** for modern gunplay.
- **Curios** for extended equipment slots.
- **Thirst** for stronger survival pressure.
- **JEI** for recipes and item lookup in modpacks.

## Admin Commands {#commands}

> These commands require at least **permission level 2**, so they are mainly for administrators, testers, and modpack authors.

| Command | Purpose | Best use case |
| --- | --- | --- |
| `/blockz reload` | Reload main configs and sync them | After editing `blockz-common.toml` or `dayz_zombie.toml` |
| `/blockz_reload` | Reload grid and capacity rules | After editing `grid_items.json` |
| `/blockz_toggle_ui <true\|false> [target]` | Toggle DayZ UI | UI debugging or switching a player back to vanilla inventory behavior |
| `/blockz_grid_item <width> <height> [color]` | Write held-item grid rule | Quickly fixing item footprint rules |
| `/blockz_clothing_capacity <width> <height>` | Write held-item internal capacity rule | Testing clothing or container-like item storage |
| `/blockz_clear_corpse [targets]` | Clear corpse entities | Cleanup, debugging, or testing corpse flow |

### `/blockz reload`

- **Source**: `BlockZ.java`
- **What it does**: reloads main config values and broadcasts server-side config data again.
- **Scope**: mainly the `toml` config side, not `grid_items.json`.
- **Use it when**: you changed stamina, lean, shoulder camera, UI, or zombie config values.

Example:

```text
/blockz reload
```

### `/blockz_reload`

- **Source**: `CommandInit.java`
- **What it does**: reloads `run/config/blockz/grid_items.json` and syncs grid rules again.
- **Scope**: item footprint, grid color, and internal capacity rules.
- **Use it when**: you edited `grid_items.json` directly or want newly written rules to apply immediately.

Example:

```text
/blockz_reload
```

### `/blockz_toggle_ui <true|false> [target]`

- **What it does**: toggles DayZ UI mode for a player.
- **Arguments**:
  - `true`: enable DayZ UI
  - `false`: disable DayZ UI and allow vanilla-style inventory behavior
  - `[target]`: optional, defaults to the command sender
- **Use it when**: a player is not comfortable with the DayZ UI yet, or a menu interaction needs compatibility testing.

Example:

```text
/blockz_toggle_ui false
/blockz_toggle_ui true Steve
```

### `/blockz_grid_item <width> <height> [color]`

- **What it does**: writes the held item's footprint rule directly into the rule file.
- **Arguments**:
  - `width`: width, limited to `1-16` in code
  - `height`: height, limited to `1-16` in code
  - `[color]`: optional grid color value
- **Color formats** supported by current code:
  - `#7CFFAA`
  - `0x7CFFAA`
  - `FF7CFFAA`
- **Use it when**: a third-party item has the wrong size in the BlockZ inventory, or you want a custom grid color quickly.

Example:

```text
/blockz_grid_item 2 3
/blockz_grid_item 2 3 #7CFFAA
```

### `/blockz_clothing_capacity <width> <height>`

- **What it does**: writes an internal storage rule for the held item.
- **Arguments**:
  - `width`: internal storage width, limited to `1-16`
  - `height`: internal storage height, limited to `1-16`
- **Current behavior**: the old clothing-only restriction has already been removed in code.
- **Use it when**: testing clothes, packs, or any item that should behave like an internal container.

Example:

```text
/blockz_clothing_capacity 4 4
```

### `/blockz_clear_corpse [targets]`

- **What it does**: removes corpse entities.
- **Arguments**:
  - no argument: clears all `CorpseEntity` instances in the current level
  - `targets`: only clears selected entities that are actually corpses
- **Use it when**: corpse testing, cleanup, or server-side troubleshooting.

Example:

```text
/blockz_clear_corpse
/blockz_clear_corpse @e[type=blockz:corpse,limit=5]
```

### Command Notes {#command-notes}

- if reloading main configs changes nothing, check whether you changed `toml` files or `grid_items.json`
- if `grid_items.json` changes are not visible, use `/blockz_reload` instead of `/blockz reload`
- if a new item has the wrong size, hold it and write a quick rule with `/blockz_grid_item`
- if you are testing internal storage, write the rule first and then reopen the inventory if needed

## Common Misunderstandings {#misunderstandings}

- **`I` is not the inventory-open key.** It toggles DayZ UI mode.
- **Not every container is forced into DayZ UI.** The project already uses a whitelist-oriented compatibility strategy.
- **Not every item has a correct grid rule by default.** Extra rules are usually handled through `run/config/blockz/grid_items.json` or the related admin commands.
- **Zombie corpse behavior is its own system.** Current DayZ zombies spawn a dedicated corpse entity after death instead of behaving exactly like player corpses.

## Read Next

- If you are a player, continue with [Systems Overview](/en/systems).
- If you build modpacks, also read [Configuration](/en/configuration) and [Compatibility and Architecture](/en/compatibility).
