const leftWrapper = document.getElementsByClassName("left-side")[0];
const rightWrapper = document.getElementsByClassName("right-side")[0];
const txtarea = document.getElementById("txtarea");
const body = document.getElementsByTagName("body")[0];
const $clr_clickedKeys = "purple",
  $clr_title = "#fff",
  $clr_defaultKeys = "#353C48";


function numbs() {
  let arr = [];
  for (let i = 1; i < 10; i++) {
    arr.push(i);
  }
  arr.push(0);
  return arr;
}

function leftSideTemplate() {
  const easyChars = "`-=qwertyuiop[]asdfghjkl;'\\<zxcvbnm,./";
  let easyCharsArr = [];
  for (let i = 0; i < easyChars.length; i++) {
    if (i === 1) {
      easyCharsArr.push(...numbs());
    }
    easyCharsArr.push(easyChars.charAt(i));
  }
  return easyCharsArr
    .map((item, i, arrChars) => {
      if (item === "'") {
        return `<button id="'" class="btn">${arrChars[i]}</button>`;
      } else {
        return `<button id=${item} class="btn">${arrChars[i]}</button>`;
      }
    })
    .join("");
}

function spec() {
  let count = 0;
  const arrImg = [
    "delete.png",
    "back.png",
    "download.png",
    "enter-arrow.png",
    "CapsLock",
    "down-arrow.png",
    "down-arrow.png",
    "Ctrl",
    "ubuntu-logo.png",
    "Alt",
    "Space",
    "Alt Gr",
    "right-arrow.png",
    "right-arrow.png",
    "right-arrow.png",
    "right-arrow.png"
  ];
  let style = (className = "''");
  const url = "assets/";
  return function() {
    if (count === 2) {
      className = "tab";
      style = "width:4.5rem;";
    } else if (count === 3) {
      className = "enter";
      style = "width:5rem";
    } else if (count === 4) {
      let tmp = count;
      count++;
      return `<button id=spec${tmp} class="btn special caps">${arrImg[tmp]}</button>`;
    } else if (count === 5) {
      className = "shift";
      style = "width:5.5rem;";
    } else if (count === 6) {
      className = "shift";
      style = "width:7rem;";
    } else if (count === 7) {
      style = "width:5.5rem;";
      let tmp = count;
      count++;
      return `<button id=spec${tmp} style=${style} class="btn special">${arrImg[tmp]}</button>`;
    } else if (count === 9) {
      style = "width:5rem;";
      let tmp = count;
      count++;
      return `<button id=spec${tmp} style=${style} class="btn special">${arrImg[tmp]}</button>`;
    } else if (count === 10) {
      style = "width:15rem;";
      let tmp = count;
      count++;
      return `<button id=spec${tmp} style=${style} class="btn special"></button>`;
    } else if (count === 11) {
      style = "width:4rem;";
      let tmp = count;
      count++;
      return `<button id=spec${tmp} style=${style} class="btn special">${arrImg[tmp]}</button>`;
    } else if (count === 12) {
      style = "''";
      className = "left-arrow";
      return `<button id=spec${count} style=${style} class="btn special"><img class=${className} src="${url}${
        arrImg[count++]
      }" /></button>`;
    } else if (count === 13) {
      style = "''";
      className = "''";
      return `<button id=spec${count} style=${style} class="btn special"><img class=${className} src="${url}${
        arrImg[count++]
      }" /></button>`;
    } else if (count === 14) {
      style = "''";
      className = "top-arrow";
      return `<button id=spec${count} style=${style} class="btn special"><img class=${className} src="${url}${
        arrImg[count++]
      }" /></button>`;
    } else if (count === 15) {
      style = "''";
      className = "bottom-arrow";
      return `<button id=spec${count} style=${style} class="btn special"><img class=${className} src="${url}${
        arrImg[count++]
      }" /></button>`;
    }
    return `<button id=spec${count} style=${style} class="btn special"><img class=${className} src="${url}${
      arrImg[count++]
    }" /></button>`;
  };
}
const specS = spec();
let id = 0;
leftWrapper.insertAdjacentHTML("beforeend", leftSideTemplate());
document.getElementById("=").insertAdjacentHTML("afterend", specS());
document.getElementById(`spec0`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec1`).insertAdjacentHTML("afterend", specS());
document.getElementById(`]`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec3`).insertAdjacentHTML("afterend", specS());
document.getElementById(`\\`).insertAdjacentHTML("afterend", specS());
document.getElementById(`/`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec6`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec7`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec8`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec9`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec10`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec11`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec12`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec13`).insertAdjacentHTML("afterend", specS());
document.getElementById(`spec14`).insertAdjacentHTML("afterend", specS());

const keys = [...document.getElementsByClassName("btn")];

function keyDownPress(event) {
  console.log(event);
  keys.forEach(item => {
    if (item.innerText.toLowerCase() === event.key.toLowerCase()) {
      if (
        item.innerText.toLowerCase() === "CapsLock".toLocaleLowerCase() ||
        item.innerText.toLowerCase() === "Ctrl".toLowerCase() ||
        item.innerText.toLowerCase() === "Alt Gr".toLowerCase() ||
        item.innerText.toLowerCase() === "Alt".toLowerCase()
      ) {
      } else {
        txtarea.value += event.key;
      }
      // debugger;
      if (event.code.toLowerCase() == "altright") {
        // item.style.opacity = 0.6;
        document.getElementById("spec9").style.opacity = 0.6;
        console.log(true);
      } else {
        item.style.opacity = 0.6;
      }
    }
  });
}

body.onkeydown = keyDownPress;
body.onkeyup = keyUpPress;

function keyUpPress(event) {
  keys.forEach(item => {
    if (item.innerText.toLowerCase() === event.key.toLowerCase()) {
      item.style.opacity = 1;
    }
  });
}

keys.forEach(item => {
  item.onclick = () => {
    if (
      item.innerText.toLowerCase() !== "CapsLock".toLowerCase() &&
      item.innerText.toLowerCase() !== "Ctrl".toLowerCase() &&
      item.innerText.toLowerCase() !== "Alt Gr".toLowerCase() &&
      item.innerText.toLowerCase() !== "Alt".toLowerCase()
    ) {
      txtarea.value += item.innerText;
    }
  };
});
