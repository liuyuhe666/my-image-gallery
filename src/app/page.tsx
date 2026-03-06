import cloudinary from "@/lib/cloudinary";
import { ImageProps } from "@/types";
import MyPhotoView from "@/components/MyPhotoView";
import getBase64ImageUrl from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Home() {
  const result = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("created_at", "desc")
      .max_results(400)
      .execute();
  const images: ImageProps[] = [];
    for (const item of result.resources) {
      images.push({
        id: item.public_id,
        height: item.height,
        width: item.width,
        format: item.format,
        url: item.url
      });
    }
    const blurImagePromises = images.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
  for (let i = 0; i < images.length; i++) {
    images[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return (
    <div className="min-h-screen font-sans bg-black">
      <Header />
      <main className="mx-auto max-w-490 px-4 pb-4 pt-16">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <MyPhotoView images={images} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
