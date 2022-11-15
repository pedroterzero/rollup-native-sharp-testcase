import nativePlugin from "rollup-plugin-natives";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "index.js",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    nodeResolve(),
    nativePlugin({
      copyTo: "dist/libs",
    }),
    commonjs(),
    json(),
  ],
};
