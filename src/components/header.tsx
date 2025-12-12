import { useState } from 'react'
import '../../scss/style.scss'

type Props = {
  jenis: string
}

let Header = ({jenis}:Props) => {
  return(
    <header className="hero">
      <h1>Fake Ujian</h1>
      <p>{jenis}</p>
    </header>
    )
}

export default Header