import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    dir: "lib",
    format: "cjs",
    exports: "default",
  },
  plugins: [typescript(), terser()],
};
