const appUrl = `./app`

window.addEventListener('DOMContentLoaded', event => {
  if (typeof appUrl !== 'string') {
    console.warn('no appUrl')
    return
  }

  let props = typeof appProps === 'undefined' ? {} : appProps

  Promise.all(['react', 'react-dom', appUrl].map(x => SystemJS.import(x))).then(modules => {
    const [React, ReactDOM, AppModule] = modules
    ReactDOM.render(React.createElement(AppModule.default), document.querySelector('#root'))
  })
})
