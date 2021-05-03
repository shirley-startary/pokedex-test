import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Navbar.module.css'

const Navbar = ({filter}) => {
  const {pathname} = useRouter()

  const handleChange = (e) => {
    filter(e.target.value)
  }
  
  return (
    <nav className={styles.container_menu}>
      <menu className={styles.container_menu}>
        {pathname == "/" ? null : 
          <Link href="/">
              <a className={styles.boton_back}><span>&#8592;</span></a>
          </Link>
        }   
        <div className={styles.search_bar}>
          <a href=""></a>
          <input placeholder="Search" type="text" onChange={handleChange}/> 
          <button className={styles.boton_search}>
          <span className={styles.logo}>
            <Image src="/lupa.svg" alt="lupa" width={102} height={46} />
          </span>
          </button>
        </div>
      </menu>
    </nav>
  );
};

export default Navbar;