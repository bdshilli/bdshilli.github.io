//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
  document.getElementById("main-nav-ul").classList.toggle("hide-small");
  document.getElementById("up").classList.toggle("hidden");
  document.getElementById("down").classList.toggle("hidden");
};

const getAlbums = async () => {
  const json = "album-list.json";
  try {
    const response = await fetch(json);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showTrending = async () => {
  const albums = await getAlbums();
  console.log(albums);

  /*
  trendingSection = document.getElementById("top-trending-list");
  albums.forEach((album) => {
    trendingSection.append(getAlbum(album));
  }); */
};
/*
const getAlbum = (album) => {
  const li = document.createElement("li");
  div.classList.add("box");

  //image
  const image = album.image;
  const img = document.createElement("img");
  img.src = "https://portiaportia.github.io/json/images/ice-creams/" + image;
  div.append(img);

  //overlay
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  const h3 = document.createElement("h3");
  h3.innerHTML = flavor.name;
  overlay.append(h3);
  div.append(overlay);

  return div;
};
*/
showTrending();
