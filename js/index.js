const GUARDAR_DATO = () => {
  let inputValue = document.getElementById("inputText").value;

  localStorage.setItem("data", inputValue);
};

document.getElementById("buttonText").addEventListener("click", GUARDAR_DATO);
