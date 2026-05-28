---
title: 配置说明
---

# 配置说明

BlockZ 的配置分为界面、背包、体力、相机、探头、第三人称、视觉效果、主菜单与丧尸行为等多个模块。本页按当前源码与 `blockz-common.toml` / `dayz_zombie.toml` 的结构进行整理。

## 首先要理解的一点

BlockZ 已经把很多配置纳入**服务端权威同步**链路。也就是说，在联机环境中，玩家客户端看到和使用的关键参数，往往来自服务器快照，而不是本地配置文件本身。

## 主配置文件：blockz-common.toml

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

## 最容易影响手感的 5 个参数

- `stamina.stamina.sprint_cost`
- `stamina.stamina.recovery_rate`
- `lean.lean.offset`
- `camera_motion.walk_sway_strength`
- `third_person_camera.third_person_shoulder_distance_offset`

## 背包与容量配置

这些参数决定装备体系在玩法中的实际价值。

- **开局容量**：`initial_pocket_slots` 决定玩家没有背包时的初始口袋规模。这个值越低，越强调前期搜刮压力与衣物价值。
- **装备容量**：`backpack_coyote_slots`、`vest_0_slots`、`shirt_slots` 等参数，决定各装备在整体资源循环中的层级定位。

### 调参原则

如果你希望玩法更像 DayZ，建议保留较少开局口袋，并让衣服、裤子和背心提供明显但有限的中期价值，把大背包留作明确的阶段性提升。

## 体力与移动配置

体力系统会直接改变跑图、追击、撤离和涉水时的节奏。

| 参数 | 含义 | 调高后的倾向 |
| --- | --- | --- |
| `max_capacity` | 最大体力值 | 提升持续运动能力 |
| `sprint_cost` | 疾跑每 tick 消耗 | 更强调冲刺取舍 |
| `jump_cost` | 跳跃消耗 | 更惩罚高频跳跃位移 |
| `recovery_rate` | 恢复速度 | 更快回到可战斗状态 |
| `water_penalty` | 水中移动额外惩罚 | 更强调地形选择 |

## 探头与镜头参数

- `lean.lean.offset`：控制探头横向偏移。
- `lean.lean.angle_degrees`：控制侧倾角度。
- `lean.lean.animation_duration`：控制进出探头动画时长。
- `camera_motion.replace_vanilla_walk_bobbing`：是否完全替换原版走路摇晃。

## 第三人称与注视参数

- `focus_zoom.enable_focus_zoom`：注视缩放总开关。
- `focus_zoom.focus_fov_multiplier_walk`：步行注视倍率。
- `third_person_camera.third_person_shoulder_horizontal_offset`：肩位横向偏移。
- `third_person_camera.third_person_shoulder_switch_smoothing`：切肩平滑速度。

## 视觉效果配置

视觉配置既影响氛围，也涉及可访问性。

- **暗角与低健康效果**：`[screen_effects]` 里的暗角和低健康视觉效果更接近生存氛围表达，但对部分玩家来说也可能更有压迫感。
- **冷蓝雾气**：`[atmosphere]` 主要用于整体世界氛围塑造。它不会直接改变玩法判定，但会显著影响画面观感与地图情绪。

### 可访问性提醒

低健康视觉效果和较强暗角可能改变对比度与色彩感受。若你的整合包面向更广玩家群体，建议在默认配置中适当保守。

## 丧尸配置：dayz_zombie.toml

该配置负责 DayZ 丧尸的感知、战斗属性与夜晚强化行为。

| 分区 | 作用 | 典型用途 |
| --- | --- | --- |
| `sense` | 发现距离、索敌间隔、目标记忆与呼叫范围 | 塑造潜行容错与夜战压力 |
| `combat` | 生命、攻击、移速、护甲与流血概率 | 决定正面对抗强度 |
| `state` | 尸体停留时间与夜晚强化倍率 | 控制尸体存在感与昼夜差异 |

## 使用建议

- **联机环境**：建议把会改变交互节奏和战斗判定的参数统一在服务端调整，不要依赖玩家自行修改客户端配置。
- **整合包环境**：如果整合包同时使用 TaCZ、Thirst 与其他装备模组，建议优先稳定 UI、背包容量、体力与越肩相机，再逐步增加视觉表现强度。
