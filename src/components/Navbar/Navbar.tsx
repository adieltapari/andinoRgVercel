import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import BaseTitle from '../Common/BaseTitle/BaseTitle';
import styles from './navbar.module.scss';

// ITEMS FOR NAVBAR
const NavbarItems = () => {
  return (
    <div className={styles.navbarItems}>
      <Image src="/logo_andino.jpg" width={150} height={150} alt="..." />
      <Link href="/">
        <BaseTitle fontSize={21} text="Inicio" bold center />
      </Link>
      <Link href="/#actividades">
        <BaseTitle fontSize={21} bold center text="Actividades" />
      </Link>
      <Link href="/#sobrenosotros">
        <BaseTitle fontSize={21} bold center text="Sobre Nosotros" />
      </Link>
      <BaseTitle fontSize={21} bold center text="Ubicación" />
      <BaseTitle fontSize={21} bold center text="Contacto" />
    </div>
  );
};

// NAVBAR RESPONSIVE
const Navbar = () => {
  return (
    <div>
      <NavbarItems />
    </div>
  );
};

export default Navbar;
