const inputName = document.getElementById("name-input");
const span = document.getElementById("name-output");

inputName.addEventListener("input", (event) => {
  const inputText = event.target.value.trim();
  if (inputText.length > 0) {
    span.textContent = inputText;
  } else {
    span.textContent = "Anonymous";
  }
});
