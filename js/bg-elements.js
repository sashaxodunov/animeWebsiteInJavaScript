const bgElements = () => {
  const elements = document.querySelectorAll('.set-bg') // Находим элементы с классом .set-bg

  elements.forEach((elem) => {
    elem.style.backgroundImage = `url(${elem.dataset.setbg})`
  })
}

bgElements()
