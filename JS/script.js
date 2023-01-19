function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  function showAnswer() {
    let userbox = event.target
    userbox.classList.toggle('active')

    let boxes = document.querySelectorAll('.questionBox')
    for(let i = 0; i < boxes.length; i++) {
      let box = boxes[i]
      if(box != userbox) {
        box.classList.remove('active')
      }
    }
  }

  let boxes = document.querySelectorAll('.questionBox')
  for(let i = 0; i< boxes.length; i++) {
    let box = boxes[i]
    box.addEventListener('click', showAnswer)
  }