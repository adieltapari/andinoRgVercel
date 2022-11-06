import { FC } from 'react';
import BaseTitle from '../../../../components/Common/BaseTitle';
import styles from './section2.module.scss';

const Section2: FC = () => {
  return (
    <div className={styles.contentGrid}>
      <BaseTitle fontSize={42} bold center text="NUESTRAS ACTIVIDADES" />
    </div>
  );
};
export default Section2;
