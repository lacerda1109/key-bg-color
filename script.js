//R -> 82  //G -> 71  //B -> 66  //D -> 68

var DB = document.body

// TECLAS
window.addEventListener('keyup', (tecla) => {
    document.body.style.transition = '1.5s'
    if (tecla.which == 82) {
        DB.style.background = 'rgb(150, 16, 16)'
        DB.style.color = 'white'
    }
    if (tecla.which == 71) {
        DB.style.background = 'rgb(25, 94, 25)'
        DB.style.color = 'white'
    }
    if (tecla.keyCode == 66) {
        DB.style.background = 'rgb(34, 34, 116)'
        DB.style.color = 'white'
    }
    if (tecla.which == 68) {
        DB.style.background = 'white'
        DB.style.color = 'black'
    }
})


// CLICK
document.body.addEventListener('click', (clickDoMouse) => {
    let dvcor1 = document.getElementById('dvcor1')
    let dvcor2 = document.getElementById('dvcor2')
    let dvcor3 = document.getElementById('dvcor3')
    if(clickDoMouse.target == dvcor1){
        DB.style.transition = '1.5s'
        DB.style.background = 'rgb(150, 16, 16)'
        DB.style.color = 'white'
    } else if (clickDoMouse.target == dvcor2) {
        DB.style.transition = '1.5s'
        DB.style.background = 'rgb(25, 94, 25)'
        DB.style.color = 'white'
    } else if (clickDoMouse.target == dvcor3) {
        DB.style.transition = '1.5s'
        DB.style.background = 'rgb(34, 34, 116)'
        DB.style.color = 'white'
    } else {
        DB.style.background = 'white'
        DB.style.color = 'black'
    }
})


//TOGGLE
/*window.addEventListener('keyup', (tecla) => {
    var elem = document.getElementById('body')

    if(tecla.which == 82) {
        elem.classList.toggle('red')
        elem.classList.remove('green', 'blue')
    }
    if (tecla.which == 71) {
        elem.classList.toggle('green')
        elem.classList.remove('red', 'blue')
    }
    if (tecla.which == 66) {
        elem.classList.toggle('blue')
        elem.classList.remove('green', 'red')
    }
})*/