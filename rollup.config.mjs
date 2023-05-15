import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: './src/index.ts',
	output: {
		sourcemap: !production,
		format: 'iife',
		name: 'app',
		file: 'public/bundle/bundle.js',
	},
	plugins: [
		css({ output: 'bundle.css' }),

		resolve(),
		commonjs(),

		typescript(
			{
				tsconfig: "tsconfig.json",
				sourceMap: !production,
				inlineSources: !production
			}
		),

		!production && livereload({ watch: ['public'] }),
	],
	watch: {
		clearScreen: false
	}
};