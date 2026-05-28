import { defineConfig } from "vitepress";

const zhNav = [
  { text: "首页", link: "/" },
  { text: "快速开始", link: "/getting-started" },
  { text: "系统总览", link: "/systems" },
  { text: "物品与装备", link: "/items" },
  { text: "配置说明", link: "/configuration" },
  { text: "兼容与架构", link: "/compatibility" }
];

const enNav = [
  { text: "Home", link: "/en/" },
  { text: "Getting Started", link: "/en/getting-started" },
  { text: "Systems", link: "/en/systems" },
  { text: "Items", link: "/en/items" },
  { text: "Configuration", link: "/en/configuration" },
  { text: "Compatibility", link: "/en/compatibility" }
];

const zhSidebar = [
  {
    text: "开始",
    items: [
      { text: "首页", link: "/" },
      { text: "快速开始", link: "/getting-started" },
      { text: "运行环境", link: "/getting-started#runtime" },
      { text: "默认按键", link: "/getting-started#keybindings" },
      { text: "第一次进入世界", link: "/getting-started#first-steps" }
    ]
  },
  {
    text: "玩法与系统",
    items: [
      { text: "系统总览", link: "/systems" },
      { text: "物品与装备", link: "/items" },
      { text: "推荐搭配", link: "/getting-started#recommended-mods" }
    ]
  },
  {
    text: "管理与配置",
    items: [
      { text: "管理命令", link: "/getting-started#commands" },
      { text: "命令使用建议", link: "/getting-started#command-notes" },
      { text: "配置说明", link: "/configuration" },
      { text: "配置文件位置", link: "/configuration#file-paths" },
      { text: "主配置文件", link: "/configuration#main-config" },
      { text: "背包与容量", link: "/configuration#storage" },
      { text: "体力与移动", link: "/configuration#stamina" },
      { text: "探头与镜头", link: "/configuration#lean-camera" },
      { text: "第三人称与注视", link: "/configuration#third-person-focus" },
      { text: "视觉效果", link: "/configuration#visual-effects" },
      { text: "占格规则文件", link: "/configuration#grid-rules" },
      { text: "丧尸配置", link: "/configuration#zombie-config" },
      { text: "调参顺序", link: "/configuration#tuning-order" }
    ]
  },
  {
    text: "兼容与联动",
    items: [
      { text: "兼容与架构", link: "/compatibility" }
    ]
  }
];

const enSidebar = [
  {
    text: "Start Here",
    items: [
      { text: "Home", link: "/en/" },
      { text: "Getting Started", link: "/en/getting-started" },
      { text: "Runtime Environment", link: "/en/getting-started#runtime" },
      { text: "Default Keybindings", link: "/en/getting-started#keybindings" },
      { text: "First Steps", link: "/en/getting-started#first-steps" }
    ]
  },
  {
    text: "Gameplay and Systems",
    items: [
      { text: "Systems Overview", link: "/en/systems" },
      { text: "Items and Equipment", link: "/en/items" },
      { text: "Recommended Mods", link: "/en/getting-started#recommended-mods" }
    ]
  },
  {
    text: "Administration and Tuning",
    items: [
      { text: "Admin Commands", link: "/en/getting-started#commands" },
      { text: "Command Notes", link: "/en/getting-started#command-notes" },
      { text: "Configuration", link: "/en/configuration" }
    ]
  },
  {
    text: "Compatibility",
    items: [
      { text: "Compatibility and Architecture", link: "/en/compatibility" }
    ]
  }
];

export default defineConfig({
  title: "BlockZ Wiki",
  description: "BlockZ 模组文档站，介绍核心系统、配置、物品与兼容方案。",
  base: "/",
  cleanUrls: true,
  lastUpdated: false,
  rewrites: {
    "README.md": "index.md",
    "en/README.md": "en/index.md"
  },
  themeConfig: {
    logo: "/blockz-mark.svg",
    siteTitle: "BlockZ Wiki",
    search: {
      provider: "local"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/yitian77/yitian77.github.io" }
    ]
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        editLink: {
          pattern: "https://github.com/yitian77/yitian77.github.io/edit/main/docs/:path",
          text: "在 GitHub 上编辑此页"
        },
        outline: {
          level: [2, 3],
          label: "本页导航"
        },
        docFooter: {
          prev: "上一页",
          next: "下一页"
        },
        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题模式",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
        langMenuLabel: "切换语言",
        footer: {
          message: "BlockZ Wiki · Built with VitePress",
          copyright: "Copyright © 2026 yitian77"
        }
      }
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        editLink: {
          pattern: "https://github.com/yitian77/yitian77.github.io/edit/main/docs/:path",
          text: "Edit this page on GitHub"
        },
        outline: {
          level: [2, 3],
          label: "On this page"
        },
        docFooter: {
          prev: "Previous page",
          next: "Next page"
        },
        returnToTopLabel: "Back to top",
        sidebarMenuLabel: "Menu",
        darkModeSwitchLabel: "Appearance",
        lightModeSwitchTitle: "Switch to light mode",
        darkModeSwitchTitle: "Switch to dark mode",
        langMenuLabel: "Change language",
        footer: {
          message: "BlockZ Wiki · Built with VitePress",
          copyright: "Copyright © 2026 yitian77"
        }
      }
    }
  }
});
