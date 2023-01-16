const goToHomepage = async () => {
      document.location.replace('/');
}
  document.querySelector('#homepagebtn').addEventListener('click', goToHomepage);

  const addGameBtn = () => {
      document.location.replace('/addgame')
  }
  document.querySelector('#addgame').addEventListener('click', addGameBtn )

  const createNewPlayerBtn = () => {
    document.location.replace('/addnewplayer')
}
document.querySelector('#createplayer').addEventListener('click', createNewPlayerBtn )