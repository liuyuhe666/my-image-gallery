import { ImageProps } from "@/types";

export function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    // 这种方法在概率分布上足够应对大多数非安全需求
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const cache = new Map<ImageProps, string>();

export default async function getBase64ImageUrl(
  image: ImageProps,
): Promise<string> {
  let url = cache.get(image);
  if (url) {
    return url;
  }
  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.id}.${image.format}`,
  );
  const buffer = await response.arrayBuffer();
  url = `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`;
  cache.set(image, url);
  return url;
}
