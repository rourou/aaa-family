import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer';

import clanInfos from './infos/infosClans.json'

import Head from './components/head'
import Recrue from './components/recrue';
import Armee from './components/armee';
import Asterix from './components/asterix';
import AlphaCorp from './components/alphaCorp';

function App() {
  console.log('clanInfos:', clanInfos)
  return (
    <div className="App">
      <Router>
        <Head />

        <Routes>

          <Route
            path='/recrutement'
            element={<Recrue />}
          />

          <Route
            path='/armee'
            element={<Armee clan={clanInfos.armee} />}
          />

          <Route
            path='/asterix'
            element={<Asterix clan={clanInfos.asterix} />}
          />

          <Route
            path='/alpha-corp'
            element={<AlphaCorp clan={clanInfos.alphacorp} />}
          />

        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App;
