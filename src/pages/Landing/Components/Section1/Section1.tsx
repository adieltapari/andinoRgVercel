import Image from 'next/image';
import { FC } from 'react';
import styles from './section1.module.scss';

const Section1: FC = () => {
  return (
    <div className={styles.contentGrid}>
      <Image src="/prueba_full_hd.jpg" layout="fill" alt="..." />
    </div>
  );
};
export default Section1;
