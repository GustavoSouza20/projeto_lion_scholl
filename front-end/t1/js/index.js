'use strict'

import { cursos } from "./cursos.js"

import {getAlunos } from "./api.js"

const criarCard = function(cursos){

    const card = document.createElement('div')
    card.classList.add("card")

    const foto = document.createElement('img')
    foto.classList.add('img-card')
    foto.src = `./${cursos.icone}`

    const sigla = document.createElement('p')
    sigla.classList.add('conteudo-card')
    sigla.textContent = cursos.sigla

    card.append(foto, sigla)

    card.addEventListener('click', () => {
        localStorage.setItem('curso', cursos.sigla)
    })

    
  
    return card
}

const carregarCard = () => {
    const container = document.getElementById('container-card')
    const cards = cursos.map(criarCard)

    container.replaceChildren(...cards)

}

const alunosDs = () => {
    const novaJanela = document.getElementById('container-card')
    novaJanela.onclick = function () {
        window.location.href = "./t2/index.html"
    }
}
carregarCard()
alunosDs()