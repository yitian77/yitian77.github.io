---
layout: home
title: BlockZ Wiki
titleTemplate: BlockZ Wiki

hero:
  name: BlockZ
  text: Hardcore survival Wiki for Minecraft Forge 1.20.1
  tagline: Documentation centered on DayZ-style inventory flow, grid-based items, medical pressure, tactical posture, and multiplayer synchronization.
  image:
    src: /blockz-mark.svg
    alt: BlockZ Logo
  actions:
    - theme: brand
      text: Getting Started
      link: /en/getting-started
    - theme: alt
      text: Systems Overview
      link: /en/systems
    - theme: alt
      text: Configuration
      link: /en/configuration

features:
  - title: DayZ-style Inventory
    details: A custom inventory screen, equipment layout, nearby items area, and container skinning form the core interaction loop.
  - title: Grid-based Items
    details: Items occupy multiple slots based on width and height instead of always using a single square.
  - title: Survival State Chain
    details: Stamina, bleeding, fractures, infection, and low-health visual pressure shape the long-term survival rhythm.
  - title: Tactical Camera
    details: Leaning, shoulder camera, first-person body rendering, and prone behavior reshape combat pacing.
  - title: Multiplayer Sync
    details: Key configs and runtime states are synchronized from the server to reduce client/server mismatch.
  - title: Mod Compatibility
    details: The current design already considers Curios, TaCZ, Thirst, and menu takeover compatibility.
---

# What is BlockZ?

BlockZ is not just a content pack with a few extra items. It rebuilds Minecraft survival around more realistic carrying rules, tactical posture, and stronger resource management pressure.

You are expected to balance clothing pockets, backpacks, vests, movement, looting, injuries, recovery, and combat. The current project already includes:

- DayZ-style interface
- Grid-based item and capacity system
- HUD and stamina system
- Medical and status system
- Corpses and zombies
- First-person and third-person presentation
- Deep Curios and TaCZ integration

## Recommended Reading Order

1. Start with [Getting Started](/en/getting-started) for the gameplay entry point and common commands.
2. Then read [Systems Overview](/en/systems) to build a full picture of the mod.
3. After that, continue with [Items and Equipment](/en/items) and [Configuration](/en/configuration).
4. If you are building a modpack or compatibility layer, finish with [Compatibility and Architecture](/en/compatibility).

## Technology Stack

- **Forge + Mixin**: deep customization for menus, rendering, input, and camera behavior.
- **Capability + network sync**: keeps equipment state, runtime systems, and server-side rules aligned.
- **GeckoLib**: supports custom entity presentation and animation-oriented expansion.

## Current Content Focus

| Area | Current emphasis | Entry |
| --- | --- | --- |
| Inventory and grid logic | DayZ-style UI, multi-cell items, gear-defined capacity | [Systems Overview](/en/systems) |
| Survival pressure | stamina, bleeding, fractures, infection, low-health feedback | [Systems Overview](/en/systems) |
| Configuration tuning | server-authoritative rules, carrying balance, camera and lean parameters | [Configuration](/en/configuration) |
| Compatibility | Curios, TaCZ, Thirst, and menu takeover boundaries | [Compatibility and Architecture](/en/compatibility) |
