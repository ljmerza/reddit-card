import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'main.js',
    output: {
        file: 'reddit-card.js',
        format: 'umd'
    },
    plugins: [
        resolve(),
        commonjs(),
        terser()
    ]
};
