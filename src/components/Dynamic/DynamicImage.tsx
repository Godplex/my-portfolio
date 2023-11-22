'use client'
import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface DynamicImageProps extends Omit<ImageProps, "src"> {
  folder: string;
  imageName: string;
}

const DynamicImage: React.FC<DynamicImageProps> = ({ folder, imageName, ...props }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    import(`@/assets/${folder}/${imageName}`)
      .then(mod => {
        setImageSrc(mod.default);
      })
      .catch(error => {
        console.error("Failed to load image:", error);
      });
  }, [folder, imageName]);

  if (!imageSrc) return null;

  return <Image src={imageSrc} {...props} quality={100} alt={props.alt}/>;
};

export default DynamicImage;
