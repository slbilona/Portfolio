import { useState } from 'react'
import "../css/App.css"
import NavBar from '../components/NavBar'
import Accueil from '../pages/Accueil'
import APropos from '../pages/APropos'
import Projets from '../pages/Projets'
import Footer from '../components/Footer'
import Contact from '../pages/Contact'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
        <Analytics />
        <NavBar />
        <main className='main-content '>
            <Accueil />
            <APropos />
            <Projets />
            <Contact />
            <Footer />
        </main>
    </div>

  )
}

export default App

