import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'


function Card(props) {
  const {name,id, types ,sprites } = props.objPokemon;
  return (
    <Link href={`pokemon/${name}`}>
      <article className={styles.card}>
        <h3>{name}</h3>
        <h4>{id}</h4>
        <Image src={sprites.front_default} alt="Vercel Logo" width={132} height={96} />
        <div className={styles.card_container_abilities}>
          {types.map((item: any) =>  <p key={item.id} >{item.type.name}</p>)}
        </div>
      </article>   
    </Link>
  );
};

export default Card;