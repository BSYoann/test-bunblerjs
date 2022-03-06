import { defineConfig } from "rollup";
import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import removeLogs from "./rollup-plugin-remove-logs/index";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  input: "src/index.ts",
  output: {
    format: "es",
    dir: path.resolve(__dirname, "dist-rollup"),
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
      tsconfigOverride: {
        outDir: "dist-rollup",
      },
    }),
    removeLogs(),
    terser(),
  ],
});
