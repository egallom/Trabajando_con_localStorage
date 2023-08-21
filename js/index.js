const btn = document.getElementById("buttonText");

const GUARDAR_DATO = () => {
  let inputValue = document.getElementById("inputText").value;
  localStorage.setItem("data", inputValue);
};

btn.addEventListener("click", GUARDAR_DATO);
