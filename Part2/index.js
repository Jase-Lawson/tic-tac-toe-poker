console.log('The House always Wins!')









// const cardId = document.getElementById('cardId');
// const cardColor = document.getElementById('cardColor');

// function setCard() {
//   const card = document.getElementById(idInput.value);
//   card.style.color = colorInput.value;
// }


const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

// console.log(idInput);
// console.log(colorInput);

function setCard() {
  const card = document.getElementById(idInput.value.toLowerCase());
  console.log(card);
  card.style.color = colorInput.value;
}











