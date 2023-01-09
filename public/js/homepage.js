const gamePlayersHandler = async (event) => {
    event.preventDefault();
console.log('hello')
    const response = await fetch(`/api/playerstats/:id`, {
        method: 'POST',
        body: JSON.stringify({ firstname, lastName, points, rebounds, assists, steals, turnovers, blocks, personalFouls }),
    }
    );

    if (response.ok) {
        document.location.replace('/gameplayers')
    } else {
        alert("There was an error")
    }
}

document.querySelector('#gameplayers').addEventListener('click', gamePlayersHandler)