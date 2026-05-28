---
layout: home
title: BlockZ Wiki
titleTemplate: BlockZ Wiki

hero:
  name: BlockZ
  text: Minecraft Forge 1.20.1 硬核生存模组 Wiki
  tagline: 围绕 DayZ 风格库存、占格系统、医疗状态、战术姿态与联机同步构建的完整文档站。
  image:
    src: /blockz-mark.svg
    alt: BlockZ Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /getting-started
    - theme: alt
      text: 系统总览
      link: /systems
    - theme: alt
      text: 配置说明
      link: /configuration

features:
  - title: DayZ 风格库存
    details: 自定义背包界面、装备布局、附近物品区与容器换皮，共同组成 BlockZ 的核心交互体验。
  - title: Grid 占格物品
    details: 物品按宽高占据多个格位，容量管理不再只是“多几个槽位”，而是更接近真实空间分配。
  - title: 生存状态链
    details: 体力、流血、骨折、感染和低健康视觉反馈，共同塑造持续性的生存压力。
  - title: 战术视角表现
    details: 左右探头、越肩镜头、第一人称身体与趴下系统显著改变战斗与观察节奏。
  - title: 联机同步
    details: 关键配置和状态采用服务端权威同步，减少客户端与服务器分裂带来的判定问题。
  - title: 模组兼容
    details: 已围绕 Curios、TaCZ、Thirst 与菜单接管场景构建兼容策略，便于继续扩展整合包生态。
---

# BlockZ 是什么？

BlockZ 不是单纯添加几个物品，而是在原版生存基础上重建了一套更偏拟真、更重视空间管理与战术姿态的玩法框架。

你需要合理利用衣物口袋、背包与背心容量，在移动、搜刮、受伤、恢复与战斗之间权衡资源。当前项目已经形成较完整的体系，包括：

- DayZ 风格界面
- 占格物品与容量系统
- HUD 与体力系统
- 医疗与状态系统
- 尸体与丧尸系统
- 第一 / 第三人称表现
- Curios 扩展槽与 TaCZ 深度兼容

## 推荐阅读路径

1. 先看 [快速开始](/getting-started)，了解玩法入口与常用命令。
2. 再看 [系统总览](/systems)，建立对各子系统的整体认识。
3. 随后看 [物品与装备](/items) 和 [配置说明](/configuration)。
4. 如果你要做整合包或联动，再看 [兼容与架构](/compatibility)。

## 项目技术栈

- **Forge + Mixin**：深度定制菜单、渲染、输入与镜头行为。
- **Capability + 网络同步**：实现玩家装备、状态与服务端配置同步。
- **GeckoLib**：用于自定义实体与相关表现层能力。

## 当前内容

| 模块 | 当前重点 | 入口页面 |
| --- | --- | --- |
| 库存与占格 | DayZ 风格界面、多格物品、装备决定容量 | [系统总览](/systems) |
| 生存状态 | 体力、流血、骨折、感染、低健康压迫感 | [系统总览](/systems) |
| 配置调优 | 服务端权威配置、背包容量、镜头与探头参数 | [配置说明](/configuration) |
| 联动兼容 | Curios、TaCZ、Thirst 与菜单接管策略 | [兼容与架构](/compatibility) |

## 当前站点定位

这套 Wiki 按当前项目源码和实际配置整理，优先记录已经做进项目里的内容。后面有新增系统，再继续补页面。
