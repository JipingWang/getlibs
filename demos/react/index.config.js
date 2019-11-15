SystemJS.config({
  packages: {
    '.': { defaultExtension: 'tsx', format: 'esm' },
    //'typescript': {  main: 'typescript.min.js', meta: { '*': { exports: 'ts' } } }, //getlibs original
    'typescript': { main: 'typescript.js', meta: { '*': { exports: 'ts' } } }, //unpkg.com typescript no min
  },
  map: {
    //'typescript': 'https://unpkg.com/typescript@3.7.2/lib/typescript.js',
    //'typescript': 'https://cdnjs.cloudflare.com/ajax/libs/typescript/2.6.2', //getlibs original
    'typescript': 'https://cdnjs.cloudflare.com/ajax/libs/typescript/3.7.0-beta',
  },
  typescriptOptions: {
    jsx: 'react'
  },
  transpiler: 'plugin-typescript',
})
