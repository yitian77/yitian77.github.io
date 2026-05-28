---
title: Configuration
---

# Configuration

BlockZ uses multiple configuration sections to control the UI, carrying rules, stamina, camera behavior, visual effects, and zombie logic.

## Where The Important Files Are

In the current project layout, the most relevant runtime files are usually here:

- `run/config/blockz-common.toml`
- `run/config/blockz/dayz_zombie.toml`
- `run/config/blockz/grid_items.json`

You can think about them like this:

- **`blockz-common.toml`**: the main gameplay, UI, camera, carrying, and presentation config.
- **`dayz_zombie.toml`**: the dedicated DayZ zombie behavior and combat config.
- **`grid_items.json`**: per-item rules for size, rotation behavior, and internal capacity.

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
- `[first_person_body]`: true first-person body rendering.
- `[third_person_camera]`: shoulder camera offsets and smoothing.
- `[screen_effects]`: low-health and vignette effects.
- `[atmosphere]`: desaturation and fog-style atmosphere options.

## Beginner-Friendly Tuning Priorities

If you do not want to study every option at once, start here:

| If you want to change... | Look at... | Typical result |
| --- | --- | --- |
| starting carrying freedom | `gui.ui.initial_pocket_slots` | Higher values make early gameplay more forgiving |
| whether BlockZ inventory replaces vanilla inventory | `gui.ui.enable_dayz_inventory` | Turning it on makes the normal inventory key open the DayZ-style UI |
| whether stamina limits movement | `stamina.stamina.enable` | Turning it on makes sprinting, jumping, and water movement matter much more |
| whether leaning exists | `lean.lean.enable` | Turning it on allows `Q/E` leaning |
| whether shoulder camera exists | `third_person_camera.enable_third_person_shoulder_camera` | Turning it on makes third-person combat feel more tactical |
| whether stronger visual pressure exists | `screen_effects.*` and `atmosphere.*` | Low-health pressure, vignette, fog, and desaturation become more noticeable |

## Capacity And Inventory Tuning

- `initial_pocket_slots` controls how much the player can carry before finding useful equipment.
- `backpack_coyote_slots`, `vest_0_slots`, `shirt_slots`, and similar values define the practical value of worn gear.

### Slots vs Grid: Simple Explanation

- **slots** = how much storage a worn item provides
- **grid** = how much space a specific item occupies inside storage

That means:

- gear capacity mostly comes from the `toml` files
- exact item footprints mostly come from `grid_items.json`

## Movement And Camera Tuning

The most gameplay-sensitive values are usually:

- `stamina.stamina.sprint_cost`
- `stamina.stamina.recovery_rate`
- `stamina.stamina.max_capacity`
- `lean.lean.offset`
- `camera_motion.walk_sway_strength`
- `third_person_camera.third_person_shoulder_distance_offset`

If players complain that movement feels too exhausting, reduce stamina drain or improve recovery before making very large max-stamina changes.

## Real Controls Connected To These Configs

- focus zoom is tied to **middle mouse** by default
- true first-person body is controlled by `first_person_body.enable_real_first_person`
- leaning is tied to `Q/E`
- prone is tied to `Z`

Because several of these values are synchronized from the server, multiplayer packs should tune them on the server side first.

## Rule File: grid_items.json

This file is important because it defines many of the details that players immediately notice in the inventory.

- item size
- whether an item behaves correctly in the grid
- internal capacity rules for specific items

Current runtime path:

- `run/config/blockz/grid_items.json`

### When should you change it?

- a third-party mod item has the wrong footprint in the BlockZ inventory
- an item should have internal capacity but does not
- you want to standardize the footprint of important loot items

### Do you have to edit the JSON manually?

Not always. Current admin commands can write these rules for the held item:

- `/blockz_grid_item <width> <height> [color]`
- `/blockz_clothing_capacity <width> <height>`

After editing rules, use `/blockz_reload` if the changes are not visible yet.

## Zombie Config: dayz_zombie.toml

This file controls custom zombie perception, combat strength, and state behavior.

- `sense`: detection range, memory, and assist logic.
- `combat`: health, attack, armor, and bleeding chance.
- `state`: corpse duration and night buffs.

### The Most Intuitive Zombie Settings

- `sense.sprint_detection_range`: how easily sprinting players get noticed
- `combat.attack_damage`: base zombie damage per hit
- `combat.attack_bleeding_chance`: extra bleeding chance on hit
- `state.enable_night_boost`: whether zombies become stronger at night
- `state.night_follow_range_multiplier`: whether night zombies track from farther away

## Tuning Advice

- Tune multiplayer gameplay from the server side.
- Stabilize UI, carrying capacity, and stamina first.
- Add stronger visual pressure only after the core interaction loop feels good.

## Simple Safe Order For Editing

- edit `blockz-common.toml` first for overall feel
- edit `dayz_zombie.toml` next for threat and pressure
- edit `grid_items.json` last for specific item rules

If you change all three at once, it becomes much harder to understand which edit actually changed the gameplay feel.
