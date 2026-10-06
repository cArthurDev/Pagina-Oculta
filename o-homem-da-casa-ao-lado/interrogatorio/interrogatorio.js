if (window.CaseAccess?.allowed) {
const people = [
  ["ricardo-vasconcelos", "ricardo_vasconcelos.png"],
  ["daniel-rocha", "daniel_rocha.png"],
  ["sandra-moura", "sandra_moura.png"],
  ["otavio-brandao", "otavio_brandão.png"],
  ["bianca-alves", "bianca_alves.png"],
  ["marcelo-azevedo", "marcelo_azevedo.png"]
];

const statements = {
  "sandra-moura": "Investigador: A senhora administrava os imóveis relacionados aos casos de Camila, Gabriela e Matheus.\n\nSandra: Sim. Eu já expliquei. Trabalho nessa região há anos.\n\nInvestigador: E tinha acesso a todos eles.\n\nSandra: Tinha. Mas tem uma coisa que vocês não perguntaram.\n\nInvestigador: O quê?\n\nSandra: As chaves.\n\nInvestigador: O que tem elas?\n\nSandra: Nos três imóveis antigos aconteceu a mesma coisa. Pouco antes de começarem aqueles relatos, precisei mandar fazer cópias.\n\nInvestigador: Para quem?\n\nSandra: Prestadores. Manutenção, vistoria… teria que olhar os registros.\n\nInvestigador: E a Casa 118?\n\nSandra: Também teve uma cópia recente.\n\nInvestigador: Quando?\n\nSandra: Cerca de um mês atrês.\n\nInvestigador: Para quem entregou?\n\nSandra: Não entreguei. Deixei na imobiliária para retirada.\n\nInvestigador: Quem retirou?\n\nSandra: É isso que eu não sei. Quando procurei depois… a chave não estava mais lá.",
  "bianca-alves": "Investigador: Bianca, precisamos falar novamente sobre Matheus e Gabriela.\n\nBianca: O que eles têm a ver com a Laura?\n\nInvestigador: Muito mais do que imaginávamos. Você namorou Matheus e conhecia Gabriela.\n\nBianca: Já faz anos.\n\nInvestigador: E não terminou bem. Você descobriu que Matheus estava ficando com Gabriela.\n\nBianca: Sim. Ele me traiu. Eu terminei e acabou.\n\nInvestigador: Meses depois, os dois morreram.\n\nBianca: Você está falando sério? Acha que eu matei os dois por causa de uma traição?\n\nInvestigador: Daniel também contou algumas coisas sobre você.\n\nBianca: Claro que contou. Ele me odeia.\n\nInvestigador: Disse que você era obcecada por crimes. Que mantinha fotografias, notícias e casos de desaparecimento no seu quarto.\n\nBianca: Eu gosto de casos criminais. E daí?\n\nInvestigador: Laura sabia?\n\nBianca: Sabia. Inclusive… foi por minha causa que ela começou a pesquisar outros desaparecimentos.\n\nInvestigador: Explique.\n\nBianca: Quando ela começou a falar da mulher na janela, eu lembrei de um caso antigo que tinha guardado.\n\nInvestigador: Qual?\n\nBianca: O da Camila.\n\nInvestigador: Então foi você quem colocou Laura no caminho das vítimas anteriores?\n\nBianca: Eu só mostrei uma matéria. Laura percebeu as semelhanças. Afinal, ela já conhecia Camila e ligou tudo.\n\nInvestigador: Se não foi você, quem poderia ter feito algo com ela? E com as outras vítimas?\n\nBianca: Olha, aquela corretora bizarra… Ela tem acesso a todas as casas. Ela vivia colocando medo nos adolescentes para não chegarem perto das casas dela. Falava que havia fantasmas e outras bobagens, mas o que ela escondia lá ninguém sabe.\n\nInvestigador: Mais alguma coisa que ainda não sabemos?\n\nBianca: Pouco antes de Laura desaparecer, ela estava investigando um caso. Era sobre uma garota que morreu há alguns anos. Ela tinha certeza de que tinha algo a ver.\n\nInvestigador: Qual caso? Quem é a garota?\n\nBianca: Eu não lembro. Era sobre um suicídio em uma casa abandonada no bairro. Foi bizarro.",
  "marcelo-azevedo": "Investigador: Marcelo, conversamos novamente com as famílias das vítimas anteriores. O senhor fez serviços nas quatro residências.\n\nMarcelo: Sim. Trabalho no bairro há anos.\n\nInvestigador: E nos quatro casos, pouco antes de começarem os relatos.\n\nMarcelo: Coincidência. Eu atendo muita gente.\n\nInvestigador: Laura entrou em contato porque as câmeras da casa dela pararam de funcionar.\n\nMarcelo: Eu lembro. Disse que não tinha agenda.\n\nInvestigador: Descobrimos uma coisa durante a perícia. O problema não estava nas câmeras.\n\nMarcelo: Como assim?\n\nInvestigador: Elas estavam sem energia porque um dos circuitos havia sido desligado manualmente no quadro.\n\nMarcelo: Então alguém mexeu lá.\n\nInvestigador: Quem saberia qual disjuntor desligar?\n\nMarcelo: Qualquer eletricista? ou alguém que tivesse visto o quadro antes.\n\nInvestigador: Como o senhor?\n\nMarcelo: Como eu.\n\nInvestigador: Tem mais alguém?\n\nMarcelo: …Tem.\n\nInvestigador: Quem?\n\nMarcelo: Quando fiz o serviço na casa da Laura, tinha um homem lá. Disse que estava fazendo uma entrega. Ficou esperando perto da entrada enquanto eu trabalhava.\n\nInvestigador: Conhecia ele?\n\nMarcelo: De vista.\n\nInvestigador: Quem era?\n\nMarcelo: Otávio.",
  "ricardo-vasconcelos": "Investigador: No primeiro depoimento, o senhor disse que conhecia Laura apenas de vista.\n\nRicardo: Sim.\n\nInvestigador: Então por que encontramos meses de mensagens entre vocês?\n\nRicardo: …\n\nInvestigador: Encontros escondidos. Fotografias. E mensagens suas dizendo que ninguém poderia descobrir.\n\nRicardo: Eu menti. Nós estávamos nos encontrando.\n\nInvestigador: Por quê esconder?\n\nRicardo: Porque ninguém entenderia. Principalmente depois do que aconteceu com minha ex-esposa.\n\nInvestigador: Em 14 de setembro Laura escreveu: “depois do que vc fez hoje não fala mais comigo”. O que o senhor fez?\n\nRicardo: Eu perdi a cabeça. Segurei ela pelo braço durante uma discussão. Forte demais. Ela ficou assustada.\n\nInvestigador: E nunca mais se encontraram?\n\nRicardo: Não.\n\nInvestigador: Tem certeza?\n\nRicardo: …Eu fui até a casa dela uma vez depois disso.\n\nInvestigador: Quando?\n\nRicardo: No começo de outubro. Ela não estava. Deixei uma coisa na porta e fui embora.\n\nInvestigador: O quê?\n\nRicardo: Flores.\n\nInvestigador: Laura nunca mencionou flores.\n\nRicardo: Então alguém tirou antes que ela visse.",
  "otavio-brandao": "Otávio: Vítima?\n\nInvestigador: Camila Ferreira, Gabriela Nunes e Matheus Lima também compraram com o senhor.\n\nOtávio: Minha loja é pequena. Atendo muita gente do bairro.\n\nInvestigador: E fez entregas na casa dos quatro.\n\nOtávio: Quando pediam, sim.\n\nInvestigador: Laura havia reservado um vestido para o aniversário.\n\nOtávio: Um vermelho. Ela parecia animada.\n\nInvestigador: Vermelho?\n\nOtávio: Sim.\n\nInvestigador: Não mencionamos a cor.\n\nOtávio: Porque fui eu quem separei o vestido. Está na loja até hoje.\n\nInvestigador: Quando foi a última vez que esteve na casa de Laura?\n\nOtávio: Faz algumas semanas. Fiz uma entrega.\n\nInvestigador: Marcelo Azevedo afirma que o viu lá enquanto realizava um serviço elétrico.\n\nOtávio: Então deve ter sido nesse dia.\n\nInvestigador: Viu alguma coisa incomum?\n\nOtávio: Não.\n\nInvestigador: Tem certeza?\n\nOtávio: …Na saída, vi um carro parado do outro lado da rua.\n\nInvestigador: Que carro?\n\nOtávio: Preto. Vidros escuros. Tinha alguém dentro.\n\nInvestigador: Conseguiu ver quem?\n\nOtávio: Não.\n\nInvestigador: Por que se lembra disso semanas depois?\n\nOtávio: Porque quando saí da casa da Laura, o carro saiu atrês de mim.",
  "daniel-rocha": "Investigador: Daniel, sabemos agora que você também conhecia Matheus.\n\nDaniel: Conhecia da escola.\n\nInvestigador: Vocês chegaram a brigar.\n\nDaniel: Isso foi anos atrês.\n\nInvestigador: No dia anterior ao desaparecimento, Laura encontrou você para mostrar as fotografias da Casa 118.\n\nDaniel: Sim.\n\nInvestigador: Você percebeu alguma coisa que não contou antes?\n\nDaniel: …Percebi.\n\nInvestigador: O quê?\n\nDaniel: Em uma das fotos dava pra ver um reflexo no vidro. Laura achou que era da rua.\n\nInvestigador: E você?\n\nDaniel: Parecia uma pessoa.\n\nInvestigador: Onde?\n\nDaniel: Do lado de fora da casa. Perto do portão.\n\nInvestigador: Laura percebeu?\n\nDaniel: Não. Eu aumentei a foto depois que ela foi embora.\n\nInvestigador: Por que não avisou?\n\nDaniel: Eu ia mandar pra ela no dia seguinte. Aí ela desapareceu.\n\nInvestigador: Consegue identificar a pessoa?\n\nDaniel: Não. Mas tinha uma coisa estranha.\n\nInvestigador: O quê?\n\nDaniel: Parecia estar olhando na direção da casa da Laura."
};

const area = document.querySelector('#suspects');
const name = document.querySelector('#name');
const role = document.querySelector('#role');
const testimony = document.querySelector('#testimony');
const replay = document.querySelector('#replay');
let selected;
let typingTimer;



function typeText(text) {
  clearInterval(typingTimer);
  testimony.textContent = '';
  let position = 0;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    testimony.textContent = text;
    return;
  }
  typingTimer = setInterval(() => {
    testimony.textContent += text[position++];
    if (position >= text.length) clearInterval(typingTimer);
  }, 24);
}

function showTestimony(person) {
  selected = person;
  name.textContent = person.nome;
  role.textContent = `${person.papel} · ${person.idade} anos`;
  typeText(person.depoimento || 'Este depoimento ainda está sendo preparado pelo investigador.');
}

Promise.all(people.map(([id, photo]) =>
  fetch(`suspeitos/${id}.json`)
    .then(response => {
      if (!response.ok) throw new Error('Arquivo não encontrado');
      return response.json();
    })
    .then(data => ({ ...data, depoimento: statements[data.id] || data.depoimento, photo }))
)).then(data => {
  area.innerHTML = '';
  data.forEach((person, index) => {
    const button = document.createElement('button');
    button.className = `suspect${index === 0 ? ' active' : ''}`;
    button.type = 'button';
    button.innerHTML = `<span class="suspect-no">${String(index + 1).padStart(2, '0')}</span><span class="portrait"><img src="images/${person.photo}" alt="Foto de ${person.nome}"><span class="portrait-initial">${person.nome[0]}</span></span><span><b>${person.nome}</b><small>Idade: ${person.idade} anos</small></span><i>→</i>`;
    button.querySelector('img').onerror = event => event.currentTarget.remove();
    button.addEventListener('click', () => {
      area.querySelectorAll('.suspect').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      showTestimony(person);
      document.querySelector('.testimony-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    area.append(button);
  });
  showTestimony(data[0]);
}).catch(() => {
  name.textContent = 'Arquivo indisponível';
  testimony.textContent = 'Não foi possível carregar os interrogatórios. Tente recarregar a página.';
});

replay.addEventListener('click', () => {
  if (selected) showTestimony(selected);
});

}
