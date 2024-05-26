getRadioValue = (radioName) => {
  const radios = document.getElementsByName(radioName);

  for (let i in radios) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return "";
};

document.getElementById("album-form").onsubmit = (e) => {
  e.preventDefault(); //dont go to the action page
  const form = e.target;
  const albumTitle = form.elements["album-title"].value;
  const artists = form.elements["artists"].value;
  const genre = form.elements["genre"].value;
  const advisory = form.elements["advisory"].value;
  const songs = form.elements["songs"].value;
  const email = form.elements["email"].value;

  document.getElementById("album-results").innerHTML = `
    <p>Album Title: ${albumTitle}</p>
    <p>Artists: ${artists}</p>
    <p>Genre: ${genre}</p>
    <p>Parental Advisory: ${advisory}</p>
    <p>Songs: ${songs}</p>
    <p>Email: ${email}</p>
  `;

  document.getElementById("album-form").reset();
  document.getElementById("result").innerHTML = "Album Submitted!";
  setTimeout(() => {
    document.getElementById("result").innerHTML = "";
  }, 2000);
};
