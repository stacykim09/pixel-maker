//window.onload = function(){
    // Your Code Here
 // }

 let selectedColor = 'black'
 let colors = [
     '#efefef', 
     '#d2d2d2', 
     '#b7b7b7', 
     '#898989', 
     '#696969', 
     '#404040', 
     '#ff714a', 
     '#ffba4a', 
     '#d5ff4a', 
     '#30b383', 
     '#3052b3', 
     '#b33066']

 document.addEventListener('DOMContentLoaded', function(){

    let paint
    let palette = document.querySelector('#palette')
    
    function changeSelected(event){
        selectedColor = event.target.style.backgroundColor
    }

    for (let i=0; i<colors.length; i++) {
        paint = document.createElement('span')
        paint.style.backgroundColor = colors[i]
        paint.addEventListener('click', changeSelected)
        palette.appendChild(paint)
    }

    // select canvas and store for reference in a variable
    // loop 200 times
    // - within loop
    // ---create a span
    // ---give span proper dimensions and border of 1px
    // ---append span to canvas

   let canvas = document.querySelector('#canvas')
    let pixel

    function changeColor(event) {
        event.target.style.backgroundColor = selectedColor;
    }

   for (let i=0; i<2500; i++) {
       pixel = document.createElement('span')
       pixel.classList.add('pixel')
       canvas.appendChild(pixel)

    
       pixel.addEventListener('click', changeColor)

   }

   
})