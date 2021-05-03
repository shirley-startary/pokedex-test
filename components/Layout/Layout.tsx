import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Aside from '@components/Aside/Aside';
import styles from '../../styles/Layout.module.css';

const Layout: React.FC = (props) => {
  const { children, filter }: any = props;
  return (
    <div className={styles.container}>
      <Aside />
      <main className={styles.main}>
        <Navbar filter={filter}/>    
        {children}
      </main>
    </div>
  );
};

export default Layout;