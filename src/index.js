import "./styles.less";
import counts from "./data/counts";
import { ru1, ru2, ru3 } from "../src/data/ru.js";
import backspace from "../assets/backspace.png";
import * as del from "../assets/back.png";
import * as tab from "../assets/download.png";
import * as enter from "../assets/enter-arrow.png";

const app = document.getElementById("app");
const $clr_clickedKeys = "purple",
  $clr_title = "#fff",
  $clr_defaultKeys = "#353C48";
(function() {
  app.innerHTML = template();
  const leftWrapper = document.getElementsByClassName("left-side")[0];
  const rightWrapper = document.getElementsByClassName("right-side")[0];
  const body = document.getElementsByTagName("body")[0];

  for (let key in counts) {
    if (counts[key] instanceof Object) {
      addKeyboardButton(leftWrapper, Object.keys(counts[key])[0]);
    } else {
      addKeyboardButton(leftWrapper, counts[key]);
    }
  }
  addKeyboardButton(leftWrapper, backspace, true);
  addKeyboardButton(leftWrapper, del, true);
  addKeyboardButton(leftWrapper, tab, true, "tab");
  getLiterals(ru1, leftWrapper);
  addKeyboardButton(leftWrapper, enter, true, "enter");
  addKeyboardButton(leftWrapper, "CapsLock", false, "CapsLock");
  getLiterals(ru2, leftWrapper);
  addKeyboardButton(leftWrapper, "Shift");
  getLiterals(ru3, leftWrapper);
  addKeyboardButton(leftWrapper, "Shift");
  addKeyboardButton(leftWrapper, "Ctrl");
  addKeyboardButton(leftWrapper, "Alt");
  addKeyboardButton(leftWrapper, "Space");
  addKeyboardButton(leftWrapper, "Alt", false, "", "AltRight");

  const buttons = [...document.getElementsByTagName("button")];
  buttons.forEach(item => {
    item.removeEventListener("click", tapSympol);
  });
  [...buttons].map(item => {
    item.addEventListener("click", tapSympol);
  });

  body.onkeydown = ev => {
    buttons.forEach(item => {
      if (item.innerText === ev.key) {
        item.style.opacity = 0.8;
        txtarea.value += ev.key;
      }
    });
  };
  body.onkeyup = ev => {
    buttons.forEach(item => {
      if (item.innerText === ev.key) {
        item.style.opacity = 1;
      }
    });
  };
})();

function template() {
  return ` <h1>Keyboard-JS</h1>
      <div class="keyboard-wrapper">
        <div class="left-side"></div>
        <div class="right-side"></div>
      </div>
      <textarea id="txtarea" type="text"></textarea>`;
}

function tapSympol(e) {
  const char = e.currentTarget.innerText;
  const txtarea = document.getElementById("txtarea");
  if (
    char === "CapsLock" ||
    char === "Alt" ||
    char === "Ctrl" ||
    char === "Shift"
  ) {
    return;
  } else {
    txtarea.value += e.currentTarget.innerText;
  }
}

function addTagButton(value, flag, classNameProp, id) {
  let classNameDefault = "btn",
    ID = "";
  if (classNameProp) {
    console.log(classNameProp);
  } else {
    classNameProp = "";
  }
  if (id) {
    ID = id;
  }
  if (flag) {
    return `<button  class=${classNameDefault} id=${ID}>
                <img src=${value} alt="" />
            </button>`;
  } else {
    return `<button class=${classNameDefault} id=${ID} >${value}</button>`;
  }
}

function addKeyboardButton(container, value, flag, classNameProp, id) {
  return (container.innerHTML += addTagButton(value, flag, classNameProp, id));
}

function getLiterals(obj, container) {
  for (let key in obj) {
    addKeyboardButton(container, key);
  }
}

function synchroTapKeyboard(buttons) {
  const body = document.getElementsByTagName("body")[0];
  body.onkeydown = ev => {
    buttons.forEach(item => {
      if (item.innerText === ev.key) {
        item.style.opacity = 0.8;
      }
    });
  };
  body.onkeyup = ev => {
    // console.log(ev);
  };
}
