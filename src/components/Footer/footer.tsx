import Image from 'next/image';
import { FC } from 'react';
import BaseText from '../Common/BaseText/BaseText';
import styles from './footer.module.scss';

const footer: FC = () => {
  return (
    <div id="ubicacion" className={styles.containerGrid}>
      <BaseText
        text=" tienes la posibilidad de llevar el control del inventario de tu empresa a donde quiera que vayas, con nuestra aplicación móvil podrás gestionar tus operaciones desde tu teléfono en cualquier lugar y momento."
        regular
        color="var(--color-text-secondary)"
      />{' '}
    </div>
  );
};
export default footer;
