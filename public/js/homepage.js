const gamePlayersHandler = async (event) => {
    event.preventDefault();
console.log('hello')
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

document.querySelector('#gameplayers').addEventListener('click', gamePlayersHandler)