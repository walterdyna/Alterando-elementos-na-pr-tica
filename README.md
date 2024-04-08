Guia Rápido: Manipulação de Elementos HTML com JavaScript
Ao trabalhar com JavaScript para manipulação de elementos HTML, é essencial entender as diferentes formas de selecionar elementos e como interagir com eles. Abaixo, explicamos brevemente algumas das principais funções de seleção e manipulação de elementos:

getElementById:

Seleciona um elemento com base no seu ID único.
Exemplo: const element = document.getElementById("unique-id")
getElementsByClassName:

Seleciona todos os elementos que possuem uma determinada classe.
Retorna uma coleção de elementos.
Exemplo: const elements = document.getElementsByClassName("common-class")
getElementsByTagName:

Seleciona todos os elementos que possuem uma determinada tag HTML.
Retorna uma coleção de elementos.
Exemplo: const elements = document.getElementsByTagName("div")
getElementsByName:

Seleciona todos os elementos que possuem um determinado atributo 'name'.
Retorna uma coleção de elementos.
Exemplo: const elements = document.getElementsByName("username")
querySelector:

Seleciona o primeiro elemento que corresponde a um seletor CSS específico.
Retorna apenas um elemento.
Exemplo: const element = document.querySelector("#main-input")
querySelectorAll:

Seleciona todos os elementos que correspondem a um seletor CSS específico.
Retorna uma NodeList contendo todos os elementos correspondentes.
Exemplo: const elements = document.querySelectorAll(".list-item")