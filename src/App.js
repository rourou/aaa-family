import React from 'react'
import moment from 'moment';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer';

import { GetAaaFamilly } from './callsApi/aaa-family'

import Head from './components/head'
import Recrue from './components/recrue';
import Familly from './components/familly';

function App() {

  const [state, setState] = React.useState({
    clansInfos: null
  })

  React.useEffect(() => {
    //recuperation du JSON en cahe et demande MAJ si trop vieille
    const recupAAA = async () => {
      let familyTag =
      {
        "armee": "2JQ82LG",
        "asterix": "yv902cu",
        "alpah-corp": "2LYU98Q2"
      }

      const recup = await GetAaaFamilly(familyTag)
      //verif si mise a jour trop vieille
      //recuperation de la différence de jour pour le nombre d'ajout
      const diff_temps = moment(new Date(), "DD-MM-YYYY") - moment(new Date(recup.Maj), "DD-MM-YYYY")
      console.log('moment(new Date(recup.Maj), "DD-MM-YYYY"):', moment(new Date(recup.Maj), "DD-MM-YYYY"))
      const diff_jours = diff_temps / (1000 * 3600 * 24)
      const diff_hours = Math.round(diff_jours * 24)
      console.log(' diff_hours:', diff_hours)
      //envoi du resultat sans MAJ
      setState({ ...state, clansInfos: recup, diff: diff_hours })
      //puis avec si besoin
      if (diff_hours >= 2) {
        const recup2 = await GetAaaFamilly({
          ...familyTag,
          maj: 'true'
        })
        setState({ ...state, clansInfos: recup2 })
      }
    }
    recupAAA()
  }, [state])

  return (
    <div className="App">

      <Head maj={state.diff} />

      {
        state.clansInfos !== null &&

        < Routes >

          <Route
            path='/'
            element={<Familly clans={state.clansInfos} />}
          />

          <Route
            path='/rejoins-nous'
            element={<Recrue />}
          />

        </Routes>
      }

      <Footer />

    </div >
  )
}

export default App;
