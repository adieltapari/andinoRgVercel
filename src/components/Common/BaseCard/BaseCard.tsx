import { FC } from 'react';
import Image from 'next/image';
import BaseText from '../BaseText/BaseText';
import { motion } from 'framer-motion';
import styles from './baseCard.module.scss';

interface Props {
  title: string;
  src: string;
  info: string;
  active: any;
  setActive: any;
}
const BaseCard: FC<Props> = ({ title, src, info, active, setActive }) => {
  return (
    <motion.div
      transition={{ layout: { duration: 0.5 } }}
      layout
      whileHover={{ scale: 1.2 }}
      onClick={() => setActive(info)}
      className={styles.cardsContainer}
    >
      <div className={styles.cardStyle}>
        {active === info ? (
          <div>
            <motion.div
              animate={{
                opacity: 1,
              }}
              transition={{ layout: { duration: 4 } }}
              exit={{ opacity: 0 }}
              className="expand"
            >
              <div className={styles.infoContent}>
                <BaseText text={info} fontSize={16} color="var(--color-text-secondary)" />
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div transition={{ layout: { duration: 0.5 } }}>
            <div className={styles.imgContainer}>
              <Image src={`${src}`} width={70} height={70} alt={`image/${title}`} />
            </div>
            <div className={styles.textContainer}>
              <BaseText
                text={title}
                bold
                color="var(--color-text-third)"
                fontSize={16}
                center
              />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BaseCard;
