const temas = [
  {
    id: "assassinato",
    nome: "Assassinato",
    imagem: "imagens/Imagem-Assassinato.png",
    descricao: "Um crime aconteceu e apenas a lógica pode eliminar os suspeitos."
  },
  {
    id: "roubo",
    nome: "Roubo",
    imagem: "imagens/Imagem-Roubo.png",
    descricao: "Um objeto valioso sumiu. Descubra quem está mentindo."
  },
  {
    id: "desaparecimento",
    nome: "Desaparecimento",
    imagem: "imagens/Imagem-Desaparecimento.png",
    descricao: "Uma pessoa desapareceu e cada pista revela uma nova possibilidade."
  },
];

const temposPorDificuldade = {
  facil: 10 * 60,
  medio: 15 * 60,
  dificil: 25 * 60
};

const nomesDificuldade = {
  facil: "Fácil",
  medio: "Médio",
  dificil: "Difícil"
};

const desafios = {
  facil: [
    {
      titulo: "O notebook desaparecido",
      temaBase: "roubo",
      historia: "Um notebook sumiu da sala de informática. O professor pediu que o detetive analise duas informações simples para chegar a uma conclusão válida.",
      pistas: [
        "Se Pedro estava na sala de informática, então Pedro viu o roubo.",
        "Pedro estava na sala de informática."
      ],
      pergunta: "O que podemos concluir logicamente?",
      alternativas: [
        "Pedro roubou o notebook.",
        "Pedro viu o roubo.",
        "Pedro não estava na sala.",
        "Nada pode ser concluído."
      ],
      correta: 1,
      dica: "Modus Ponens: p → q; p; logo, q.",
      tecnica: "Modus Ponens",
      resolucao: "A primeira pista afirma uma condicional: se Pedro estava na sala, então viu o roubo. A segunda pista confirma que Pedro estava na sala. Portanto, pela regra do Modus Ponens, concluímos que Pedro viu o roubo."
    },
    {
      titulo: "O alarme do museu",
      temaBase: "roubo",
      historia: "Uma joia desapareceu do museu durante a noite. O relatório do sistema apresenta uma regra simples sobre o alarme.",
      pistas: [
        "Se o alarme tocou, então havia alguém na sala da joia.",
        "O alarme tocou."
      ],
      pergunta: "Qual conclusão é válida?",
      alternativas: [
        "Havia alguém na sala da joia.",
        "A joia não foi roubada.",
        "O alarme estava desligado.",
        "Não havia ninguém no museu."
      ],
      correta: 0,
      dica: "Use a forma: se p implica q, e p aconteceu, então q pode ser concluído.",
      tecnica: "Modus Ponens",
      resolucao: "Como o alarme tocou e a regra diz que, se o alarme tocou, havia alguém na sala da joia, a conclusão correta é que havia alguém na sala."
    }
  ],

  medio: [
    {
      titulo: "A morte na biblioteca",
      temaBase: "assassinato",
      historia: "Durante uma noite chuvosa, um professor foi encontrado morto na biblioteca da universidade. Três pessoas estavam no prédio: Lucas, Marina e Otávio. O detetive precisa analisar as versões antes de acusar alguém.",
      pistas: [
        "O segurança informou: se Lucas fosse o culpado, ele teria usado a porta lateral da biblioteca.",
        "A câmera da porta lateral funcionou durante toda a noite.",
        "Nenhuma imagem de Lucas aparece na porta lateral.",
        "Marina declarou que só entrou na biblioteca se Otávio tivesse saído antes.",
        "Otávio não saiu antes do horário do crime."
      ],
      pergunta: "Qual conclusão pode ser sustentada pelas pistas?",
      alternativas: [
        "Lucas é obrigatoriamente o culpado.",
        "Lucas não é o culpado, e Marina não entrou na biblioteca.",
        "Marina entrou na biblioteca porque Otávio saiu antes.",
        "Não há nenhuma conclusão lógica possível."
      ],
      correta: 1,
      dica: "Use Modus Tollens. Se p → q e ¬q, então ¬p. Também observe a condicional envolvendo Marina e Otávio.",
      tecnica: "Modus Tollens em duas etapas",
      resolucao: "Se Lucas fosse culpado, apareceria na porta lateral. Como ele não aparece, concluímos que Lucas não é o culpado. Além disso, Marina só entraria se Otávio tivesse saído antes. Como Otávio não saiu antes, conclui-se que Marina não entrou na biblioteca."
    },
    {
      titulo: "O rastro no corredor",
      temaBase: "desaparecimento",
      historia: "Um aluno desapareceu depois de sair de uma sala de estudos. O prédio tinha duas rotas possíveis: corredor norte e escada externa. O detetive precisa interpretar as condições corretamente.",
      pistas: [
        "Se Rafael passou pelo corredor norte, então o sensor de movimento foi ativado.",
        "O sensor de movimento do corredor norte não foi ativado.",
        "Se Rafael não passou pelo corredor norte, então ele usou a escada externa."
      ],
      pergunta: "O que pode ser concluído?",
      alternativas: [
        "Rafael passou pelo corredor norte.",
        "Rafael usou a escada externa.",
        "O sensor foi ativado.",
        "Rafael permaneceu na sala."
      ],
      correta: 1,
      dica: "Primeiro use Modus Tollens para negar a passagem pelo corredor norte. Depois use Modus Ponens.",
      tecnica: "Modus Tollens + Modus Ponens",
      resolucao: "Se Rafael tivesse passado pelo corredor norte, o sensor teria sido ativado. Como o sensor não foi ativado, Rafael não passou pelo corredor norte. A terceira pista afirma que, se ele não passou pelo corredor norte, então usou a escada externa. Logo, ele usou a escada externa."
    }
  ],

  dificil: [
    {
      titulo: "O roubo do diamante",
      temaBase: "roubo",
      historia: "Durante uma exposição, um diamante sumiu de uma sala monitorada. A investigação aponta para três suspeitos: Ícaro, Júlia e Natan. As pistas precisam ser abertas em ordem para evitar uma conclusão precipitada.",
      pistas: [
        "Ou Ícaro roubou o diamante, ou Júlia roubou o diamante, ou Natan roubou o diamante.",
        "Se Ícaro roubou o diamante, então a luva preta teria sido encontrada no cofre.",
        "Nenhuma luva preta foi encontrada no cofre.",
        "Se Júlia roubou o diamante, então ela teria desativado a câmera 2.",
        "A câmera 2 não foi desativada.",
        "Se Ícaro não roubou e Júlia não roubou, então Natan roubou."
      ],
      pergunta: "Quem roubou o diamante?",
      alternativas: [
        "Ícaro.",
        "Júlia.",
        "Natan.",
        "Todos participaram."
      ],
      correta: 2,
      dica: "A solução exige eliminar duas hipóteses usando Modus Tollens e concluir a terceira.",
      tecnica: "Modus Tollens + Silogismo Disjuntivo",
      resolucao: "Se Ícaro tivesse roubado, a luva preta estaria no cofre. Como não estava, Ícaro não roubou. Se Júlia tivesse roubado, a câmera 2 teria sido desativada. Como não foi, Júlia não roubou. Restando a hipótese de Natan, concluímos que Natan roubou o diamante."
    },
    {
      titulo: "O desaparecimento no hotel",
      temaBase: "desaparecimento",
      historia: "Um hóspede desapareceu durante um evento. Ele poderia ter saído pela garagem, pela recepção ou pela área de serviço. As câmeras e sensores ajudam a montar a conclusão.",
      pistas: [
        "Ou Miguel saiu pela garagem, ou pela recepção, ou pela área de serviço.",
        "Se Miguel saiu pela garagem, então a câmera da garagem registrou sua saída.",
        "A câmera da garagem não registrou sua saída.",
        "Se Miguel saiu pela recepção, então o porteiro viu Miguel.",
        "O porteiro não viu Miguel.",
        "Se Miguel não saiu pela garagem e não saiu pela recepção, então saiu pela área de serviço."
      ],
      pergunta: "Por onde Miguel saiu?",
      alternativas: [
        "Pela garagem.",
        "Pela recepção.",
        "Pela área de serviço.",
        "Ele não saiu do hotel."
      ],
      correta: 2,
      dica: "Use duas aplicações de Modus Tollens para eliminar garagem e recepção.",
      tecnica: "Modus Tollens + eliminação de hipóteses",
      resolucao: "Se Miguel tivesse saído pela garagem, a câmera teria registrado. Como não registrou, ele não saiu pela garagem. Se tivesse saído pela recepção, o porteiro teria visto. Como o porteiro não viu, ele não saiu pela recepção. Portanto, pela última pista, saiu pela área de serviço."
    }
  ]
};

let temaSelecionado = null;
let dificuldadeSelecionada = null;
let desafioAtual = null;
let respostaSelecionada = null;

let coracoes = 5;
let tempoTotal = 0;
let tempoRestante = 0;
let intervaloCronometro = null;

let pistasReveladas = 0;

let intervaloRecarga = null;
let segundosRecarga = 0;

document.addEventListener("DOMContentLoaded", () => {
  carregarEstadoSalvo();
  montarTemas();
  atualizarCoracoes();
  atualizarModoTexto();

  document.getElementById("btn-iniciar").addEventListener("click", iniciarFluxo);
  document.getElementById("btn-tema").addEventListener("click", alternarTema);
  document.getElementById("btn-revelar").addEventListener("click", revelarProximaPista);
  document.getElementById("btn-dica").addEventListener("click", usarDica);
  document.getElementById("btn-confirmar").addEventListener("click", confirmarResposta);
});

function mostrarTela(idTela) {
  document.querySelectorAll(".tela").forEach(tela => tela.classList.remove("ativa"));
  document.getElementById(idTela).classList.add("ativa");
}

function voltarMenu() {
  pararCronometro();
  mostrarTela("tela-menu");
  atualizarCoracoes();
}

function confirmarSaida() {
  const sair = confirm("Deseja sair da investigação atual?");
  if (sair) {
    voltarMenu();
  }
}

function iniciarFluxo() {
  if (coracoes <= 0) {
    alert("Você está sem corações. Aguarde a recarga para jogar novamente.");
    return;
  }

  mostrarTela("tela-temas");
}

function alternarTema() {
  document.body.classList.toggle("claro");
  const temaAtual = document.body.classList.contains("claro") ? "claro" : "escuro";
  localStorage.setItem("temaVisual", temaAtual);
  atualizarModoTexto();
}

function atualizarModoTexto() {
  const modo = document.body.classList.contains("claro") ? "Claro" : "Escuro";
  document.getElementById("modo-atual").textContent = modo;
}

function carregarEstadoSalvo() {
  const temaVisual = localStorage.getItem("temaVisual");

  if (temaVisual === "claro") {
    document.body.classList.add("claro");
  }

  const coracoesSalvos = localStorage.getItem("coracoes");
  if (coracoesSalvos !== null) {
    coracoes = Number(coracoesSalvos);
  }

  const fimRecarga = localStorage.getItem("fimRecarga");

  if (fimRecarga) {
    const agora = Date.now();
    const restante = Math.ceil((Number(fimRecarga) - agora) / 1000);

    if (restante > 0 && coracoes <= 0) {
      iniciarRecarga(restante);
    } else if (coracoes <= 0) {
      coracoes = 5;
      salvarCoracoes();
      localStorage.removeItem("fimRecarga");
    }
  }
}

function montarTemas() {
  const lista = document.getElementById("lista-temas");
  lista.innerHTML = "";

  temas.forEach(tema => {
    const botao = document.createElement("button");
    botao.className = "card-tema";
    botao.innerHTML = `
      <img src="${tema.imagem}" alt="Imagem do tema ${tema.nome}">
      <div class="conteudo">
        <p class="etiqueta">Caso</p>
        <h3>${tema.nome}</h3>
        <p>${tema.descricao}</p>
      </div>
    `;

    botao.addEventListener("click", () => selecionarTema(tema));
    lista.appendChild(botao);
  });
}

function selecionarTema(tema) {
  temaSelecionado = tema;
  document.getElementById("tema-escolhido-texto").textContent =
    `Tema escolhido: ${tema.nome}`;
  mostrarTela("tela-dificuldades");
}

function selecionarDificuldade(dificuldade) {
  dificuldadeSelecionada = dificuldade;
  iniciarDesafio();
}

function iniciarDesafio() {
  respostaSelecionada = null;
  pistasReveladas = 0;

  desafioAtual = escolherDesafio(dificuldadeSelecionada, temaSelecionado.id);

  tempoTotal = temposPorDificuldade[dificuldadeSelecionada];
  tempoRestante = tempoTotal;

  document.getElementById("titulo-caso").textContent = desafioAtual.titulo;
  document.getElementById("tema-dificuldade").textContent =
    `${temaSelecionado.nome} • ${nomesDificuldade[dificuldadeSelecionada]}`;

  document.getElementById("imagem-caso").src = temaSelecionado.imagem;
  document.getElementById("imagem-caso").alt = `Imagem do tema ${temaSelecionado.nome}`;

  document.getElementById("historia-caso").textContent = desafioAtual.historia;
  document.getElementById("pergunta-caso").textContent = desafioAtual.pergunta;

  document.getElementById("lista-pistas").innerHTML = "";
  document.getElementById("area-pergunta").classList.add("escondido");
  document.getElementById("caixa-dica").classList.add("escondido");
  document.getElementById("caixa-dica").innerHTML = "";
  document.getElementById("btn-revelar").disabled = false;

  montarAlternativas();
  atualizarProgressoPistas();
  atualizarCoracoes();
  atualizarCronometroNaTela();

  mostrarTela("tela-jogo");
  iniciarCronometro();

  /*
    No fácil, a primeira pista aparece automaticamente.
    No médio/difícil, o aluno precisa revelar as pistas aos poucos.
  */
  if (dificuldadeSelecionada === "facil") {
    revelarProximaPista();
  }
}

function escolherDesafio(dificuldade, temaId) {
  const lista = desafios[dificuldade];
  const desafiosDoTema = lista.filter(desafio => desafio.temaBase === temaId);
  const listaFinal = desafiosDoTema.length > 0 ? desafiosDoTema : lista;
  const indice = Math.floor(Math.random() * listaFinal.length);

  return listaFinal[indice];
}

function revelarProximaPista() {
  if (pistasReveladas >= desafioAtual.pistas.length) {
    return;
  }

  const lista = document.getElementById("lista-pistas");
  const pista = document.createElement("div");
  pista.className = "pista-card";
  pista.innerHTML = `<strong>Pista ${pistasReveladas + 1}:</strong> ${desafioAtual.pistas[pistasReveladas]}`;
  lista.appendChild(pista);

  pistasReveladas++;
  atualizarProgressoPistas();

  if (pistasReveladas >= desafioAtual.pistas.length) {
    document.getElementById("btn-revelar").disabled = true;
    document.getElementById("btn-revelar").textContent = "Todas as pistas foram reveladas";
    document.getElementById("area-pergunta").classList.remove("escondido");
  } else {
    document.getElementById("btn-revelar").textContent = "Revelar próxima pista";
  }
}

function atualizarProgressoPistas() {
  const total = desafioAtual ? desafioAtual.pistas.length : 0;
  const percentual = total === 0 ? 0 : (pistasReveladas / total) * 100;

  document.getElementById("contador-pistas").textContent = `${pistasReveladas}/${total} pistas`;
  document.getElementById("barra-pistas").style.width = `${percentual}%`;
}

function montarAlternativas() {
  const div = document.getElementById("alternativas");
  div.innerHTML = "";

  desafioAtual.alternativas.forEach((alternativa, index) => {
    const botao = document.createElement("button");
    botao.className = "alternativa";
    botao.textContent = `${String.fromCharCode(65 + index)}) ${alternativa}`;

    botao.addEventListener("click", () => {
      respostaSelecionada = index;

      document.querySelectorAll(".alternativa").forEach(btn => {
        btn.classList.remove("selecionada");
      });

      botao.classList.add("selecionada");
    });

    div.appendChild(botao);
  });
}

function iniciarCronometro() {
  pararCronometro();

  intervaloCronometro = setInterval(() => {
    tempoRestante--;
    atualizarCronometroNaTela();

    if (tempoRestante <= 0) {
      pararCronometro();
      perderCoracao();
      mostrarGameOver();
    }
  }, 1000);
}

function pararCronometro() {
  if (intervaloCronometro) {
    clearInterval(intervaloCronometro);
    intervaloCronometro = null;
  }
}

function atualizarCronometroNaTela() {
  document.getElementById("cronometro").textContent = formatarTempo(tempoRestante);
}

function formatarTempo(segundos) {
  segundos = Math.max(0, segundos);
  const min = Math.floor(segundos / 60);
  const seg = segundos % 60;
  return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
}

function atualizarCoracoes() {
  const textoCoracoes = "❤️".repeat(coracoes) + "🤎".repeat(5 - coracoes);

  document.getElementById("coracoes-menu").textContent = textoCoracoes;
  document.getElementById("coracoes-jogo").textContent = textoCoracoes;

  document.getElementById("btn-iniciar").disabled = coracoes <= 0;
  salvarCoracoes();
}

function salvarCoracoes() {
  localStorage.setItem("coracoes", String(coracoes));
}

function perderCoracao() {
  if (coracoes > 0) {
    coracoes--;
    atualizarCoracoes();
  }

  if (coracoes <= 0) {
    iniciarRecarga(5 * 60);
  }
}

function iniciarRecarga(segundos) {
  segundosRecarga = segundos;

  const fimRecarga = Date.now() + segundos * 1000;
  localStorage.setItem("fimRecarga", String(fimRecarga));

  document.getElementById("recarga-info").classList.remove("escondido");

  if (intervaloRecarga) {
    clearInterval(intervaloRecarga);
  }

  atualizarTelaRecarga();

  intervaloRecarga = setInterval(() => {
    segundosRecarga--;
    atualizarTelaRecarga();

    if (segundosRecarga <= 0) {
      clearInterval(intervaloRecarga);
      intervaloRecarga = null;

      coracoes = 5;
      salvarCoracoes();
      localStorage.removeItem("fimRecarga");

      document.getElementById("recarga-info").classList.add("escondido");
      atualizarCoracoes();
    }
  }, 1000);
}

function atualizarTelaRecarga() {
  document.getElementById("tempo-recarga").textContent = formatarTempo(segundosRecarga);
}

function usarDica() {
  if (coracoes <= 0) {
    alert("Você está sem corações para usar dica.");
    return;
  }

  perderCoracao();

  const caixa = document.getElementById("caixa-dica");
  caixa.classList.remove("escondido");
  caixa.innerHTML = `<strong>Dica lógica:</strong><br>${desafioAtual.dica}`;
}

function confirmarResposta() {
  if (pistasReveladas < desafioAtual.pistas.length) {
    alert("Revele todas as pistas antes de responder.");
    return;
  }

  if (respostaSelecionada === null) {
    alert("Escolha uma alternativa antes de confirmar.");
    return;
  }

  pararCronometro();

  if (respostaSelecionada === desafioAtual.correta) {
    mostrarResultadoVitoria();
  } else {
    document.getElementById("resultado-titulo").textContent = "Resposta incorreta";
    document.getElementById("resultado-msg").textContent =
      "A conclusão escolhida não segue corretamente das pistas reveladas.";

    document.getElementById("estrelas").textContent = "☆ ☆ ☆";
    document.getElementById("resultado-resolucao").textContent = desafioAtual.resolucao;
    document.getElementById("resultado-tecnica").textContent = desafioAtual.tecnica;

    mostrarTela("tela-resultado");
  }
}

function mostrarResultadoVitoria() {
  const tempoUsado = tempoTotal - tempoRestante;
  const porcentagemUsada = tempoUsado / tempoTotal;

  let quantidadeEstrelas = 1;

  if (porcentagemUsada <= 0.5) {
    quantidadeEstrelas = 3;
  } else if (porcentagemUsada <= 0.75) {
    quantidadeEstrelas = 2;
  }

  document.getElementById("resultado-titulo").textContent = "Caso resolvido!";
  document.getElementById("resultado-msg").textContent =
    `Você resolveu o mistério em ${formatarTempo(tempoUsado)}.`;

  document.getElementById("estrelas").textContent =
    "⭐".repeat(quantidadeEstrelas) + "☆".repeat(3 - quantidadeEstrelas);

  document.getElementById("resultado-resolucao").textContent = desafioAtual.resolucao;
  document.getElementById("resultado-tecnica").textContent = desafioAtual.tecnica;

  mostrarTela("tela-resultado");
}

function mostrarGameOver() {
  document.getElementById("resultado-titulo").textContent = "Game Over";
  document.getElementById("resultado-msg").textContent =
    "O tempo acabou antes da conclusão do caso. Você perdeu 1 coração.";

  document.getElementById("estrelas").textContent = "☆ ☆ ☆";
  document.getElementById("resultado-resolucao").textContent =
    "Como o tempo acabou, o caso não foi resolvido.";
  document.getElementById("resultado-tecnica").textContent =
    "Nenhuma técnica foi aplicada até a conclusão final.";

  mostrarTela("tela-resultado");
}
