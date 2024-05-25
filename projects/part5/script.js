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
  let count = 0;

  trendingList = document.getElementById("top-trending-list");
  await getTopView();
  for (let i = topView; i > -1; i--) {
    albums.forEach((album) => {
      album.song_list.forEach((song) => {
        if (song.views == i || count <= 4) {
          trendingList.append(getSong(song, album));
          console.log(song.title);
          count++;
        } else if (count > 4) {
          i = -5;
        }
      });
    });
  }
};

const getTopView = async () => {
  const albums = await getAlbums();
  albums.forEach((album) => {
    album.song_list.forEach((song) => {
      if (song.views > topView) {
        topView = song.views;
      }
    });
  });
};

const getSong = (song, album) => {
  const li = document.createElement("li");
  li.classList.add("box");

  //image
  const image = album.image;
  const img = document.createElement("img");
  const imga = document.createElement("a");
  imga.href = "album.html";
  img.src =
    "file:///C:/Users/bdshi/Desktop/VSCode/bdshilli.github.io/projects/part5/images/albums/" +
    image;
  imga.append(img);
  li.append(imga);

  //song info
  const ul = document.createElement("ul");
  li.append(ul);

  //song title
  const songTitleB = document.createElement("b");
  const songTitle = document.createElement("a");
  const songLi = document.createElement("li");
  songTitle.innerHTML = song.title;
  songTitle.href = "album.html";
  songTitleB.append(songTitle);
  songLi.append(songTitleB);
  ul.append(songLi);

  imga.onclick = () => {
    currentAlbum = album;
  };

  songTitle.onclick = () => {
    currentAlbum = album;
  };

  return li;
};

const showAlbum = (currentAlbum) => {
  const albumTitle = document.getElementById("album-title");
  const albumImage = document.getElementById("album-image");

  albumTitle.innerHTML = currentAlbum.title;
  albumImage.src =
    "file:///C:/Users/bdshi/Desktop/VSCode/bdshilli.github.io/projects/part5/images/albums/" +
    currentAlbum.image;
};

if (document.URL.includes("index.html")) {
  showTrending();
} else if (document.URL.includes("album.html")) {
  showAlbum(currentAlbum);
}

window.addEventListener("unload", () => {
  localStorage.setItem("currentAlbum", currentAlbum);
});

window.addEventListener("load", () => {
  currentAlbum = localStorage.getItem("currentAlbum") || "";
  console.log(currentAlbum);
});
