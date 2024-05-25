let topView = 0;
let currentAlbum = null;

//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
  document.getElementById("main-nav-ul").classList.toggle("hide-small");
  document.getElementById("up").classList.toggle("hidden");
  document.getElementById("down").classList.toggle("hidden");
};

const getAlbums = async () => {
  const json = "https://bdshilli.github.io/projects/part5/album-list.json";
  try {
    const response = await fetch(json);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showTrending = async () => {
  const albums = await getAlbums();

  trendingList = document.getElementById("top-trending-list");
  await getTopView();
};

const getTopView = async () => {
  const albums = await getAlbums();
  albums.forEach((album) => {
    album.song_list.forEach((song) => {
      console.log(song.views);
      if (song.views > topView) {
        topView = song.views;
      }
    });
  });
  console.log(topView);
};

const getAlbum = (album) => {
  const li = document.createElement("li");
  li.classList.add("box");

  //image
  const image = album.image;
  const img = document.createElement("img");
  img.src =
    "file:///C:/Users/bdshi/Desktop/VSCode/bdshilli.github.io/projects/part5/images/albums/" +
    image;
  li.append(img);

  //song info
  const ul = document.createElement("ul");
  li.append(ul);

  //song title
  const songTitle = document.createElement("a");
  title.innerHTML = overlay.classList.add("overlay");
  const h3 = document.createElement("h3");
  h3.innerHTML = flavor.name;
  overlay.append(h3);
  div.append(overlay);

  return div;
};
showTrending();
