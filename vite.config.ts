import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import dotenv from "dotenv";

export default defineConfig(({ mode }) => {
  const envFiles = {
    development: ".env.dev",
    mobile: ".env.mobile",
  };

  const envFile = dotenv.config({ path: envFiles[mode] }).parsed;

  console.log(envFile);

  return {
    plugins: [vue(), legacy()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
    },
    // Other Vite configurations...
    define: {
      "process.env": JSON.stringify(envFile),
    },
  };
});