let topView = 0;
let currentAlbum = "";

//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
  document.getElementById("main-nav-ul").classList.toggle("hide-small");
  document.getElementById("up").classList.toggle("hidden");
  document.getElementById("down").classList.toggle("hidden");
};

const getAlbums = async () => {
  const json = "https://bdshilli.github.io/projects/part6/album-list.json";
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
  trendingList.innerHTML = "";
  await getTopView();
  for (let i = topView; i > -1; i--) {
    albums.forEach((album) => {
      album.song_list.forEach((song) => {
        if (song.views == i && count <= 7) {
          trendingList.append(getSong(song, album));
          console.log(song.title);
          count++;
        } else if (count > 7) {
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
  img.src = "images/albums/" + image;
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

  //song album
  const albumLi = document.createElement("li");
  const albumTitle = document.createElement("a");
  albumTitle.innerHTML = album.title;
  albumTitle.href = "album.html";
  albumLi.append(albumTitle);
  ul.append(albumLi);

  //song artist list
  const artistList = document.createElement("ul");
  const artistListLi = document.createElement("li");
  artistList.classList.add("artist-list");
  artistListLi.append(artistList);
  ul.append(artistListLi);
  album.artist_list.forEach((artist) => {
    console.log(artist.name);
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "artist.html";
    a.innerHTML = artist.name;
    li.append(a);
    artistList.append(li);
  });

  imga.onclick = () => {
    currentAlbum = album;
  };

  songTitle.onclick = () => {
    currentAlbum = album;
  };

  return li;
};

const showAlbum = async (currentAlbumTitle) => {
  const albums = await getAlbums();
  let album = albums.find((album) => album.title === currentAlbumTitle);
  currentAlbum = album;

  console.log(album);

  const albumTitle = document.getElementById("album-title");
  const albumImage = document.getElementById("album-image");
  const albumArtists = document.getElementById("artist-list");
  const albumGenre = document.getElementById("album-genre");
  const albumAdvisory = document.getElementById("album-advisory");
  const songList = document.getElementById("song-list");

  albumTitle.innerHTML = album.title;
  albumImage.src = "images/albums/" + album.image;
  albumImage.style.width = "200px";

  albumArtists.innerHTML = "";
  album.artist_list.forEach((artist) => {
    console.log(artist.name);
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = artist.name;
    a.href = "artist.html";
    li.append(a);
    albumArtists.append(li);
  });

  albumGenre.innerHTML = album.genre;
  albumAdvisory.innerHTML = album.advisory;

  songList.innerHTML = "";
  album.song_list.forEach((song) => {
    songList.append(getSongLi(song, album));
  });
};

const getSongLi = (song, album) => {
  const li = document.createElement("li");
  li.classList.add("song");

  const left = document.createElement("ul");
  left.classList.add("left");
  li.append(left);

  const right = document.createElement("div");
  right.classList.add("right");
  li.append(right);

  //song title
  const songTitle = document.createElement("a");
  const songTitleLi = document.createElement("li");
  songTitle.innerHTML = song.title;
  songTitleLi.append(songTitle);
  left.append(songTitleLi);

  //song artist
  const artistList = document.createElement("ul");
  const artistListLi = document.createElement("li");
  artistList.classList.add("artist-list");
  artistListLi.append(artistList);
  left.append(artistListLi);
  album.artist_list.forEach((artist) => {
    console.log(artist.name);
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = artist.name;
    li.append(a);
    artistList.append(li);
  });

  //song duration
  const duration = document.createElement("a");
  duration.innerHTML = song.length;
  right.append(duration);

  //shopping cart
  const cart = document.createElement("a");
  const cartIcon = document.createElement("img");
  cartIcon.src = "images/icons8-add-shopping-cart-30.png";
  cart.append(cartIcon);
  right.append(cart);

  //play button
  const play = document.createElement("a");
  const playIcon = document.createElement("img");
  playIcon.src = "images/icons8-play-30.png";
  play.append(playIcon);
  right.append(play);

  return li;
};

//help from https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
window.addEventListener("unload", () => {
  localStorage.setItem("currentAlbumTitle", JSON.stringify(currentAlbum.title));
});

if (document.URL.includes("index.html")) {
  showTrending();
} else if (document.URL.includes("album.html")) {
  showAlbum(JSON.parse(localStorage.getItem("currentAlbumTitle")) || "");
}
