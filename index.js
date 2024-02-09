const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento web.",
        "Um editor de texto popular.",
        "Um sistema operacional para smartphones.",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o principal objetivo do JavaScript?",
      respostas: [
        "Estilização de páginas web.",
        "Manipulação de dados em bancos de dados.",
        "Adicionar interatividade e dinamismo às páginas web.",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a função do HTML em relação ao JavaScript?",
      respostas: [
        "Determinar o estilo visual das páginas web.",
        "Gerenciar os arquivos do servidor.",
        "Estruturar o conteúdo da página e fornecer um ambiente para o JavaScript interagir.",
      ],
      correta: 2,
    },
    {
      pergunta: "Quais são os tipos de dados primitivos em JavaScript?",
      respostas: [
        "Número, string, array e objeto.",
        "Boolean, número, string e null.",
        "Boolean, undefined, string e objeto.",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um valor constante que não pode ser alterado.",
        "Uma função que retorna um valor específico.",
        "Um local de armazenamento para dados que podem ser alterados durante a execução do programa.",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Qual é a forma correta de comentar uma única linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha.",
        "/* Este é um comentário de uma linha. */",
        "<!-- Este é um comentário de uma linha. -->",
      ],
      correta: 0,
    },
    {
      pergunta:
        "Qual é o operador utilizado para atribuição de valor em JavaScript?",
      respostas: ["+", "-", "="],
      correta: 2,
    },
    {
      pergunta:
        "Qual é a estrutura de controle utilizada para tomar decisões em JavaScript?",
      respostas: ["for", "if...else", "switch"],
      correta: 1,
    },
    {
      pergunta: "O que o método 'document.getElementById()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento HTML com base em seu ID.",
        "Define o estilo de um elemento HTML.",
        "Adiciona um evento de clique a um elemento HTML.",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + '3' em JavaScript?",
      respostas: ["6", "33", "Erro de sintaxe"],
      correta: 1,
    },
  ];
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
       
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
    
  
    
    quiz.appendChild(quizItem)
  }