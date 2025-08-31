const search = modal.querySelector('#search-input')

console.log(search)
search.addEventListener('input', (e) => {
  console.log(e.target.value)
})
