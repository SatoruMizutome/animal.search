export async function fetchImages(breed) {
  const response = await fetch(
    `https://shibe.online/api/${breed}?count=20&urls=true&httpsUrls=true`
  );
  const data = await response.json();
  return data;
}
