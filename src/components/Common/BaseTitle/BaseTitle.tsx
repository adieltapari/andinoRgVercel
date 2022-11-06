import { FC } from 'react';
import c from 'classnames';
import styles from './BaseTitle.module.scss';

interface Props {
  text: string;
  typeTag?: string;
  fontSize?: number;
  color?: string;
  center?: boolean;
  bold?: boolean;
  regular?: boolean;
}

const BaseTitle: FC<Props> = ({
  text,
  typeTag,
  fontSize,
  color,
  center = false,
  bold = false,
  regular = false,
}) => {
  if (typeTag === 'h1') {
    return (
      <h1
        className={c(
          styles.baseTitle,
          bold && styles.bold,
          regular && styles.regular,
          center && styles.center,
        )}
        style={{ fontSize, color }}
      >
        {text}
      </h1>
    );
  }

  return (
    <h2
      className={c(
        styles.baseTitle,
        bold && styles.bold,
        regular && styles.regular,
        center && styles.center,
      )}
      style={{ fontSize, color }}
    >
      {text}
    </h2>
  );
};

export default BaseTitle;
