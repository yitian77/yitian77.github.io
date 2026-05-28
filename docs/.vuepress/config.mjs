import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { blockzTheme } from "./theme.mjs";

export default defineUserConfig({
  lang: "zh-CN",
  title: "BlockZ Wiki",
  description: "BlockZ 模组文档站，介绍核心系统、配置、物品与兼容方案。",
  base: process.env.GITHUB_ACTIONS ? "/BlockZ/" : "/",
  bundler: viteBundler(),
  theme: blockzTheme
});
