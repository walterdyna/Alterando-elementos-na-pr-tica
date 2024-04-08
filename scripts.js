

/*
getElementByID ---> Tras UM elemento pelo ID;
getElementByClassName ---> Tras TODOS os elementos com esta CLASSE;
getElementByTagName ---> Tras TODOS os elementos com esta TAG;
getElementByName ---> tras TODOS os elementos com este NAME.

querySelector ---> Tras UM elemento, o PRIMEIRO que encontrar;
querySelectorAll ---> tras TODOS os elementos que encontrar.
*/


const element = document.querySelector("#main-input")


element.placeholder = "Agora e esse texto"

console.log(element.placeholder)



const elementImg = document.querySelector("img")

console.log(elementImg.src)