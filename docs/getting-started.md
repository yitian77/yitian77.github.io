---
title: 快速开始
---

# 快速开始

本页面面向第一次接触 BlockZ 的玩家、整合包作者与服务器管理者，帮助你快速理解这个模组的玩法重心、推荐搭配与最重要的控制点。

## 运行环境 {#runtime}

- **游戏版本**：Minecraft 1.20.1
- **加载器**：Forge 47.4.15
- **Java**：17
- **主要依赖**：GeckoLib、Curios
- **重点联动**：TaCZ、Thirst

## BlockZ 的玩法重心

- 资源携带受到更严格的容量限制。
- 装备选择会直接改变你能带多少物资。
- 受伤、骨折、失血、体力消耗会影响行动节奏。
- 探头、越肩视角和趴下等机制让战斗更偏战术化。

## 理解 BlockZ 的关键前提

在 BlockZ 中，**背包不是无限扩容容器**，而是和衣服、背心、附加装备槽共同组成的空间系统。

你需要把它理解成“装备决定可携带能力”，而不是“打开背包后默认拥有几十个格子”。

## 默认按键速查 {#keybindings}

以下按键来自当前项目源码中的真实注册内容，默认值如下：

| 按键 | 默认键位 | 实际作用 | 备注 |
| --- | --- | --- | --- |
| 原版背包键 | `E` | 打开背包 | 如果 DayZ UI 已启用，打开时会被接管为 BlockZ 的 DayZ 背包界面。 |
| `key.blockz.open_dayz` | `I` | 切换是否使用 DayZ UI | 这是“切换 DayZ 界面模式”，不是直接打开背包。 |
| `key.blockz.rotate_item` | `空格` | 旋转占格物品 | 仅在 DayZ 背包界面里拿起可旋转物品时有意义。 |
| `key.blockz.lean_left` | `Q` | 左探头 | 疾跑、趴下、离地时不会生效。 |
| `key.blockz.lean_right` | `E` | 右探头 | 默认与原版某些交互习惯可能冲突，建议按需改键。 |
| `key.blockz.prone` | `Z` | 趴下 / 起身 | 趴下时跳跃键会优先尝试起身。 |
| `key.blockz.focus` | `鼠标中键` | 注视缩放 | 只在第一人称、未开镜、未打开界面时生效。 |

## 第一次进入世界时 {#first-steps}

建议按下面顺序理解系统，不容易一上来就被 UI 和容量限制绕晕：

1. 先按**原版背包键**（默认 `E`）打开背包。
2. 如果你已经启用了 DayZ UI，那么这里看到的会是 BlockZ 的 DayZ 背包界面，而不是原版库存。
3. 观察三个核心区域：
   - **附近物品区**：用于搜刮地面或容器附近物品。
   - **角色装备区**：用于背包、背心、衣服、裤子、手套等装备位。
   - **库存 / 口袋区**：用于实际携带物资。
4. 如果你觉得界面过于复杂，可以先按 `I` 暂时切回原版库存逻辑，再逐步适应。
5. 记住一件事：**前期真正重要的不是物品数量，而是容量来源**。优先找背包、背心、上衣、裤子。

## 开局前 5 分钟应该做什么

- **先确认自己当前是否启用了 DayZ UI**：按 `I` 可切换。
- **检查初始口袋数量**：这个数量由配置决定，部分整合包会把开局口袋压得很低。
- **尽快拿到第一件扩容装备**：优先级通常是背包 > 背心 > 上衣 / 裤子。
- **把医疗物品放到容易拿的位置**：绷带、破布、夹板、吗啡、可待因都是很实用的前期物品。
- **不要把所有空间一次塞满**：BlockZ 的节奏更像“留操作空间”，而不是“所有格子都塞满才算赚”。

## 战斗和移动时要记住的事

- **体力不是装饰**：疾跑、跳跃、涉水都会吃体力，低体力时节奏会明显变差。
- **探头不是全时万能**：当前实现里，探头在疾跑、离地和趴下时不会正常进入。
- **趴下会锁住一部分动作**：按 `Z` 进入趴下后，跳跃键会先尝试起身，站不起来时会继续压住跳跃。
- **注视缩放只在第一人称有效**：如果你在第三人称、开镜或打开界面时按中键，不会有同样效果。
- **TaCZ 瞄准会影响视角**：当前项目对 TaCZ 做了相机联动，瞄准时可能强制切回第一人称。

## 推荐搭配 {#recommended-mods}

- **TaCZ**：用于现代枪械战斗，BlockZ 已围绕其第一人称与弹药逻辑做兼容。
- **Curios**：用于扩展装备槽，并接入 BlockZ 的 DayZ 风格装备布局。
- **Thirst**：用于补足饮水 / 生存压力，BlockZ HUD 已预留适配方向。
- **JEI**：用于查看物品来源与配方，尤其适合整合包环境。

## 管理命令 {#commands}

以下命令来自项目当前源码中的真实注册内容。

> 这些命令都要求至少有 **OP 2 权限**，更适合服主、整合包作者和测试环境使用。

| 命令 | 用途 | 适合什么时候用 |
| --- | --- | --- |
| `/blockz reload` | 重载主配置并广播同步 | 改完 `blockz-common.toml` 或 `dayz_zombie.toml` 后 |
| `/blockz_reload` | 重载占格 / 容量规则 | 改完 `grid_items.json` 后 |
| `/blockz_toggle_ui <true\|false> [target]` | 切换 DayZ UI | 排查界面兼容、给玩家切回原版界面时 |
| `/blockz_grid_item <width> <height> [color]` | 写入主手物品占格规则 | 给新物品快速补尺寸时 |
| `/blockz_clothing_capacity <width> <height>` | 写入主手物品内部容量规则 | 测试衣物、容器类物品内部容量时 |
| `/blockz_clear_corpse [targets]` | 清理尸体实体 | 测试、排障、清场时 |

### `/blockz reload`

- **来源**：`BlockZ.java`
- **作用**：重载主配置，并把服务端配置重新同步给客户端。
- **影响范围**：偏 `toml` 主配置，不是 `grid_items.json`。
- **适合场景**：你刚改了体力、探头、越肩视角、UI、丧尸参数这类配置。

示例：

```text
/blockz reload
```

### `/blockz_reload`

- **来源**：`CommandInit.java`
- **作用**：重读 `run/config/blockz/grid_items.json`，并重新同步网格规则。
- **影响范围**：偏占格尺寸、颜色和容量规则。
- **适合场景**：你刚手改了 `grid_items.json`，或者想让刚写入的规则立即刷新。

示例：

```text
/blockz_reload
```

### `/blockz_toggle_ui <true|false> [target]`

- **作用**：切换某个玩家是否使用 DayZ UI。
- **参数说明**：
  - `true`：启用 DayZ UI
  - `false`：关闭 DayZ UI，回到原版库存逻辑
  - `[target]`：可选，不填时默认作用于命令执行者
- **适合场景**：新玩家不适应 DayZ UI、某个服务器菜单和 DayZ UI 冲突、测试界面接管逻辑。

示例：

```text
/blockz_toggle_ui false
/blockz_toggle_ui true Steve
```

### `/blockz_grid_item <width> <height> [color]`

- **作用**：把主手物品的占格尺寸直接写进规则文件。
- **参数说明**：
  - `width`：宽度，源码限制 `1-16`
  - `height`：高度，源码限制 `1-16`
  - `[color]`：可选，网格颜色
- **颜色格式**：当前代码支持十六进制写法，例如：
  - `#7CFFAA`
  - `0x7CFFAA`
  - `FF7CFFAA`
- **适合场景**：第三方模组物品在 DayZ 背包里尺寸不对，或者想快速给某个物品补占格颜色。

示例：

```text
/blockz_grid_item 2 3
/blockz_grid_item 2 3 #7CFFAA
```

### `/blockz_clothing_capacity <width> <height>`

- **作用**：给主手物品写入内部容量规则。
- **参数说明**：
  - `width`：内部容量宽度，源码限制 `1-16`
  - `height`：内部容量高度，源码限制 `1-16`
- **当前实现特点**：源码里已经移除了“必须是衣物”的限制，所以现在不只衣服能写这个规则。
- **适合场景**：测试背心、衣服、背包，或其他想作为内部容器的物品。

示例：

```text
/blockz_clothing_capacity 4 4
```

### `/blockz_clear_corpse [targets]`

- **作用**：清理尸体实体。
- **参数说明**：
  - 不带参数：清理当前维度里的所有 `CorpseEntity`
  - 带 `targets`：只清理指定目标里属于尸体的实体
- **适合场景**：测试尸体生成、清理残留实体、服务器排障。

示例：

```text
/blockz_clear_corpse
/blockz_clear_corpse @e[type=blockz:corpse,limit=5]
```

### 命令使用建议 {#command-notes}

- **重载主配置后手感没变**：先确认你改的是 `toml`，不是 `grid_items.json`。
- **改了 `grid_items.json` 没刷新**：用 `/blockz_reload`，不是 `/blockz reload`。
- **某个新物品尺寸不对**：手拿该物品，直接用 `/blockz_grid_item 2 3` 这类命令快速补规则。
- **想测试衣物内部容量**：手持目标物品后，用 `/blockz_clothing_capacity 4 4` 一类命令立刻写入。

## 你应该先调哪些配置？ {#config-entry}

- `gui.ui.initial_pocket_slots`：决定开局口袋数量，最直接影响前期难度。
- `gui.ui.enable_dayz_inventory`：是否启用 DayZ 风格库存界面。
- `stamina.stamina.enable`：是否启用体力系统。
- `lean.lean.enable`：是否启用左右探头。
- `third_person_camera.enable_third_person_shoulder_camera`：是否启用越肩视角。
- `first_person_body.enable_real_first_person`：是否启用真实第一人称身体渲染。
- `focus_zoom.enable_focus_zoom`：是否启用中键注视缩放。

## 常见理解误区 {#misunderstandings}

- **不是所有容器都会被强制接管为 DayZ UI。** 项目已有菜单白名单策略以提高兼容性。
- **不是所有客户端都能随意使用本地配置覆盖服务端。** 多个关键参数采用服务端权威同步。
- **`I` 不是打开背包键。** `I` 默认是切换 DayZ UI 模式，真正打开背包还是用你的原版背包键。
- **不是所有物品都默认适配多格尺寸。** 自定义规则通常通过 `run/config/blockz/grid_items.json` 或对应命令维护。
- **丧尸尸体和玩家尸体不是完全同一套逻辑。** 当前项目里 DayZ 丧尸死亡后会生成独立的 `ZombieCorpseEntity` 供搜刮。

## 接下来读什么？

- 如果你是玩家：继续阅读 [系统总览](/systems)。
- 如果你是整合包作者：建议同步阅读 [配置说明](/configuration) 与 [兼容与架构](/compatibility)。
