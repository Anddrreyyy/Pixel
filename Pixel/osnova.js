// Со страницы сохранить контейнер
let container = document.querySelector(".container")

//Со страницы сохранить палитру
let pallete = document.querySelector(".pallete")

// К контейнеру добавляется клетки с классом бокс
for (let i = 0; i < 100; i += 1) {
 container.innerHTML += '<div class="box"></div>'
}
//Со страницы сохранить бокс
let buttons = document.querySelectorAll(".box")

//Добавить обработку события клик
for (let i = 0; i < buttons.length; i +=1){
buttons[i].addEventListener("click", function(){
  buttons[i].style.backgroundColor= curant
})
}
//Цвета
let colors = ["red","blue","green","Orange","Yellow","Indigo","Purple","Pink","White","Black","Brown","Grey","Dark blue"]
let curant="red"
//на каждом повторении действие произойдет с одним из элементов массива

 for(let i=0;i < colors.length; i += 1){
  pallete.innerHTML += `
<div style="background-color: ${colors[i]}" class="ananas">
   
   </div>`
 }
 let ananas = document.querySelectorAll(".ananas")

//Добавить обработку события клик
for (let i = 0; i < ananas.length; i +=1){
ananas[i].addEventListener("click", function(){
  curant = ananas[i].style.backgroundColor
})
}
// function paint (event){
// event.target.style.backgroundColor= curent
// }
// container.addEventListener("mosedown",function(){
// container.addEventListener("mousemove", paint)
// })
// document.addEventListener("mosedown",function(){
//   container.removeEventListener("mousemove", paint)
// })