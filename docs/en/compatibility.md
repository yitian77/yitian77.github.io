---
title: Compatibility and Architecture
---

# Compatibility and Architecture

BlockZ becomes valuable when many systems still remain coherent together: UI, extra slots, camera logic, first-person presentation, and multiplayer sync all need to cooperate.

## Core Architecture Modules

- **init**: registers items, menus, entities, effects, and sounds.
- **menu**: contains inventory interaction logic such as `DayZInventoryMenu`.
- **client.gui**: handles HUD and inventory rendering.
- **network**: synchronizes config snapshots, posture, and carrying state.
- **mixin**: connects into vanilla rendering, camera, menus, and player behavior chains.
- **compat**: bridges Curios, TaCZ, and other external mods.

## Curios Compatibility

Curios acts as the standard abstraction layer for extended equipment slots.

- Extra Curios slots can be collected and rendered inside the DayZ-style UI.
- This keeps external equipment consistent with the same inventory experience.
- Slot ordering must remain synchronized between server and client to avoid click mismatch.

## TaCZ Compatibility

TaCZ is currently one of the most important combat integrations.

- Ammo lookup already considers nested inventory and carrying structures.
- First-person compatibility avoids overlap between body, hands, and gun models.
- Prone and posture state are synchronized so gun behavior matches tactical movement.

## Thirst and State Expansion

The HUD can already read thirst-related survival data, allowing multiple survival mods to contribute to a shared status presentation.

## UI Takeover Strategy

BlockZ does not blindly hijack every menu.

- Safe vanilla containers can be reskinned into the DayZ-style interface.
- Modded or server-specific menus should keep their original interaction flow unless explicitly proven safe.

## Server-authoritative Synchronization

A large part of long-term compatibility depends on a clear source of truth.

- Important configs are synchronized from the server.
- Client caches should be cleared when leaving a server.
- This prevents stale UI or old multiplayer values from leaking into another world or server.
