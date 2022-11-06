import { FC, useState } from 'react';
import BaseButton from '../../../../components/Common/BaseButton';
import BaseCard from '../../../../components/Common/BaseCard';
import BaseTitle from '../../../../components/Common/BaseTitle';
import styles from './section2.module.scss';

const Section2: FC = () => {
  const [active, setActive] = useState();

  return (
    <div id="actividades" className={styles.contentGrid}>
      <BaseTitle fontSize={42} bold center text="NUESTRAS ACTIVIDADES" />
      <div className={styles.gridButton}>
        <BaseButton medium fontSize={22} text="Horarios 2023" />
      </div>

      <div className={styles.section2Container}>
        <BaseCard
          title="Taller Iniciación"
          src="/logo_andino.jpg"
          info="activida dedicadas..."
          active={active}
          setActive={setActive}
        />
        <BaseCard
          title="Escuela Infantil"
          src="/logo_andino.jpg"
          info="activida dedicadas..."
          active={active}
          setActive={setActive}
        />
        <BaseCard
          title="Escuela Juvenil"
          src="/logo_andino.jpg"
          info="activida dedicadas..."
          active={active}
          setActive={setActive}
        />
        <BaseCard
          title="Escuela Adulto"
          src="/logo_andino.jpg"
          info="activida dedicadas..."
          active={active}
          setActive={setActive}
        />
        <BaseCard
          title="Muro Libre "
          src="/logo_andino.jpg"
          info="activida dedicadas..."
          active={active}
          setActive={setActive}
        />
        <BaseCard
          title="Salidas a la Montaña "
          src="/logo_andino.jpg"
          info="activida dedicadas..."
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
};
export default Section2;
