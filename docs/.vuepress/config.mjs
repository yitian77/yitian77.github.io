import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { blockzTheme } from "./theme.mjs";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "BlockZ Wiki",
      description: "BlockZ 模组文档站，介绍核心系统、配置、物品与兼容方案。"
    },
    "/en/": {
      lang: "en-US",
      title: "BlockZ Wiki",
      description: "BlockZ documentation site covering core systems, configuration, items, and compatibility."
    }
  },
  bundler: viteBundler(),
  theme: blockzTheme
});
