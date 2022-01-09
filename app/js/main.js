const body = document.querySelector('body')
const blurryImg = document.querySelector('.loading__img')
const counterShow = document.querySelector('.loading__counter')


let index = 1;
let time = 0
let counterOpacity = 100



  // blurryImg.style.opacity = `${index / 100}`

function blurry(number, elem) {

    time = time + 20

    let interval = setInterval(() => {
      if(index === number) {
        clearInterval(interval)
        counterOpacity = 0
      }

      elem.style.opacity = `${index / 100}`
      counterShow.innerHTML = index + "%"

      counterShow.style.opacity = counterOpacity / 100

      blurryImg.style.filter = `blur(${((counterOpacity / 100) * 100)}px)`


      index = index + 1
      counterOpacity--

    }, time)
}

  console.log(blurryImg.style.opacity)

  blurry(100, blurryImg)