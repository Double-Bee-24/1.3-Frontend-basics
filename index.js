const rootElement = document.getElementById("root");

// ------------------------------ Task 1
const div = document.createElement("div");
div.setAttribute("id", "black-square");

rootElement.appendChild(div);

const removeButton_1 = document.createElement("button");
removeButton_1.innerHTML = "Hide";
rootElement.appendChild(removeButton_1);
removeButton_1.addEventListener("click", () => {
  div.style.display === "none"
    ? (div.style.display = "block")
    : (div.style.display = "none");
});

const removeButton_2 = document.createElement("button");
removeButton_2.innerHTML = "Hide";
rootElement.appendChild(removeButton_2);
removeButton_2.addEventListener("click", () => {
  div.remove();
});

// -------------------------------- Task 1, 2
const removeButton_3 = document.createElement("button");
removeButton_3.innerHTML = "Hide";
rootElement.appendChild(removeButton_3);
removeButton_3.addEventListener("click", () => {
  if (div.classList.contains("hidden")) {
    div.classList.remove("hidden");
  } else {
    div.classList.add("hidden");
  }
});

// ------------------------------------ Task 3
const divsContainer = document.createElement("div");
divsContainer.setAttribute("id", "five-squares-container");
rootElement.appendChild(divsContainer);

const removeButton_4 = document.createElement("button");
removeButton_4.innerHTML = "Hide";
removeButton_4.classList.add("remove-button-4");
rootElement.appendChild(removeButton_4);

for (let i = 0; i < 5; i++) {
  const blackDiv = document.createElement("div");
  blackDiv.setAttribute("id", "black-square-five");
  divsContainer.appendChild(blackDiv);

  removeButton_4.addEventListener("click", () => {
    if (divsContainer.classList.contains("hidden")) {
      divsContainer.classList.remove("hidden");
    } else {
      divsContainer.classList.add("hidden");
    }
  });
}

// ----------------------------------------- Task 4
const input = document.createElement("input");
rootElement.appendChild(input);

const removeButton_5 = document.createElement("button");
removeButton_5.innerHTML = "Hide";
removeButton_5.classList.add("remove-button-4");
rootElement.appendChild(removeButton_5);
removeButton_5.addEventListener("click", () => {
  const selector = input.value;
  const elementsToHide = document.querySelectorAll(selector);

  for (const element of elementsToHide) {
    element.classList.add("hidden");
  }
});

// ---------------------------------------- Task 5
const yellowSquare = document.createElement("div");
yellowSquare.classList.add("yellow");
rootElement.appendChild(yellowSquare);

const handleClick = () => {
  alert("Hello");

  yellowSquare.removeEventListener("click", handleClick);
  yellowSquare.addEventListener("click", () => {
    yellowSquare.classList.add("hidden");
  });
};

yellowSquare.addEventListener("click", handleClick);

// ----------------------------------------- Task 6
const redSquare = document.createElement("div");
redSquare.classList.add("red");
rootElement.appendChild(redSquare);

const hoverButton = document.createElement("button");
hoverButton.innerHTML = "Hover on me";
hoverButton.classList.add("remove-button-4");
rootElement.appendChild(hoverButton);

hoverButton.addEventListener("mouseover", () => {
  redSquare.classList.add("hidden");
});
hoverButton.addEventListener("mouseout", () => {
  redSquare.classList.remove("hidden");
});

// ----------------------------------------- Task 7
const greenSquare = document.createElement("div");
greenSquare.classList.add("green");
greenSquare.classList.add("hidden");
rootElement.appendChild(greenSquare);

const input2 = document.createElement("input");
rootElement.appendChild(input2);

input2.addEventListener("focus", () => {
  greenSquare.classList.remove("hidden");
});
input2.addEventListener("input", () => {
  greenSquare.classList.add("hidden");
});

// ----------------------------------------- Task 8, 9
const textArea = document.createElement("textarea");
rootElement.appendChild(textArea);

const addImageButton = document.createElement("button");
addImageButton.innerHTML = "add Image";
addImageButton.classList.add("remove-button-4");
rootElement.appendChild(addImageButton);

addImageButton.addEventListener("click", () => {
  const inputValue = textArea.value;

  const allImages = inputValue.split("\n");

  for (const image of allImages) {
    const img = document.createElement("img");
    img.setAttribute("src", image);
    rootElement.appendChild(img);
  }
});

// --------------------------------------------- Task 10
const coordinatesDiv = document.createElement("div");
rootElement.appendChild(coordinatesDiv);
coordinatesDiv.classList.add("coordinates-block");

const textElement = document.createElement("p");
coordinatesDiv.appendChild(textElement);

document.body.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const text = `X: ${x}\nY: ${y}`;
  textElement.innerHTML = text;
});

// ------------------------------------------------- Task 11
const language = navigator.language || navigator.userLanguage;
const languageTextElement = document.createElement("p");
coordinatesDiv.appendChild(languageTextElement);
languageTextElement.innerHTML = language;

// --------------------------------------------------- Task 12
// navigator.geolocation.getCurrentPosition((position) => {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   const positionTextElement = document.createElement("p");
//   coordinatesDiv.appendChild(positionTextElement);
//   positionTextElement.innerHTML = `Ш:${latitude} Д:${longitude}`;
// });

// --------------------------------------------------- Task 13
const threeDivsContainer = document.createElement("div");
rootElement.appendChild(threeDivsContainer);
threeDivsContainer.classList.add("three-divs-container");

const firstDiv = document.createElement("div");
firstDiv.classList.add("input-div");
firstDiv.setAttribute("contenteditable", "true");
threeDivsContainer.appendChild(firstDiv);

const secondDiv = document.createElement("div");
secondDiv.classList.add("input-div");
secondDiv.setAttribute("contenteditable", "true");
threeDivsContainer.appendChild(secondDiv);

const thirdDiv = document.createElement("div");
thirdDiv.classList.add("input-div");
thirdDiv.setAttribute("contenteditable", "true");
threeDivsContainer.appendChild(thirdDiv);

firstDiv.addEventListener("input", () => {
  localStorage.setItem("firstData", firstDiv.innerHTML);
});
secondDiv.addEventListener("input", () => {
  sessionStorage.setItem("secondData", secondDiv.innerHTML);
});

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

thirdDiv.addEventListener("input", () => {
  setCookie("thirdData", thirdDiv.innerHTML, 7);
});

window.addEventListener("load", (event) => {
  firstDiv.innerHTML = localStorage.getItem("firstData");
  secondDiv.innerHTML = sessionStorage.getItem("secondData");
  thirdDiv.innerHTML = getCookie("thirdData") || "";
});

// ---------------------------------------------------------------- Task 14
const goUpButton = document.createElement("button");
goUpButton.innerHTML = "Go up";
goUpButton.classList.add("go-up-button");
rootElement.appendChild(goUpButton);

goUpButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------------------------------------------------------------- Task 15
const outerDiv = document.createElement("div");
outerDiv.classList.add("outer-div");
rootElement.appendChild(outerDiv);

const innerDiv = document.createElement("div");
innerDiv.classList.add("inner-div");
outerDiv.appendChild(innerDiv);

outerDiv.addEventListener("click", () => {
  alert("outerDiv");
});

innerDiv.addEventListener("click", (event) => {
  alert("innerDiv");

  event.stopPropagation();
});

// -------------------------------------------------------------- Task 16
const makeGrayButton = document.createElement("button");
makeGrayButton.innerHTML = "Make gray";
makeGrayButton.classList.add("go-up-button");
rootElement.appendChild(makeGrayButton);

makeGrayButton.addEventListener("click", () => {
  const graySquare = document.createElement("div");
  graySquare.classList.add("grey");
  rootElement.appendChild(graySquare);
  document.body.style.overflow = "hidden";

  graySquare.addEventListener("click", () => {
    graySquare.classList.add("hidden");
    document.body.style.overflow = "auto";
  });
});

// -------------------------------------------------------------- Task 17
const form = document.createElement("form");
form.classList.add("form");
const inputOfForm = document.createElement("input");
inputOfForm.type = "submit";
inputOfForm.value = "GO";

form.appendChild(inputOfForm);
rootElement.appendChild(form);

form.addEventListener("click", (event) => {
  event.preventDefault();
});
