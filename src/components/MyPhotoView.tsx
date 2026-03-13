'use client'

import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'

import type { ImageProps } from '@/types'

export default function MyPhotoView({ images }: { images: ImageProps[] }) {
  return (
    <PhotoProvider>
      {images.map(item => (
        <PhotoView key={item.id} src={item.url}>
          <Image
            className="mb-5"
            alt={item.id}
            placeholder="blur"
            blurDataURL={item.blurDataUrl}
            src={item.url}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </PhotoView>
      ))}
    </PhotoProvider>
  )
}
