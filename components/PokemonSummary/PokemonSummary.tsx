import React from 'react';
import Image from 'next/image';
import styles from '../../styles/PokemonDetails.module.css';


const ProductPage= (props:any) => {
  const { pokemon } = props 
  return (  
    <div className={styles.container}>
      {pokemon == null ? <p>No encontramos lo que buscabas</p>: <>
      <div className={styles.image_card}>
        <Image src={pokemon.sprites.front_default} alt="image" width={350} height={300}/>
        <div className={styles.thunail}>
          <div>
          <Image src={pokemon.sprites.front_default} alt="image" width={80} height={50}/>
          </div>
          <div>
          <Image src={pokemon.sprites.back_default} alt="image" width={80} height={50}/>          
          </div>
        </div>
      </div>
      <div className={styles.detail}>
        <h1>{pokemon.name} </h1>
        <div className={styles.card_container_abilities}>
          {pokemon.types.map((item: any) =>  <p>{item.type.name}</p>)}
          {/* <p>Grass</p>
          <p>Poison</p> */}
        </div>
        <div>
          <h3>Pokedex Number</h3>
          <p>{pokemon.id}</p>
        </div>
        <div>
          <h3>Height</h3>
          <p>{pokemon.height}</p>
        </div>
        <div>
          <h3>Weight</h3>
          <p>{pokemon.weight}</p>
        </div>
        <div>
          <h3>Shiny</h3>
          <div className={styles.shiny}>
            <div>
              <Image src={pokemon.sprites.front_shiny} alt="image" width={100} height={80}/>
            </div>
            <div>
              <Image src={pokemon.sprites.back_shiny} alt="image" width={100} height={80}/>          
            </div>
          </div>
        </div>
      </div>
       
      </> }
    </div>
   
  )
}

export default ProductPage