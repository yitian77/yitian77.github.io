import { hopeTheme } from "vuepress-theme-hope";
import { enSidebar } from "./sidebar/en.mjs";
import { zhSidebar } from "./sidebar/zh.mjs";

export const blockzTheme = hopeTheme({
  repo: "yitian77/yitian77.github.io",
  docsDir: "docs",
  darkmode: "toggle",
  themeColor: true,
  locales: {
    "/": {
      navbar: [
        "/",
        "/getting-started.html",
        "/systems.html",
        "/items.html",
        "/configuration.html",
        "/compatibility.html"
      ],
      sidebar: zhSidebar,
      navbarLocales: {
        langName: "简体中文",
        selectLangAriaLabel: "选择语言"
      }
    },
    "/en/": {
      navbar: [
        "/en/",
        "/en/getting-started.html",
        "/en/systems.html",
        "/en/items.html",
        "/en/configuration.html",
        "/en/compatibility.html"
      ],
      sidebar: enSidebar,
      navbarLocales: {
        langName: "English",
        selectLangAriaLabel: "Select language"
      }
    }
  },
  displayFooter: true,
  footer: "BlockZ Wiki · Built with VuePress Theme Hope",
  breadcrumb: true,
  contributors: false,
  lastUpdated: false,
  editLink: false,
  logo: false,
  pure: false
});
