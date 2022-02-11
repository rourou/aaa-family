import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer';

import clanInfos from './infos/infosClans.json'

import Head from './components/head'
import Recrue from './components/recrue';
import Clan from './components/clan';
import Familly from './components/familly';

function App() {
  console.log('clanInfos:', clanInfos)
  return (
    <div className="App">
      <Router>
        <Head />

        <Routes>

          <Route
            path='/'
            element={<Familly />}
          />

          <Route
            path='/recrutement'
            element={<Recrue />}
          />

          <Route
            path='/armee'
            element={<Clan clan={clanInfos.armee} />}
          />

          <Route
            path='/asterix'
            element={<Clan clan={clanInfos.asterix} />}
          />

          <Route
            path='/alpha-corp'
            element={<Clan clan={clanInfos.alphacorp} />}
          />

        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App;
