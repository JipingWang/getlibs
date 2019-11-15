import React from 'react'

interface AppProps {
  id: number;
}
interface State {
  cnt: number;
  msg?: string;
}
export default function App(props: AppProps) {
  const initState: State = {cnt:0}
  const [state, setState] = React.useState<State>(initState)
  console.log(state.msg?.length)
  // return React.createElement('div', {'id': 'id1'},'content')
  return(
    <div>
      <header>Live React App with SystemJS</header>
      <main>ver: {React.version}</main>
    </div>
  )
}
