const gamePlayersHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/playerstats`, {
        method: 'POST',
        body: JSON.stringify({ gameId, firstname, lastName, points, rebounds, assists, steals, turnovers, blocks, personalFouls }),
    }
    );

    if (response.ok) {
        document.location.replace('/playerstats')
    } else {
        alert("There was an error")
    }
}

document.querySelectorAll('.gameplayers').addEventListener('click', gamePlayersHandler)