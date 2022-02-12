import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer';

import clansInfos from './infos/infosClans.json'

import Head from './components/head'
import Recrue from './components/recrue';
import Clan from './components/clan';
import Familly from './components/familly';

function App() {

  return (
    <div className="App">

      <Head />

      <Routes>

        <Route
          path='/'
          element={<Familly clans={clansInfos} />}
        />

        <Route
          path='/rejoins-nous'
          element={<Recrue />}
        />

        <Route
          path='/armee'
          element={<Clan clan={clansInfos.armee} />}
        />

        <Route
          path='/asterix'
          element={<Clan clan={clansInfos.asterix} />}
        />

        <Route
          path='/alpha-corps'
          element={<Clan clan={clansInfos.alphacorp} />}
        />

      </Routes>

      <Footer />
    </div>
  )
}

export default App;
