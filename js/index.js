const outText = document.querySelectorAll('.money__receive-item-number');
const range = document.querySelectorAll('.money__receive-item-polzunok');

range[0].addEventListener('input', () =>{
  outText[0].innerHTML = range[0].value + " руб.";
})

range[1].addEventListener('input', () =>{
  outText[1].innerHTML = range[1].value + ' дней';
})