const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

async function showMessage() {
  const message = text.value;
  const delayVal = parseInt(delay.value)*1000;
  await new Promise((resolve) => setTimeout(resolve, delayVal));
  output.innerHTML = message;
}

btn.addEventListener("click", showMessage);
