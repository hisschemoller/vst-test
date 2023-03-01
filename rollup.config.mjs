import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'cjs',
	},
  plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		commonjs(),
		nodeResolve({ preferBuiltins: false }),
	],
};
