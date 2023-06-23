const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function funcToDelay(delayVal){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, delayVal);
	})
}
async function showMessage() {
  const message = text.value;
  const delayVal = parseInt(delay.value)*1000;
  await funcToDelay(delayVal);
  output.innerHTML = message;
}

btn.addEventListener("click", showMessage);
