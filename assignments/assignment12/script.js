const getFlavors = async () => {
  const url = "https://portiaportia.github.io/json/ice-creams.json";

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showFlavors = async () => {
  const flavors = await getFlavors();
  console.log(flavors);

  flavorSection = document.getElementById("flavor-section");
  flavors.forEach((flavor) => {
    flavorSection.append(getFlavor(flavor));
  });
};

const getFlavor = (flavor) => {
  const div = document.createElement("div");
  div.classList.add("container");

  //image
  const image = flavor.image;
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

showFlavors();
