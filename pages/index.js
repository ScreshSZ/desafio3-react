import React, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import Card from '../componentes/Card'

const Home = () => {

  const initProfile = {
    name: "Sin Resultado"
  }

  const [aves, setAves] = useState({})

  const darClick = (imagen, titulo)=> {
    setAves({imagen, titulo})
  }
  
  useEffect(() => {
    setAves(initProfile)
  },[])
  
  return (
    
    <div>
      <div className={styles.contenedorFlex}>
        <Card titulo="Loro" parrafo="Los psitácidos (Psittacidae) son una familia de aves psitaciformes llamadas comúnmente loros o papagayos, que incluye a los guacamayos, las cotorras y formas afines de América y África. Se clasifica dentro de la superfamilia Psittacoidea junto a las otras dos familias de loros típicos: Psittrichasiidae y Psittaculidae." imagen='/card1.jpg' darClick={darClick} />

        <img className={styles.imagenCard} src={aves.imagen}></img>
        <h1>{aves.name}</h1>

      </div>
    </div>
  )
}

export default Home