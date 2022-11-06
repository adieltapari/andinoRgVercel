import { FC, ReactChild, MouseEventHandler } from 'react';
import c from 'classnames';
import BaseTitle from '../BaseTitle';
import styles from './BaseButton.module.scss';

interface Props {
  text: string;
  type?: string;
  fontSize?: number;
  medium?: boolean;
  orangeButton?: boolean;
  transparentButton?: boolean;
  whiteBlueBorderButton?: boolean;
  suscribeButton?: boolean;
  blueButton?: boolean;
  baseButtonMobile?: boolean;
  icon?: ReactChild;
  colorText?: string;
  regularFont?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BaseButton: FC<Props> = ({
  text,
  type,
  fontSize,
  medium = false,
  orangeButton = false,
  transparentButton = false,
  whiteBlueBorderButton = false,
  blueButton = false,
  suscribeButton = false,
  baseButtonMobile = false,
  icon = null,
  colorText,
  regularFont,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={c(
        styles.container,
        medium && styles.medium,
        orangeButton && styles.orangeButton,
        transparentButton && styles.transparentButton,
        whiteBlueBorderButton && styles.whiteBlueBorderButton,
        blueButton && styles.blueButton,
        suscribeButton && styles.suscribeButton,
        baseButtonMobile && styles.baseButtonMobile,
      )}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      <BaseTitle
        text={text}
        regular={regularFont}
        color={colorText}
        fontSize={fontSize}
        center
        bold
      />
      {icon && <div className={styles.icon}>{icon}</div>}
    </button>
  );
};

export default BaseButton;
