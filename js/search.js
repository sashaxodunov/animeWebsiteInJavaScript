const searchInput = document.querySelector('#search-input')
const modalInput = document.querySelector('.search-model')

// search.addEventListener('input', (e) => {
//   console.log(e.target.value)
// })

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    modalInput.style.display = 'none'
    searchInput.value = ''
  }
})
