const bgElements = () => {
  const elements = document.querySelectorAll('.set-bg') // Находим элементы с классом .set-bg

  for (let i = 0; i < elements.length; i++) {
    // Проходим по всем найденным элементам
    const src = elements[i].dataset.setbg // Получаем значение атрибута data-setbg

    elements[i].style.backgroundImage = `url(${src})` // Устанавливаем фоновое изображение
  }
}

bgElements()
