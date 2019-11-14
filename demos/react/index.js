const appUrl = `./app`

window.addEventListener('DOMContentLoaded', event => {
  if (typeof appUrl !== 'string') {
    console.warn('no appUrl')
    return
  }
/**@ts-ignore */
  let props = (typeof appProps === 'undefined') ? {} : appProps

  Promise.all(['react', 'react-dom', appUrl].map(x => SystemJS.import(x))).then(modules => {
    const [React, ReactDOM, AppModule] = modules
    const config = SystemJS.getConfig()
    console.info({React: React.version, SystemJS: System.version, TypeScript: config.map.typescript, config,})
    ReactDOM.render(React.createElement(AppModule.default), document.querySelector('#root'))
  })
})
