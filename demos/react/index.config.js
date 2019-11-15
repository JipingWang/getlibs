SystemJS.config({
  packages: {
    '.': { defaultExtension: 'tsx', format: 'esm' },
  },
  map: {
    //'typescript': 'https://unpkg.com/typescript',
  },
  typescriptOptions: {
    jsx: 'react'
  },
  transpiler: 'plugin-typescript'
})
