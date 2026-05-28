import { hopeTheme } from "vuepress-theme-hope";
import { zhSidebar } from "./sidebar/zh.mjs";

export const blockzTheme = hopeTheme({
  repo: "yitian77/BlockZ",
  docsDir: "wiki/docs",
  navbar: [
    "/",
    "/getting-started.html",
    "/systems.html",
    "/items.html",
    "/configuration.html",
    "/compatibility.html"
  ],
  sidebar: zhSidebar,
  displayFooter: true,
  footer: "BlockZ Wiki · Built with VuePress Theme Hope",
  breadcrumb: true,
  contributors: false,
  lastUpdated: false,
  editLink: false,
  logo: false,
  pure: true
});
