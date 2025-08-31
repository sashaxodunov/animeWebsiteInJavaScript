const searchInput = modal.querySelector('#search-input')
const modalInput = document.querySelector('.search-model')

// search.addEventListener('input', (e) => {
//   console.log(e.target.value)
// })

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log(e.target.value)
    modalInput.style.display = 'none'
    searchInput.value = ''
  }
})

console.dir(searchInput)
