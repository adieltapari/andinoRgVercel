import { FC } from 'react';
import Image from 'next/image';
import styles from './cardresponsive.module.scss';
import BaseText from '../../../../../components/Common/BaseText/BaseText';

interface Props {
  title: string;
  src: string;
  info: string;
}
const CardResponsive: FC<Props> = ({ title, src, info }) => {
  return (
    <div className={styles.cardStyle}>
      <div className={styles.rowA}>
        <div className={styles.imgContent}>
          <Image src={`${src}`} width={70} height={70} alt={`image/${title}`} />
        </div>
        <div className={styles.titleContent}>
          <BaseText text={title} bold color="var(--color-text-third)" fontSize={16} />
        </div>
      </div>
      <div className={styles.rowB}>
        <BaseText text={info} fontSize={14} color="var(--color-text-secondary)" />
      </div>
    </div>
  );
};

export default CardResponsive;
