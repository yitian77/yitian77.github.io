---
title: Getting Started
---

# Getting Started

This page is intended for first-time players, modpack authors, and server administrators who want a quick overview of BlockZ before digging into the full documentation.

## Runtime Environment

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

## First Steps in a New World

1. Press `E` to open the custom DayZ-style inventory.
2. Learn the nearby items area, player equipment area, and inventory grid layout.
3. Expect limited starting capacity depending on config.
4. Prioritize backpacks, vests, jackets, and pants that increase carrying ability.
5. Keep medical items ready for bleeding or fractures.

## Recommended Companion Mods

- **TaCZ** for modern gunplay.
- **Curios** for extended equipment slots.
- **Thirst** for stronger survival pressure.
- **JEI** for recipes and item lookup in modpacks.

## Common Commands

| Command | Purpose |
| --- | --- |
| `/blockz reload` | Reload the main BlockZ config and sync server-side values. |
| `/blockz_reload` | Reload grid item rules and sync them to clients. |
| `/blockz_toggle_ui <true\|false> [target]` | Toggle the DayZ-style UI for a player. |
| `/blockz_grid_item <width> <height> [color]` | Write grid size data for the held item. |
| `/blockz_clothing_capacity <width> <height>` | Assign internal capacity to the held item. |
| `/blockz_clear_corpse [targets]` | Clear corpse entities for testing or administration. |

## Read Next

- If you are a player, continue with [Systems Overview](./systems.md).
- If you build modpacks, also read [Configuration](./configuration.md) and [Compatibility and Architecture](./compatibility.md).
