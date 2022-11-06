import Image from 'next/image';
import { FC } from 'react';
import BaseButton from '../../../../components/Common/BaseButton';
import BaseText from '../../../../components/Common/BaseText/BaseText';
import BaseTitle from '../../../../components/Common/BaseTitle';
import styles from './section3.module.scss';

const Section1: FC = () => {
  return (
    <div id="sobrenosotros" className={styles.containerGrid}>
      <div className={styles.sectionAcontainer}>
        <Image src="/prueba_full_hd.jpg" width={450} height={800} alt="..." />
        <div className={styles.sectionAcolumBcontainer}>
          <Image src="/prueba_full_hd.jpg" width={400} height={400} alt="..." />
          <Image src="/prueba_full_hd.jpg" width={400} height={400} alt="..." />
        </div>
      </div>
      <div className={styles.sectionBcontainer}>
        <BaseTitle text="CONOCENOS" />
        <BaseText
          text=" tienes la posibilidad de llevar el control del inventario de tu empresa a donde quiera que vayas, con nuestra aplicación móvil podrás gestionar tus operaciones desde tu teléfono en cualquier lugar y momento."
          regular
          color="var(--color-text-secondary)"
        />
        <BaseButton medium fontSize={22} text="SOBRE NOSOTROS" />
      </div>
    </div>
  );
};
export default Section1;
