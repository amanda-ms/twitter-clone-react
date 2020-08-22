import React from 'react';
import Routes from './routes'
import {Sidebar, Explore} from './components/common'

function App() {
  return (
    <>
      <Sidebar />
      <Routes />
      <Explore />
    </>
  )
}

export default App;
