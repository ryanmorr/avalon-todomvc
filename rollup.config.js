import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

export default {
	input: 'src/index.js',
	output: {
		dir: 'dist',
		file: 'app.js',
		format: 'iife',
		sourceMap: true
	},
	plugins: [
		resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs(),
		minify()
	]
};
