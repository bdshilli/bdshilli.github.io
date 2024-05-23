class Bird {
  constructor(name, sciname, image, range, length, wingspan, call) {
    this.name = name;
    this.sciname = sciname;
    this.image = image;
    this.range = range;
    this.length = length;
    this.wingspan = wingspan;
    this.call = call;
  }
}

const birds = [];
birds.push(
  new Bird(
    "Barred Owl",
    "Strix Varia",
    "barred.jpg",
    "A permanent resident in most forested areas in Canada, parts of some Pacific Northwestern states, and most of the eastern USA.",
    "21 inches",
    "42 inches",
    "Makes loud hooting and caterwalling sounds."
  )
);
birds.push(
  new Bird(
    "Great Horned Owl",
    "Bubo Virginianus",
    "horned.jpg",
    "Permanent resident in much of Alaska, Canada, and the USA.",
    "22 inches",
    "44 inches",
    "Makes a low, gruff, 'hooo, hoo hoo hoo hoooo'."
  )
);
birds.push(
  new Bird(
    "Eastern Screech-Owl",
    "Megascops Asio",
    "screech.jpg",
    "Permanent resident in parts of southeastern Canada, and in much of the eastern USA.",
    "8.5 inches",
    "20 inches",
    "Makes a rather high-pitched, descending whinny call, and a tremulous, vibrating call on the same pitch, 'wududududududududududu'."
  )
);
birds.push(
  new Bird(
    "Barn Owl",
    "Tyto Alba",
    "barn.jpg",
    "In Canada, occurs mostly in southwestern British Columbia. In the USA, they live in many areas but are absent from mountains and cold, northern regions. They range north to Washington, Nebraska, Iowa, and New York.",
    "16 inches",
    "42 inches",
    "A shrill, loud, hissing 'shriiiiii!'"
  )
);

birds.forEach((Bird) => {
  const h2 = document.createElement("h2");
  h2.innerHTML = Bird.name;
  const img = document.createElement("img");
  img.src = "images/" + Bird.image;
  img.style.width = "200px";
  const div = document.createElement("div");
  div.appendChild(h2);
  div.appendChild(img);
  document.getElementById("bird-list").appendChild(div);

  div.onclick = () => {
    const dialog = document.getElementById("dialog");
    dialog.style.display = "block";

    const dialogImage = dialog.querySelector("img");
    dialogImage.src = img.src;
    dialogImage.width = img.width;
    dialogImage.style.padding = "10px";

    const dialogDetails = document.getElementById("dialog-details");
    dialogDetails.innerHTML = "";

    const dname = document.createElement("h3");
    dname.innerHTML = Bird.name;
    dialogDetails.append(dname);

    const dsciname = document.createElement("p");
    dsciname.innerHTML = "<b>Scientific Name</b>: " + Bird.sciname;
    dialogDetails.append(dsciname);

    const drange = document.createElement("p");
    drange.innerHTML = "<b>Range</b>: " + Bird.range;
    dialogDetails.append(drange);

    const dlength = document.createElement("p");
    dlength.innerHTML = "<b>Length</b>: " + Bird.length;
    dialogDetails.append(dlength);

    const dwingspan = document.createElement("p");
    dwingspan.innerHTML = "<b>Wingspan</b>: " + Bird.wingspan;
    dialogDetails.append(dwingspan);

    const dcall = document.createElement("p");
    dcall.innerHTML = "<b>Call</b>: " + Bird.call;
    dialogDetails.append(dcall);
  };
});

document.getElementById("dialog-x").onclick = () => {
  dialog.style.display = "none";
};
