import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import { dirname } from 'path'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const getPluginsConfig = (format = 'esm', prod, mini) => {
  let tsconfigOverride =
    format === 'esm' ? { declaration: true, declarationDir: 'build' } : {}
  const sortie = [
    nodeResolve({
      extensions: extensions,
      jsnext: true,
      browser: true,
      preferBuiltins: false,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        prod ? 'production' : 'development',
      ),
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    typescript({
      exclude: ['**/__tests__/**'],
      tsconfigOverride: { compilerOptions: tsconfigOverride },
    }),
    babel({
      extensions: extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    external(),
  ]
  if (mini) {
    sortie.push(
      terser({
        compress: {
          unused: false,
          collapse_vars: false,
        },
        output: {
          comments: !prod,
        },
      }),
    )
  }
  return sortie
}

const getOutput = (format = 'esm') => {
  const equalOpts = {
    format,
    exports: 'named',
    sourcemap: true,
  }
  if (format === 'esm') {
    return {
      file: pkg.module,
      ...equalOpts,
    }
  }

  // pkg is package.json
  return { file: pkg.main, ...equalOpts }
}

export default CLIArgs => {
  const prod = !!CLIArgs.prod
  const mini = !!CLIArgs.mini
  return [
    {
      input: 'src/index.ts',
      output: getOutput('cjs'),
      plugins: getPluginsConfig('cjs', prod, mini),
    },
    {
      input: 'src/index.ts',
      output: getOutput('esm'),
      plugins: getPluginsConfig('esm', prod, mini),
    },
  ]
}
