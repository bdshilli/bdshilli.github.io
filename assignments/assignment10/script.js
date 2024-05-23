const pictures = [
  "birthday.jpg",
  "clown.jpg",
  "rain.jpg",
  "read.jpg",
  "shovel.jpg",
  "work.jpg",
];

const descriptions = [];
descriptions["birthday.jpg"] = "Happy Birthday!!";
descriptions["clown.jpg"] = "Honk Honk";
descriptions["rain.jpg"] = "Glad I Brought My Umbrella";
descriptions["read.jpg"] = "Shhh!! Be Quiet!";
descriptions["shovel.jpg"] = "Don't Break Your Back!";
descriptions["work.jpg"] = "Creating Some Code";

const titles = [];
titles["birthday.jpg"] = "birthday";
titles["clown.jpg"] = "clown";
titles["rain.jpg"] = "rain";
titles["read.jpg"] = "read";
titles["shovel.jpg"] = "shovel";
titles["work.jpg"] = "work";

(() => {
  const pictureDisplay = document.getElementById("picture-display");

  pictures.forEach((picture) => {
    const img = document.createElement("img");
    img.src = "images/" + picture;
    pictureDisplay.appendChild(img);

    img.onclick = () => {
      document.getElementById("headding").innerHTML = titles[picture];
      document.getElementById("text").innerHTML = descriptions[picture];
    };
  });
})();
