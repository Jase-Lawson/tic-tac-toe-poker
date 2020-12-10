const board = [];
let newVal = true;

function play(clickedId,) {

  if (newVal) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    if (!clickedElement.innerText) {
      if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
      } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
      }
    }
    // console.log(board)

    let tL = board[0]
    let tC = board[1]
    let tR = board[2]
    let mL = board[3]
    let mC = board[4]
    let mR = board[5]
    let bL = board[6]
    let bC = board[7]
    let bR = board[8]

    if (tL !== undefined && tL === tC && tL === tR) {
      alert(`${tL} is the Winner!`)
      reset()
      newVal = false;
      return;
    }
    if (tL !== undefined && tL === mL && tL === bL) {
      alert(`${tL} is the Winner!`)
      reset()
      newVal = false;
      return;
    }
    if (bR !== undefined && bR === mR && bR === tR) {
      alert(`${bR} is the Winner!`)
      reset()
      newVal = false;
      return;
    }
    if (bR !== undefined && bR === bC && bR === bL) {
      alert(`${bR} is the Winner!`)
      reset()
      newVal = false;
      return;
    }
    if (mC !== undefined && mC === tC && mC === bC) {
      alert(`${mC} is the Winner!`)
      reset()
      newVal = false;
      return;
    }
    if (mC !== undefined && mC === mL && mC === mR) {
      alert(`${mC} is the Winner!`)
      reset()
      newVal = false;
      return;
    }
    if (mC !== undefined && mC === tL && mC === bR) {
      alert(`${mC} is the Winner!`)
      reset()
      newVal = false;
      return;
    }
    if (mC !== undefined && mC === bL && mC === tR) {
      alert(`${mC} is the Winner!`)
      reset()
      newVal = false;
      return;
    }
    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
      if (board[i] === undefined) {
        boardFull = false;
      }
    }
    if (boardFull === true) {
      alert('The game is a Tie!')
      reset()
      newVal = false;
    }
  }
}

function reset() {
  const newArr = document.querySelectorAll('td')
  for (let i = 0; i < newArr.length; i++) {
    newArr[i].innerText = "";
    board[i] = undefined;
    newVal = true

  }
  console.log(board)

}



// document.getElementById("reset").onclick = function () {
//   document.getElementById(clickedId).innerText = "";

// };