const addPlayerStats = async (event) => {
  event.preventDefault();
  const statsPlayerId = document.querySelector("#addplayerid").value;
  const statsFirstName = document.querySelector("#fname").value;
  const statsLastName = document.querySelector("#lname").value;
  const statsGameId = document.querySelector("#gameid").value;
  const statsPtScored = document.querySelector("#ptscored").value;
  const statsRebounds = document.querySelector("#prebounds").value;
  const statsAssists = document.querySelector("#passists").value;
  const statsSteals = document.querySelector("#psteals").value;
  const statsTurnovers = document.querySelector("#pturnovers").value;
  const statsBlocks = document.querySelector("#pblocks").value;
  const statsFouls = document.querySelector("#pfouls").value;

  if (
    statsPlayerId &&
    statsFirstName &&
    statsLastName &&
    statsGameId &&
    statsPtScored &&
    statsRebounds &&
    statsAssists &&
    statsSteals &&
    statsTurnovers &&
    statsBlocks &&
    statsFouls
  ) {
    const response = await fetch("/api/playerstats", {
      method: "POST",
      body: JSON.stringify({
        statsPlayerId,
        statsFirstName,
        statsLastName,
        statsGameId,
        statsPtScored,
        statsRebounds,
        statsAssists,
        statsSteals,
        statsTurnovers,
        statsBlocks,
        statsFouls,
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

document.querySelector("#addplayer").addEventListener("click", addPlayerStats);
