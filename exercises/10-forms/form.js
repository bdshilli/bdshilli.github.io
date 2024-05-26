getRadioValue = (radioName) => {
  const radios = document.getElementsByName(radioName);

  for (let i in radios) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return "";
};

document.getElementById("form-raccoon").onsubmit = (e) => {
  e.preventDefault(); //dont go to the action page
  const form = e.target;
  const racoonName = form.elements["raccoon-name"].value;
  const demeanor = form.elements["demeanor"].value;
  const termsChecked = form.elements["terms"].checked;
  const termsText = "You agrred to the terms";
  const radio = getRadioValue("size");
  if (!termsChecked) {
    termsText = "You did not agree to the terms";
  }
  console.log(`${racoonName} the raccoon is ${radio} and ${demeanor}`);
};
