
const main = document.querySelector('main')
const tower1 = document.createElement('tower')
const tower2 = document.createElement('tower')
const tower3 = document.createElement('tower')
const redDisk = document.createElement('disk')
const greenDisk = document.createElement('disk')
const purpleDisk = document.createElement('disk')
const blueDisk = document.createElement('disk')
let isSelected = false
let selectedDisk, selectedWidth

function reset(){
    tower1.append(redDisk)
    tower1.append(greenDisk)
    tower1.append(purpleDisk)
    tower1.append(blueDisk)
    isSelected = false
}

redDisk.style.backgroundColor = 'red'
redDisk.style.width = '100px'
greenDisk.style.backgroundColor = 'green'
greenDisk.style.width = '80px'
purpleDisk.style.backgroundColor = 'purple'
purpleDisk.style.width = '60px'
blueDisk.style.backgroundColor = 'blue'
blueDisk.style.width = '40px'
tower1.id = '1'
tower2.id = '2'
tower3.is = '3'

reset()

main.append(tower1)
main.append(tower2)
main.append(tower3)

let towers = document.getElementsByTagName('tower')


function playerClick(e){
    if (isSelected === false && e.currentTarget.childElementCount > 0){
        selectedDisk = e.currentTarget.lastElementChild
        selectedWidth = selectedDisk.clientWidth
        
        isSelected = true
     } else if (isSelected === true &&
        e.currentTarget.childElementCount === 0 ||
        e.currentTarget.lastElementChild.clientWidth > selectedWidth){
              e.currentTarget.append(selectedDisk)
              isSelected = false
              if (e.currentTarget.id !== '1' &&
               e.currentTarget.childElementCount === 4){
                   alert('You win!')
               }
    }
}

document.querySelector('button').addEventListener('click', reset)

for (const tower of towers){
    tower.addEventListener('click', playerClick)
}