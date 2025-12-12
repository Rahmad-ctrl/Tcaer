import React from 'react'
import ReactDom from 'react-dom/client'
import Header from './components/header.tsx'

ReactDom.createRoot(document.getElementById('root')!).render(
  <div>
    <Header jenis="Masukkan data user" />
  </div>
  )