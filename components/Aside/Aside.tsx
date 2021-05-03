import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Aside.module.css'

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="avatar" width={200} height={80} />
        </div>
        <div className={styles.avatar}>
          <Image src="/avatar.png" alt="avatar" width={150} height={150}/>
        </div>
        <p className={styles.user}>ASHK123</p>
        <p className={styles.level}>Level 1</p> 
        <p className={styles.slogan}>"Work hard on your test"</p>

      </div>
      <div className={styles.button}>
        <button ><span></span>LOG OUT</button>
      </div>
    </aside>
  );
};

export default Aside;