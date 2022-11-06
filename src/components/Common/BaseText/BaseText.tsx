import { FC, ReactChild } from 'react';
import c from 'classnames';
import styles from './BaseText.module.scss';

interface Props {
  text: string;
  fontSize?: number;
  bold?: boolean;
  regular?: boolean;
  color?: string;
  center?: boolean;
  alignLeft?: boolean;
  alignRight?: boolean;
  icon?: ReactChild;
}

const BaseText: FC<Props> = ({
  text,
  fontSize,
  bold = false,
  regular = false,
  color,
  center = false,
  alignLeft = false,
  alignRight = false,
  icon = null,
}) => {
  return (
    <p
      style={{ fontSize, color }}
      className={c(
        styles.baseText,
        bold && styles.bold,
        regular && styles.regular,
        center && styles.center,
        alignLeft && styles.alignLeft,
        alignRight && styles.alignRight,
        icon && styles.icon,
      )}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      {text}
    </p>
  );
};

export default BaseText;
