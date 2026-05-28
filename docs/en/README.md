---
home: true
title: BlockZ Wiki
heroText: BlockZ
tagline: Hardcore survival documentation for Minecraft Forge 1.20.1
actions:
  - text: Getting Started
    link: /en/getting-started.html
    type: primary
  - text: Systems Overview
    link: /en/systems.html
  - text: Configuration
    link: /en/configuration.html
highlights:
  - header: Core Direction
    description: Built around a DayZ-style inventory, grid-based items, medical and stamina systems, leaning and camera behavior, plus TaCZ / Curios / Thirst compatibility.
    highlights:
      - title: DayZ-style Inventory
        details: A custom inventory screen, equipment layout, nearby items area, and container skinning form the core interaction loop.
      - title: Grid-based Items
        details: Items occupy multiple slots based on width and height instead of always using a single square.
      - title: Survival State Chain
        details: Stamina, bleeding, fractures, infection, and low-health visual pressure all shape the survival rhythm.
      - title: Tactical Camera
        details: Leaning, shoulder camera, first-person body rendering, and prone behavior change combat pacing.
      - title: Multiplayer Sync
        details: Important configs and runtime states are synchronized from the server to reduce client/server mismatch.
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

1. Start with [Getting Started](./getting-started.md) for the gameplay entry point and common commands.
2. Then read [Systems Overview](./systems.md) to build a full picture of the mod.
3. After that, continue with [Items and Equipment](./items.md) and [Configuration](./configuration.md).
4. If you are building a modpack or compatibility layer, finish with [Compatibility and Architecture](./compatibility.md).
