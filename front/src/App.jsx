import { useState } from 'react'
import "../css/App.css"
import NavBar from '../components/NavBar'
import Accueil from '../pages/Accueil'
import APropos from '../pages/APropos'
import Projets from '../pages/Projets'
import Footer from '../components/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
        <NavBar />
        <main className='main-content '>
            <Accueil />
            <APropos />
            <Projets />
            <Footer />
        </main>
    </div>

  )
}

export default App

