const { rollup } = require('rollup');
const { uglify } = require('rollup-plugin-uglify');

rollup({
  input: './src/validator.js',
  plugins: [uglify()],
  output: { file: './dist/validator.js', format: 'umd' }
});
