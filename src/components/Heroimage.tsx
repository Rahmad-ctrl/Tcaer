import '../../scss/style.scss'

let HeroImage = () =>{
  return(
    <div className="hero-image">
        <img src="../../assets/image/jokowi.jpeg" alt="Jokowi lagi makan" className="jokowi"/>
        <img src="../../assets/image/gibran.jpg" alt="Mencari 19jt lapangan kerja"  className="gibran"/>
        <div className="kemendikbud">
          <img src="../../assets/image/kemendikbud.png" alt="NO kemendikbud"/>
        </div>
        <i className="fa-solid fa-xmark"></i>
    </div>
    )
}

export default HeroImage