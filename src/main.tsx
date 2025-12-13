import React from 'react'
import ReactDom from 'react-dom/client'
import Header from './components/header.tsx'
import HeroImage from './components/Heroimage.tsx'

ReactDom.createRoot(document.getElementById('root')!).render(
  <div>
    <HeroImage/>
    <Header jenis="Masukkan data user dulu" />
  </div>
  )