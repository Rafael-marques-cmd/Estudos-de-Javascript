// Selecionar elemento
var title = document.querySelector("#title");

// innerHTMl
title.innerHTML = "Testando o texto alterado!";

// textContent -> mais atualizado, recomendado e performático
var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "Testando o textContent";