import Image from 'next/image';
import { FC } from 'react';
import BaseButton from '../../../../components/Common/BaseButton';
import BaseText from '../../../../components/Common/BaseText/BaseText';
import BaseTitle from '../../../../components/Common/BaseTitle';
import styles from './section4.module.scss';

const Section1: FC = () => {
  return (
    <div id="ubicacion" className={styles.containerGrid}>
      <BaseTitle text="UBICACION" center />
      <Image src="/point_example_carg.png" width={1200} height={600} alt="..." />
    </div>
  );
};
export default Section1;
