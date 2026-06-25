# Detetive Lógico

https://wilsondebus.github.io/Jogo-Detetive-TecnicasDeducao/

## Sobre o projeto

O **Detetive Lógico** é um jogo web desenvolvido como Produto de Aprendizagem da disciplina de **Lógica para Computação**. O objetivo do projeto é aplicar, de forma prática e interativa, conteúdos relacionados à lógica proposicional e às técnicas dedutivas estudadas em aula.

No jogo, o usuário assume o papel de um detetive e precisa resolver mistérios analisando pistas, escolhendo alternativas e utilizando regras de dedução lógica para chegar à conclusão correta.

## Objetivo do jogo

O principal objetivo do jogo é mostrar como a lógica pode ser usada para resolver problemas por meio de raciocínio dedutivo.

Durante os desafios, o jogador precisa interpretar frases condicionais, eliminar hipóteses, analisar consequências e chegar a uma conclusão válida com base nas pistas apresentadas.

## Tecnologias utilizadas

O projeto foi desenvolvido com tecnologias web simples:

* **HTML**: responsável pela estrutura das telas do jogo;
* **CSS**: responsável pela aparência visual, cores, cards, botões e responsividade;
* **JavaScript**: responsável pela lógica do jogo, troca de telas, cronômetro, corações, dicas, escolha de temas, dificuldades e verificação das respostas.

Não foi utilizado nenhum framework ou biblioteca externa, pois a proposta era criar um projeto simples, funcional e compatível com o nível de conhecimento da turma.

## Como o jogo funciona

O jogo possui uma tela inicial com o nome do projeto, informações do jogador e opções para iniciar a investigação ou trocar entre tema claro e escuro.

Após iniciar, o jogador escolhe um tema de mistério. Os temas disponíveis são:

* Assassinato;
* Roubo;
* Desaparecimento.

Depois da escolha do tema, o jogador escolhe uma dificuldade:

### Fácil

A dificuldade fácil trabalha conceitos básicos de lógica, com desafios mais diretos e menos pistas.

Conteúdos abordados:

* Proposições;
* Condicionais;
* Interpretação lógica simples;
* Modus Ponens.

Tempo disponível: **10 minutos**.

### Médio

A dificuldade média apresenta casos mais narrativos, com pistas reveladas aos poucos. O jogador precisa analisar mais de uma informação para chegar à conclusão.

Conteúdos abordados:

* Modus Ponens;
* Modus Tollens;
* Combinação simples de regras;
* Interpretação de hipóteses e consequências.

Tempo disponível: **15 minutos**.

### Difícil

A dificuldade difícil apresenta desafios com mais combinações lógicas. O jogador precisa eliminar hipóteses e cruzar informações para resolver o caso.

Conteúdos abordados:

* Modus Tollens;
* Silogismo Disjuntivo;
* Eliminação de hipóteses;
* Combinação de técnicas dedutivas.

Tempo disponível: **25 minutos**.

## Sistema de pistas

Durante o desafio, as pistas são reveladas aos poucos. Isso foi feito para deixar o jogo mais parecido com uma investigação, em que o jogador vai descobrindo novas informações antes de responder.

Depois que todas as pistas são reveladas, a pergunta final aparece junto com as alternativas.

## Sistema de corações

O jogador começa com **5 corações**.

Os corações podem ser perdidos de duas formas:

* Usando uma dica lógica;
* Não resolvendo o desafio antes do fim do tempo.

Quando os corações chegam a zero, o jogador precisa aguardar uma recarga de **5 minutos** para voltar a jogar com os corações completos.

## Sistema de dicas

O jogo possui um botão de dica. Ao usar uma dica, o jogador perde 1 coração, mas recebe uma orientação sobre qual técnica lógica pode ajudar na resolução do caso.

As dicas não entregam a resposta diretamente. Elas apenas indicam o caminho lógico, por exemplo:

```text
Modus Ponens:
p → q
p
Logo, q
```

ou:

```text
Modus Tollens:
p → q
¬q
Logo, ¬p
```

## Sistema de pontuação

Ao resolver o caso corretamente, o jogador recebe uma pontuação em estrelas de acordo com o tempo utilizado:

* **3 estrelas**: resolveu usando até 50% do tempo total;
* **2 estrelas**: resolveu usando até 75% do tempo total;
* **1 estrela**: resolveu usando mais de 75% do tempo total.

Esse sistema foi criado para incentivar o jogador a resolver os casos de forma rápida e correta.

## Técnicas dedutivas utilizadas

O projeto utiliza técnicas dedutivas trabalhadas na disciplina de Lógica para Computação, como:

### Modus Ponens

Estrutura:

```text
p → q
p
Logo, q
```

Exemplo no jogo:

```text
Se Pedro estava na sala, então Pedro viu o roubo.
Pedro estava na sala.
Logo, Pedro viu o roubo.
```

### Modus Tollens

Estrutura:

```text
p → q
¬q
Logo, ¬p
```

Exemplo no jogo:

```text
Se Lucas fosse o culpado, ele teria usado a porta lateral.
Lucas não aparece na porta lateral.
Logo, Lucas não é o culpado.
```

### Silogismo Disjuntivo

Estrutura:

```text
p ∨ q
¬p
Logo, q
```

Exemplo no jogo:

```text
Ou Ícaro roubou o diamante, ou Júlia roubou, ou Natan roubou.
Ícaro e Júlia foram eliminados pelas pistas.
Logo, Natan roubou o diamante.
```

## Estrutura do projeto

A estrutura principal do projeto é:

```text
Jogo-Detetive-TecnicasDeducao/
├── index.html
├── style.css
├── script.js
├── README.md
└── imagens/
    ├── Imagem-Assassinato.png
    ├── Imagem-Roubo.png
    └── Imagem-Desaparecimento.png
```

## Função de cada arquivo

### index.html

Contém a estrutura das telas do jogo, como:

* Tela inicial;
* Tela de escolha de tema;
* Tela de escolha de dificuldade;
* Tela do desafio;
* Tela de resultado.

### style.css

Contém toda a parte visual do jogo, incluindo:

* Cores;
* Tema claro e escuro;
* Layout dos cards;
* Botões;
* Responsividade;
* Estilo das pistas e alternativas.

### script.js

Contém a lógica principal do jogo, como:

* Troca de telas;
* Escolha de tema;
* Escolha de dificuldade;
* Sorteio dos desafios;
* Cronômetro;
* Sistema de corações;
* Sistema de dicas;
* Revelação das pistas;
* Verificação das respostas;
* Exibição do resultado final.

### imagens/

Pasta onde ficam as imagens utilizadas nos cards dos temas e na interface do jogo.

## Como executar o projeto

Para executar o projeto localmente:

1. Baixe ou clone este repositório;
2. Abra a pasta do projeto;
3. Clique duas vezes no arquivo `index.html`;
4. O jogo será aberto no navegador.

Não é necessário instalar nenhum programa adicional.

## Como acessar pelo GitHub Pages

O projeto foi publicado pelo GitHub Pages e pode ser acessado pelo link abaixo: 

https://wilsondebus.github.io/Jogo-Detetive-TecnicasDeducao/


## Desenvolvedores

Projeto desenvolvido por:

**Wilson Debus** e
**Henrique Hiemer**

## Considerações finais

Este projeto foi criado com o objetivo de aplicar os conteúdos de Lógica para Computação em uma atividade prática. A proposta foi desenvolver um jogo simples, mas que demonstrasse o uso real de técnicas dedutivas na resolução de problemas.

A ideia central do jogo é mostrar que, assim como em uma investigação, a lógica permite analisar informações, eliminar possibilidades incorretas e chegar a conclusões válidas.
