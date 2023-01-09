const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container-slider')

let activSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1)*40}vh`;

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

document.addEventListener('keydown',
  event => {
    if (event.key === 'ArrowDown') {
      changeSlide('down')
    } else if (event.key === 'ArrowUp') {
      changeSlide('up')
  }
})

function  changeSlide(direction) {
  if (direction === 'up') {
    activSlideIndex++
    if(activSlideIndex === slidesCount) {
      activSlideIndex = 0 }
    } else if (direction === 'down') {
      activSlideIndex--
      if(activSlideIndex < 0) {
        activSlideIndex = slidesCount - 1
      }
  }

  const height = container.clientHeight
  mainSlide.style.transform =`translateY(-${activSlideIndex * height}px)`
  sidebar.style.transform =`translateY(${activSlideIndex * height}px)`
}