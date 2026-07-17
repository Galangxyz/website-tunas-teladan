'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/home/Lightbox';

interface Props {
  src: string;
  alt: string;
  title: string;
  category: string;
  className?: string;
}

export default function ImageLightbox({
  src,
  alt,
  title,
  category,
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className={`${className} cursor-zoom-in`}
        onClick={() => setOpen(true)}
      />

      <Lightbox
        item={
          open
            ? {
                img: src,
                title,
                category,
              }
            : null
        }
        onClose={() => setOpen(false)}
      />
    </>
  );
}