import typescript from "@rollup/plugin-typescript";
import vue from "@vitejs/plugin-vue";
import { readdirSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";

const root = "src";

const alias = readdirSync(resolve(__dirname, root)).reduce((acc, value) => {
  acc[value] = resolve(__dirname, `${root}/${value}`);

  return acc;
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript({
      tsconfig: `./tsconfig.json`,
    }),
  ],
  resolve: {
    alias,
  },
});
