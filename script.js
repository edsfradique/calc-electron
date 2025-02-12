//h1
const h1 = document.getElementById("h1");
//buttons
const b0 = document.getElementById("b0");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const bPoint = document.getElementById("bPoint");
const bDiv = document.getElementById("bDiv");
const bMult = document.getElementById("bMult");
const bSub = document.getElementById("bSub");
const bSom = document.getElementById("bSom");
const bEqual = document.getElementById("bEqual");
const bErase = document.getElementById("bErase");
const bClear = document.getElementById("bClear");
//logic
let value = "";
let operator = "";

function b0Calc() {
  if (h1.innerText.length === 1 && h1.innerText === "0") {
    h1.innerText = "0";
  } else {
    h1.innerText = h1.innerText + "0";
  }
}

function b1Calc() {
  if (h1.innerText.length === 1 && h1.innerText === "0") {
    h1.innerText = "1";
  } else {
    h1.innerText = h1.innerText + "1";
  }
}

function b2Calc() {
  if (h1.innerText.length === 1 && h1.innerText === "0") {
    h1.innerText = "2";
  } else {
    h1.innerText = h1.innerText + "2";
  }
}
function b3Calc() {
  if (h1.innerText.length === 1 && h1.innerText === "0") {
    h1.innerText = "3";
  } else {
    h1.innerText = h1.innerText + "3";
  }
}
function b4Calc() {
  if (h1.innerText.length === 1 && h1.innerText === "0") {
    h1.innerText = "4";
  } else {
    h1.innerText = h1.innerText + "4";
  }
}
function b5Calc() {
  if (h1.innerText.length === 1 && h1.innerText === "0") {
    h1.innerText = "5";
  } else {
    h1.innerText = h1.innerText + "5";
  }
}
function b6Calc() {
  if (h1.innerText.length === 1 && h1.innerText === "0") {
    h1.innerText = "6";
  } else {
    h1.innerText = h1.innerText + "6";
  }
}
function b7Calc() {
  if (h1.innerText.length === 1 && h1.innerText === "0") {
    h1.innerText = "7";
  } else {
    h1.innerText = h1.innerText + "7";
  }
}
function b8Calc() {
  if (h1.innerText.length === 1 && h1.innerText === "0") {
    h1.innerText = "8";
  } else {
    h1.innerText = h1.innerText + "8";
  }
}
function b9Calc() {
  if (h1.innerText.length === 1 && h1.innerText === "0") {
    h1.innerText = "9";
  } else {
    h1.innerText = h1.innerText + "9";
  }
}

function bPointCalc() {
  if (
    h1.innerText.length === 1 &&
    h1.innerText === "." &&
    h1.innerText[h1.innerText.length - 1] === "."
  ) {
    h1.innerText = ".";
  } else {
    h1.innerText = h1.innerText + ".";
  }
}

function bDivCalc() {
  if (
    h1.innerText.includes("/") ||
    h1.innerText.includes("*") ||
    h1.innerText[h1.innerText.length - 1] === "-" ||
    h1.innerText.includes("+")
  ) {
  } else {
    h1.innerText.length >= 1 && h1.innerText !== "0";
    h1.innerText = h1.innerText + "/";
  }
  value = h1.innerText;
  operator = "/";
}

function bMultCalc() {
  if (
    h1.innerText.includes("/") ||
    h1.innerText.includes("*") ||
    h1.innerText[h1.innerText.length - 1] === "-" ||
    h1.innerText.includes("+")
  ) {
  } else {
    h1.innerText.length >= 1 && h1.innerText !== "0";
    h1.innerText = h1.innerText + "*";
  }
  value = h1.innerText;
  operator = "*";
}

function bSubCalc() {
  if (
    h1.innerText.includes("/") ||
    h1.innerText.includes("*") ||
    h1.innerText[h1.innerText.length - 1] === "-" ||
    h1.innerText.includes("+")
  ) {
  } else {
    h1.innerText.length >= 1 && h1.innerText !== "0";
    h1.innerText = h1.innerText + "-";
  }
  value = h1.innerText;
  operator = "-";
}

function bSomCalc() {
  if (
    h1.innerText.includes("/") ||
    h1.innerText.includes("*") ||
    h1.innerText[h1.innerText.length - 1] === "-" ||
    h1.innerText.includes("+")
  ) {
  } else {
    h1.innerText.length >= 1 && h1.innerText !== "0";
    h1.innerText = h1.innerText + "+";
  }
  value = h1.innerText;
  operator = "+";
}

function bEqualCalc() {
  const arr = [];
  if (operator === "") {
  } else {
    if (operator === "/") {
      for (let i = value.length; i <= h1.innerText.length - 1; i++) {
        arr.push(h1.innerText[i]);
      }
      operator = "";
      h1.innerText = Number(value.slice(0, -1)) / Number(arr.join(""));
    }
    if (operator === "*") {
      for (let i = value.length; i <= h1.innerText.length - 1; i++) {
        arr.push(h1.innerText[i]);
      }
      operator = "";
      h1.innerText = Number(value.slice(0, -1)) * Number(arr.join(""));
    }
    if (operator === "-") {
      for (let i = value.length; i <= h1.innerText.length - 1; i++) {
        arr.push(h1.innerText[i]);
      }
      operator = "";
      h1.innerText = Number(value.slice(0, -1)) - Number(arr.join(""));
    }
    if (operator === "+") {
      for (let i = value.length; i <= h1.innerText.length - 1; i++) {
        arr.push(h1.innerText[i]);
      }
      operator = "";
      h1.innerText = Number(value.slice(0, -1)) + Number(arr.join(""));
    }
  }
}

function bEraseCalc() {
  if (h1.innerText.length === 1) {
    h1.innerText = "0";
  } else {
    h1.innerText = h1.innerText.slice(0, -1);
  }
}

function bClearCalc() {
  h1.innerText = "0";
}

b0.addEventListener("click", b0Calc);
b1.addEventListener("click", b1Calc);
b2.addEventListener("click", b2Calc);
b3.addEventListener("click", b3Calc);
b4.addEventListener("click", b4Calc);
b5.addEventListener("click", b5Calc);
b6.addEventListener("click", b6Calc);
b7.addEventListener("click", b7Calc);
b8.addEventListener("click", b8Calc);
b9.addEventListener("click", b9Calc);
bPoint.addEventListener("click", bPointCalc);
bDiv.addEventListener("click", bDivCalc);
bMult.addEventListener("click", bMultCalc);
bSub.addEventListener("click", bSubCalc);
bSom.addEventListener("click", bSomCalc);
bEqual.addEventListener("click", bEqualCalc);
bErase.addEventListener("click", bEraseCalc);
bClear.addEventListener("click", bClearCalc);

document.addEventListener("keypress", (a) => {
  if (a.key === "0") {
    b0Calc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "1") {
    b1Calc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "2") {
    b2Calc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "3") {
    b3Calc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "4") {
    b4Calc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "5") {
    b5Calc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "6") {
    b6Calc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "7") {
    b7Calc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "8") {
    b8Calc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "9") {
    b9Calc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === ".") {
    bPointCalc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "/") {
    bDivCalc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "*") {
    bMultCalc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "-") {
    bSubCalc();
  }
});

document.addEventListener("keypress", (a) => {
  if (a.key === "+") {
    bSomCalc();
  }
});

document.addEventListener("keydown", (a) => {
  if (a.key === "Backspace" || a.key === "Delete") {
    bEraseCalc();
  }
});
