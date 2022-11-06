import { FC } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  width?: number;
  height?: number;
}

const BaseImage: FC<Props> = ({ src, width, height }) => {
  return <Image src={src} alt="letstock logo image" width={width} height={height} />;
};

export default BaseImage;
