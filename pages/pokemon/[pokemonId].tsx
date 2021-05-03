import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/PokemonDetails.module.css';
import Layout from '@components/Layout/Layout';
import PokemonSummary from '@components/PokemonSummary/PokemonSummary';

const ProductPage = () => {
  const { query } = useRouter()
  const [pokemon, setPokemon] = useState()
  
  useEffect(() => {
    if(query.pokemonId){
      window
        .fetch(`https://pokeapi.co/api/v2/pokemon/${query.pokemonId}`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setPokemon(data)
        })
    }
  }, [query.pokemonId])
  return (  
    <Layout>
      <div className={styles.container}>
        {pokemon == null ? null : <>
          <PokemonSummary pokemon={pokemon}/>
        </> }
      </div>
    </Layout>
   
  )
}

export default ProductPage