import React from 'react'


export function App() {
  const [state, setState] = React.useState()
  return (
    <div>
      <header>React using systemjs</header>
      <main>ver: {React.version}</main>
    </div>
  )
}

export default App