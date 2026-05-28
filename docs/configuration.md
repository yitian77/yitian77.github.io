---
title: 配置说明
---

# 配置说明

BlockZ 的配置分为界面、背包、体力、相机、探头、第三人称、视觉效果、主菜单与丧尸行为等多个模块。本页按当前源码与 `blockz-common.toml` / `dayz_zombie.toml` 的结构进行整理。

## 先看文件放在哪里 {#file-paths}

按当前项目运行目录，最常用的几个配置 / 规则文件通常在这里：

- `run/config/blockz-common.toml`
- `run/config/blockz/dayz_zombie.toml`
- `run/config/blockz/grid_items.json`

可以把它们简单理解成：

- **`blockz-common.toml`**：玩法、界面、相机、容量、视觉效果的大总开关。
- **`dayz_zombie.toml`**：DayZ 丧尸的发现距离、攻击强度、夜晚强化等。
- **`grid_items.json`**：具体到“某个物品占几格”“某个物品内部容量多大”的规则表。

## 首先要理解的一点

BlockZ 已经把很多配置纳入**服务端权威同步**链路。也就是说，在联机环境中，玩家客户端看到和使用的关键参数，往往来自服务器快照，而不是本地配置文件本身。

- **单人 / 本地测试**：改完配置基本就能直接看到效果。
- **联机 / 服务器**：关键玩法参数以服务器为准，玩家本地配置不一定真的生效。

## 主配置文件：blockz-common.toml {#main-config}

该文件覆盖 UI、背包、体力、相机与显示层等大部分常用功能。

| 分区 | 作用 | 建议优先级 |
| --- | --- | --- |
| `[gui.grid]` | 控制占格系统的列数、行数与总开关。 | 高 |
| `[gui.ui]` | 控制 DayZ UI、HUD、医疗状态系统与基础口袋数。 | 高 |
| `[backpacks]` | 控制不同背包、背心、衣服、裤子的容量参数。 | 高 |
| `[corpse]` | 控制尸体系统是否启用以及消失时间。 | 中 |
| `[stamina.stamina]` | 控制体力系统与消耗 / 恢复曲线。 | 高 |
| `[lean.lean]` | 控制左右探头的启用、偏移量与动画时长。 | 高 |
| `[camera_motion]` | 控制步态镜头摇晃与原版摇晃替换。 | 中 |
| `[focus_zoom]` | 控制注视缩放的开关与视野倍率。 | 中 |
| `[first_person_body]` | 控制真实第一人称身体渲染。 | 中 |
| `[third_person_camera]` | 控制越肩相机的偏移、平滑与默认肩位。 | 中 |
| `[screen_effects]` | 控制暗角与低健康视觉效果。 | 中 |
| `[atmosphere]` | 控制冷蓝雾气与去饱和氛围。 | 低 |
| `[mainmenu]` / `[mainmenu_posters]` | 控制自定义主菜单、背景切换与宣传图内容。 | 低 |

## 最常调整的 5 个参数

- `gui.ui.initial_pocket_slots`：决定玩家开局可用口袋数。
- `gui.ui.enable_dayz_inventory`：决定是否启用 DayZ 风格库存界面。
- `stamina.stamina.enable`：决定是否启用体力系统。
- `lean.lean.enable`：决定是否启用左右探头。
- `third_person_camera.enable_third_person_shoulder_camera`：决定是否启用越肩视角。

## 先调哪些最直接

如果你不想一上来研究几十个参数，可以先只看下面这几项：

| 你想改什么 | 看哪个参数 | 改大 / 开启后通常会怎样 |
| --- | --- | --- |
| 开局能带多少东西 | `gui.ui.initial_pocket_slots` | 开局更宽松，前期搜刮压力更低 |
| 要不要用 DayZ 背包界面 | `gui.ui.enable_dayz_inventory` | 开启后按背包键时会优先进入 BlockZ 的 DayZ UI |
| 要不要体力条和耐力限制 | `stamina.stamina.enable` | 开启后跑图、跳跃、涉水都要考虑体力 |
| 想不想保留探头 | `lean.lean.enable` | 开启后可用 `Q/E` 左右探头 |
| 想不想保留趴下相关表现 | `first_person_body.enable_real_first_person` | 开启后第一人称身体表现更完整，但也更吃兼容性 |
| 想不想保留越肩相机 | `third_person_camera.enable_third_person_shoulder_camera` | 开启后第三人称会更偏战术射击视角 |
| 画面要不要更压抑 | `screen_effects.*` / `atmosphere.*` | 低血量压迫感、雾气、去饱和会更明显 |

## 最容易影响手感的参数

- `stamina.stamina.sprint_cost`
- `stamina.stamina.recovery_rate`
- `lean.lean.offset`
- `camera_motion.walk_sway_strength`
- `third_person_camera.third_person_shoulder_distance_offset`

## 背包与容量配置 {#storage}

这些参数决定装备体系在玩法中的实际价值。

- **开局容量**：`initial_pocket_slots` 决定玩家没有背包时的初始口袋规模。这个值越低，越强调前期搜刮压力与衣物价值。
- **装备容量**：`backpack_coyote_slots`、`vest_0_slots`、`shirt_slots` 等参数，决定各装备在整体资源循环中的层级定位。

### `slots` 和 `grid` 的区别

- **`slots`**：更像“这件装备内部总共有多少格可用空间”。
- **`grid`**：更像“单个物品在网格里占多大面积”。

所以：

- 背包 / 衣服容量主要看 `toml`
- 某个具体物品占 `1x2`、`2x3` 还是 `3x3`，主要看 `grid_items.json`

### 调参原则

如果你希望玩法更像 DayZ，建议保留较少开局口袋，并让衣服、裤子和背心提供明显但有限的中期价值，把大背包留作明确的阶段性提升。

### 常见调法

- **偏硬核**：降低 `initial_pocket_slots`，保留较高 `sprint_cost`，不要给太多大背包。
- **偏休闲**：提高开局口袋、提高恢复速度、适当降低步态和视觉压迫。
- **偏枪战**：先把越肩相机、探头、体力和 TaCZ 兼容调顺，再去加雾气和屏幕效果。

## 体力与移动配置 {#stamina}

体力系统会直接改变跑图、追击、撤离和涉水时的节奏。

| 参数 | 含义 | 调高后的倾向 |
| --- | --- | --- |
| `max_capacity` | 最大体力值 | 提升持续运动能力 |
| `sprint_cost` | 疾跑每 tick 消耗 | 更强调冲刺取舍 |
| `jump_cost` | 跳跃消耗 | 更惩罚高频跳跃位移 |
| `recovery_rate` | 恢复速度 | 更快回到可战斗状态 |
| `water_penalty` | 水中移动额外惩罚 | 更强调地形选择 |

### 如果总觉得体力掉太快

优先看这几个：

- `stamina.stamina.sprint_cost`
- `stamina.stamina.recovery_rate`
- `stamina.stamina.max_capacity`
- `stamina.stamina.water_penalty`

一般先调**消耗**和**恢复**，最后再去改最大体力值。

## 探头与镜头参数 {#lean-camera}

- `lean.lean.offset`：控制探头横向偏移。
- `lean.lean.angle_degrees`：控制侧倾角度。
- `lean.lean.animation_duration`：控制进出探头动画时长。
- `camera_motion.replace_vanilla_walk_bobbing`：是否完全替换原版走路摇晃。

### 这些参数会直接影响手感

- **探头偏移太大**：更战术，但也更容易穿模或让玩家不适。
- **探头动画太慢**：会显得沉重，但近战和拐角反应会变钝。
- **步态摇晃太强**：氛围更足，但瞄准体验会更差。

## 第三人称与注视参数 {#third-person-focus}

- `focus_zoom.enable_focus_zoom`：注视缩放总开关。
- `focus_zoom.focus_fov_multiplier_walk`：步行注视倍率。
- `third_person_camera.third_person_shoulder_horizontal_offset`：肩位横向偏移。
- `third_person_camera.third_person_shoulder_switch_smoothing`：切肩平滑速度。

### 当前项目里的表现

- **注视缩放** 默认对应 `鼠标中键`。
- **真实第一人称身体** 由 `first_person_body.enable_real_first_person` 控制。
- **越肩相机** 的多个偏移参数都在同步链路里，联机下建议统一从服务端调。

## 视觉效果配置 {#visual-effects}

视觉配置既影响氛围，也涉及可访问性。

- **暗角与低健康效果**：`[screen_effects]` 里的暗角和低健康视觉效果更接近生存氛围表达，但对部分玩家来说也可能更有压迫感。
- **冷蓝雾气**：`[atmosphere]` 主要用于整体世界氛围塑造。它不会直接改变玩法判定，但会显著影响画面观感与地图情绪。

### 可访问性

低健康效果和较强暗角会明显改变画面对比度。面向更多玩家时，默认值建议保守一些。

## 规则文件：grid_items.json {#grid-rules}

这个文件非常重要，因为它决定了很多“具体物品怎么占格、能不能旋转、内部容量多大”的细节。

当前项目会从这里读取自定义规则：

- `run/config/blockz/grid_items.json`

### 什么时候该改它

- 你接入了别的模组物品，但它在 BlockZ 背包里尺寸不对。
- 某件装备理论上应该有内部容量，但实际没有。
- 你想快速统一一批关键物资的占格逻辑。

### 不想手改 JSON

可以直接用管理员命令：

- `/blockz_grid_item <width> <height> [color]`
- `/blockz_clothing_capacity <width> <height>`

这些命令会把主手物品规则直接写回对应规则文件。改完后如果没刷新，用 `/blockz_reload`。

## 丧尸配置：dayz_zombie.toml {#zombie-config}

该配置负责 DayZ 丧尸的感知、战斗属性与夜晚强化行为。

| 分区 | 作用 | 典型用途 |
| --- | --- | --- |
| `sense` | 发现距离、索敌间隔、目标记忆与呼叫范围 | 塑造潜行容错与夜战压力 |
| `combat` | 生命、攻击、移速、护甲与流血概率 | 决定正面对抗强度 |
| `state` | 尸体停留时间与夜晚强化倍率 | 控制尸体存在感与昼夜差异 |

### 最常动的几个参数

- `sense.sprint_detection_range`：玩家冲刺时更容易被发现。
- `combat.attack_damage`：丧尸单次攻击的基础伤害。
- `combat.attack_bleeding_chance`：丧尸打中后附加流血的概率。
- `state.enable_night_boost`：是否让夜晚丧尸更强。
- `state.night_follow_range_multiplier`：夜晚追人会不会更远、更难甩掉。

## 使用建议

- **联机环境**：建议把会改变交互节奏和战斗判定的参数统一在服务端调整，不要依赖玩家自行修改客户端配置。
- **整合包环境**：如果整合包同时使用 TaCZ、Thirst 与其他装备模组，建议优先稳定 UI、背包容量、体力与越肩相机，再逐步增加视觉表现强度。

## 建议顺序 {#tuning-order}

- **先改 `blockz-common.toml` 调整体感**
- **再改 `dayz_zombie.toml` 调丧尸强度**
- **最后改 `grid_items.json` 修具体物品规则**

第一次调 BlockZ 时，不建议三种文件一起乱改，不然很难判断是哪一项真正影响了手感。
