---
title: Configuration
---

# Configuration

BlockZ uses multiple configuration sections to control the UI, carrying rules, stamina, camera behavior, visual effects, and zombie logic.

## Important Principle

Many key options already participate in a server-authoritative synchronization flow. In multiplayer, important behavior often comes from the server snapshot rather than the client file alone.

## Main Config: blockz-common.toml

This file covers most frequently used systems.

- `[gui.grid]`: grid size and grid-system switches.
- `[gui.ui]`: DayZ UI, HUD, medical-state UI, and starting pocket settings.
- `[backpacks]`: capacity values for backpacks, vests, tops, and pants.
- `[corpse]`: corpse system and despawn timing.
- `[stamina.stamina]`: stamina enablement and recovery / drain rules.
- `[lean.lean]`: leaning enablement, offset, and animation timing.
- `[camera_motion]`: walking sway behavior.
- `[focus_zoom]`: focus zoom switching and FOV multiplier.
- `[third_person_camera]`: shoulder camera offsets and smoothing.
- `[screen_effects]`: low-health and vignette effects.
- `[atmosphere]`: desaturation and fog-style atmosphere options.

## Zombie Config: dayz_zombie.toml

This file controls custom zombie perception, combat strength, and state behavior.

- `sense`: detection range, memory, and assist logic.
- `combat`: health, attack, armor, and bleeding chance.
- `state`: corpse duration and night buffs.

## Tuning Advice

- Tune multiplayer gameplay from the server side.
- Stabilize UI, carrying capacity, and stamina first.
- Add stronger visual pressure only after the core interaction loop feels good.
