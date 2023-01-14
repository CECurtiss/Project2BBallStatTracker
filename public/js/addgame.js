const addGameData = async (event) => {
  event.preventDefault();
  const gdate = document.querySelector("#gdate").value
  const season = document.querySelector("#season").value
  const homeTeam = document.querySelector("#hometeam").value
  const awayTeam = document.querySelector("#awayteam").value
  const homeScore = document.querySelector("#homescore").value
  const awayScore = document.querySelector("#awayscore").value
  const fouls = document.querySelector("#fouls").value
  const turnovers = document.querySelector("#turnovers").value
  const rebounds = document.querySelector("#rebounds").value
  const steals = document.querySelector("#steals").value
  const blocks = document.querySelector("#blocks").value
  const assists = document.querySelector("#assists").value

  if (
    gdate &&
    season &&
    homeTeam &&
    awayTeam &&
    homeScore &&
    awayScore &&
    fouls &&
    turnovers &&
    rebounds &&
    steals &&
    blocks &&
    assists
  ) {
    const response = await fetch('/api/gamestats', {
      method: "POST",
      body: JSON.stringify({
        gdate,
        season,
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        fouls,
        turnovers,
        rebounds,
        steals,
        blocks,
        assists,
      }),
      headers: { "Content-Type": "application/json" },
    });
console.log(gdate)
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("There was an error");
    }
  }
};

document.querySelector("#addgamedata").addEventListener("click", addGameData);
