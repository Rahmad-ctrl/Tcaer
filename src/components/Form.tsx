import React, {useState, FormEvent, ChangeEvent} from 'react'
import '../../scss/style.scss'

interface DataFormulir {
  nama: string,
  kelas: '7' | '8' | '9',
  noUjian: string
}

const Form: React.FC = () => {
  const [dataFormulir, setDataFormulir] = useState<DataFormulir>({
    nama: '',
    kelas: '7',
    noUjian: ''
  })
  
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const { name , value } = e.target
    setDataFormulir({
      ...dataFormulir,
      [name]: value
    })
  }
  
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('data:', dataFormulir)
  }
  
  return(
    <form onSubmit={submit}>
      <fieldset className="nama">
        <legend>Nama</legend>
        <label>
          {' '}
          <input
          type="text"
          name= "nama"
          value= {dataFormulir.nama}
          onChange= {change}
          required
          />
        </label>
      </fieldset>
      <br/>
      <fieldset className="kelas-container">
        <legend>Kelas:</legend>
        <label className="kelas">
         <input
        name= "kelas"
        type= "radio"
        value= "7"
        checked= {dataFormulir.kelas === '7'}
        onChange= {change}
        /> {' '} 7
      </label>
      <br/>
      <label className="kelas">
         <input
        name= "kelas"
        type= "radio"
        value= "8"
        checked= {dataFormulir.kelas === '8'}
        onChange= {change}
        /> {' '} 8
      </label>
      <br/>
      <label className="kelas">
         <input
        name= "kelas"
        type= "radio"
        value= "9"
        checked= {dataFormulir.kelas === '9'}
        onChange= {change}
        /> {' '} 9
      </label>
      <br/>
      </fieldset>
      <fieldset className="no-ujian">
        <legend>No ujian(terserah)</legend>
        <label> {' '} <input
          type="text"
          name= "noUjian"
          value= {dataFormulir.noUjian}
          onChange= {change}
          required
          />
        </label>
      </fieldset>
        <br/>
        <button type="submit">Selanjutnya</button>
    </form>
    
    )
}
export default Form