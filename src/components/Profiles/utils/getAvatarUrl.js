export default function getAvatarUrl(url) {
  const imgUrl = new URL(url);
  const imgSize = Math.floor(Math.random() * (350 - 250)) + 250;
  imgUrl.pathname = imgSize;
  return imgUrl.href;
}
