const outputElements = document.getElementById('output');
const inputElement = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
let outputMessageElement = document.getElementById('result');

var inputString;
const className = "output-message hide"

function setInputField(e) {
  outputMessageElement.innerHTML = ``;
  let inputstring = document.querySelector("#text-input").value;
  inputString = inputstring;
  outputMessageElement.innerHTML = inputstring ? `<span>${inputstring} is </span>` : outputMessageElement.classList.add('hide');
}

inputElement.addEventListener("change", setInputField);

checkButton.addEventListener("click", plaindormeCheck);

function plaindormeCheck(e) {
  e.preventDefault();
  setInputField();
  outputMessageElement.classList.remove('hide');

  if (!inputElement?.value) {
    alert("Please input a value");
    outputMessageElement.classList.add('hide');

  }
  else {
    const stringArray = [...inputString];
    const newArray = stringArray.filter((ele) => {
      if (![" ", ".", ",", "_", "-", "/", "\\", "(", ")"].includes(ele) === true) {
        return ele;
      }
    });
    const copyNewArray = [...newArray];
    console.log(stringArray, newArray, copyNewArray)
    let reverseArrayString = newArray.reverse().join('').toLowerCase();

    outputMessageElement.innerHTML += (reverseArrayString === copyNewArray.join('').toLowerCase()) ? "a palindrome" : "not a palindrome";
  }
}