import process from 'node:process'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MyPhotoView from '@/components/MyPhotoView'
import cloudinary from '@/lib/cloudinary'
import type { ImageProps } from '@/types'
import getBase64ImageUrl from '@/utils'

export default async function Home() {
  const result = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute()
  const images: ImageProps[] = []
  for (const item of result.resources) {
    images.push({
      id: item.public_id,
      height: item.height,
      width: item.width,
      format: item.format,
      url: item.url,
    })
  }
  const blurImagePromises = images.map((image: ImageProps) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)
  for (let i = 0; i < images.length; i++) {
    images[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main className="mx-auto my-6 max-w-7xl px-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
          <MyPhotoView images={images} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
