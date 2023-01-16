const addNewPlayerBioData = async (event) => {
  event.preventDefault();
  const newPlayerName = document.querySelector("#newname").value;
  const newPlayerPosition = document.querySelector("#position").value;
  const newPlayerAge = document.querySelector("#age").value;
  const newPlayerHeight = document.querySelector("#height").value;
  const newPlayerWeight = document.querySelector("#weight").value;
  const newPlayerCollege = document.querySelector("#college").value;

  if (
    newPlayerName &&
    newPlayerPosition &&
    newPlayerAge &&
    newPlayerHeight &&
    newPlayerWeight &&
    newPlayerCollege
  ) {
    const response = await fetch("/api/singleplayer", {
      method: "POST",
      body: JSON.stringify({
        newPlayerName,
        newPlayerPosition,
        newPlayerAge,
        newPlayerHeight,
        newPlayerWeight,
        newPlayerCollege,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("There was an error");
    }
  }
};

document
  .querySelector("#addplayerbiodata")
  .addEventListener("click", addNewPlayerBioData);
