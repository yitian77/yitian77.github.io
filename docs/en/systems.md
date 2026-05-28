---
title: Systems Overview
---

# Systems Overview

BlockZ is no longer just a UI experiment. It is a coordinated group of survival, inventory, camera, and synchronization systems that work together.

## DayZ Inventory and Grid-based Items

This is the core gameplay layer of the mod.

- **Custom menu structure**: `DayZInventoryMenu` and `DayZInventoryScreen` provide the nearby items panel, equipment section, inventory region, and compatibility slots.
- **Grid logic**: Items can occupy multiple cells based on width and height rather than always using 1x1 slots.
- **Capacity comes from gear**: Backpacks, vests, tops, and pants all contribute to the carrying grid.
- **Curios support**: Curios slots are integrated into the same DayZ-style equipment view.

## HUD, Stamina, and Screen Feedback

- **Custom HUD**: Shows health, stamina, noise, injuries, and other survival signals.
- **Stamina system**: Sprinting, jumping, and harsh movement consume stamina that must recover over time.
- **Low-health screen effects**: Visual feedback communicates danger without opening a menu.
- **Noise feedback**: Your movement state affects stealth and encounter risk.

## Medical and Status Systems

- **Bleeding** requires treatment items such as bandages or rags.
- **Fractures** create follow-up pressure instead of being a single instant penalty.
- **Pain management** expands medical items beyond simple healing.
- **Health state layering** separates raw life from long-term survival condition.

## Leaning, Prone, and Camera Systems

- **Leaning** changes camera offset and tactical peeking behavior.
- **Prone support** is synchronized over the network and affects presentation and posture logic.
- **First-person body rendering** improves tactical feedback and integration with combat mods.
- **Shoulder camera and motion effects** reshape the feel of movement and engagement.

## Corpses, Looting, and Containers

- **Player corpses** preserve equipment and support DayZ-style looting.
- **Zombie corpses** keep separate loot behavior and body logic.
- **Container takeover strategy** only targets safe menus instead of hijacking every screen blindly.
- **Grid-based container areas** keep looting interaction consistent with the player inventory.

## Server-authoritative Synchronization

This is essential for stable multiplayer behavior.

- Important configuration values are synchronized from the server.
- Runtime states such as UI mode, posture, capacity, and related systems stay authoritative.
- This reduces desync between what the client sees and what the server allows.
