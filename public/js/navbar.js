const goToHomepage = async () => {
      document.location.replace('/');
}
  document.querySelector('#homepagebtn').addEventListener('click', goToHomepage);

  const addGameBtn = () => {
      document.location.replace('/addgame')
  }
  document.querySelector('#addgame').addEventListener('click', addGameBtn )

  const createNewPlayerBtn = () => {
    document.location.replace('/createnewplayer')
}
document.querySelector('#createplayer').addEventListener('click', createNewPlayerBtn )

const addNewPlayerStatsBtn = () => {
  document.location.replace('/addplayerstats')
}
document.querySelector('#addplayerstatsbtn').addEventListener('click', addNewPlayerStatsBtn )

const allPlayersBtn = () => {
  document.location.replace('/allplayers')
}
document.querySelector('#allplayersbtn').addEventListener('click', allPlayersBtn)