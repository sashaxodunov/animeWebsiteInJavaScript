const mainData = () => {
  fetch(
    'https://animewebsiteinjavascript-default-rtdb.firebaseio.com/anime.json'
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
}

mainData()
