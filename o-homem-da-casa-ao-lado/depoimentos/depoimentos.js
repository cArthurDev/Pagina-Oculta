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
  "ricardo-vasconcelos": `Investigador: Por que Laura fotografou o senhor próximo à Casa 118?

Ricardo: Passo por ali quase todo dia. Uso o terreno ao lado como atalho. Nem sabia que ela me fotografava.

Investigador: Conhecia Laura?

Ricardo: Só de vista. Nunca conversei com ela.

Investigador: Já entrou na Casa 118?

Ricardo: Nunca.

Investigador: Laura dizia ver uma mulher na janela. O senhor viu algo?

Ricardo: Uma noite vi a luz do andar de cima acesa. Parecia ter uma mulher parada perto da janela, mas estava longe.

Investigador: Por que não contou isso antes?

Ricardo: Não queria me envolver. Com meu passado, qualquer coisa vira motivo pra apontarem pra mim.

Investigador: Onde estava quando Laura desapareceu?

Ricardo: Fui a uma farmácia 24 horas. Paguei no cartão. Devem ter câmeras.

Investigador: Mais alguma coisa?

Ricardo: Sim. Vocês estão preocupados demais com quem estava dentro daquela casa.

Investigador: O que quer dizer?

Ricardo: Laura passava as noites olhando para aquela janela. Já pensaram em quem podia estar olhando para ela?`,
  "sandra-moura": `Investigador: A senhora é responsável pela Casa 118?

Sandra: Sim. Administro o imóvel para os proprietários há alguns anos.

Investigador: E possui uma chave?

Sandra: Possuo. É necessária para vistorias e manutenção.

Investigador: Quando entrou lá pela última vez?

Sandra: Cerca de dois meses atrás, quando acompanhei um serviço elétrico.

Investigador: Marcelo Azevedo estava com a senhora?

Sandra: Sim. Ele fez alguns reparos na instalação.

Investigador: A perícia encontrou sinais de atividade recente. Mais alguém possui chave?

Sandra: Atualmente, que eu saiba, não. Mas antigamente existiam outras cópias.

Investigador: Onde estão?

Sandra: Não sei. O antigo proprietário nunca devolveu mas ele já faleceu a anos.

Investigador: Alguma outra pessoa ?

Sandra: Não me lembro. Isso foi há muitos anos. Talvez exista algum registro nos documentos antigos do imóvel.

Investigador: A senhora viu Laura perto da casa?

Sandra: Uma vez. Ela estava fotografando a janela do andar de cima. Perguntei o que fazia ali e ela disse: “Tem alguém usando essa casa.”`,
  "marcelo-azevedo": `Investigador: O senhor realizou manutenção na Casa 118?

Marcelo: Sim. A Sandra me chamou para revisar a instalação elétrica.

Investigador: Foi a única vez que entrou?

Marcelo: Não. Voltei alguns dias depois porque tinha esquecido uma ferramenta. Não avisei a Sandra.

Investigador: Por que escondeu isso?

Marcelo: Porque entrei sem autorização. Sabia que ia me complicar.

Investigador: Encontrou alguma coisa diferente?

Marcelo: Nos fundos tinha um carro estacionado perto do portão lateral.

Investigador: Reconheceu o veículo?

Marcelo: Não. Era um carro mais antigo, escuro. Quando saí, ele já não estava lá.

Investigador: Viu quem dirigia?

Marcelo: Não. Mas encontrei outra coisa.

Investigador: O quê?

Marcelo: Uma caixa com fios de nylon Achei que fosse material velho e deixei onde estava, mas quando fiz o serviço não estava lá.

Investigador: Onde?

Marcelo: No andar de cima. Perto da janela.`,
  "daniel-rocha": `Investigador: Quando foi a última vez que viu Laura?

Daniel: Faz alguns meses. Desde que terminamos, quase não nos falamos.

Investigador: Temos imagens de vocês juntos dois dias antes do desaparecimento.

Daniel: …Ela me procurou. Eu não queria envolver nosso término nisso.

Investigador: Por que Laura procurou você?

Daniel: Estava assustada. Queria que eu entrasse naquela casa abandonada com ela.

Investigador: E você foi?

Daniel: Não. Falei que aquilo estava virando obsessão.

Investigador: Ela contou alguma coisa diferente naquele dia?

Daniel: Disse que tinha percebido uma coisa nas fotografias.

Investigador: O quê?

Daniel: Que a mulher da janela sempre aparecia exatamente no mesmo lugar e na mesma posição.

Investigador: O que Laura achava disso?

Daniel: Ela disse: “ talvez não seja algo humano “`,
  "bianca-alves": `Investigador: Laura conversava com você sobre a Casa 118?

Bianca: Quase todos os dias. No começo achei que ela estava exagerando. Depois comecei a acreditar nela.

Investigador: Por quê?

Bianca: Porque ela começou a falar da Camila.

Investigador: Camila Ferreira?

Bianca: Sim. Laura conhecia ela. Disse que, antes de morrer, Camila também falava sobre coisas estranhas acontecendo perto de uma casa vazia.

Investigador: Laura acreditava que havia relação?

Bianca: Nos últimos dias, sim. Ela disse: “Estou vendo as mesmas coisas que a Camila viu.”

Investigador: E na última conversa de vocês?

Bianca: Ela me mandou uma mensagem estranha.

Investigador: O que dizia?

Bianca: “Se eu estiver certa, tem algo a mais por trás da mulher na janela”

Investigador: Ela explicou?

Bianca: Não. Perguntei o que tinha descoberto… e ela não respondeu mais.`,
  "otavio-brandao": `Investigador: O senhor mora em frente à casa de Laura há bastante tempo?

Otávio: Trinta e quatro anos. Conheço a família dela desde que Laura era criança.

Investigador: Ela comentou sobre a Casa 118?

Otávio: Sim. Estava assustada. Eu disse que aquela casa estava vazia havia anos, mas depois do que aconteceu… talvez eu devesse ter levado mais a sério.

Investigador: O senhor viu alguma movimentação estranha?

Otávio: Vi um homem algumas vezes passando pela lateral da casa.

Investigador: Consegue identificá-lo?

Otávio: Acho que era o morador novo da rua. Ricardo. Mas não posso afirmar que ele tenha entrado.

Investigador: Mais alguma coisa?

Otávio: Uma madrugada ouvi um barulho metálico vindo dos fundos. Quando fui até a janela, não vi ninguém. No dia seguinte, encontrei o portão lateral da 118 entreaberto.

Investigador: O senhor entrou para verificar?

Otávio: Não. Fechei o portão por fora e voltei para casa.

Investigador: Por que não comunicou isso?

Otávio: Porque até Laura desaparecer aquilo parecia só uma casa velha com um portão mal fechado.

Investigador: Viu Laura naquela noite?

Otávio: Vi a luz do quarto dela acesa. Só isso.`
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
  fetch(`../interrogatorio/suspeitos/${id}.json`)
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
    button.innerHTML = `<span class="suspect-no">${String(index + 1).padStart(2, '0')}</span><span class="portrait"><img src="../interrogatorio/images/${person.photo}" alt="Foto de ${person.nome}"><span class="portrait-initial">${person.nome[0]}</span></span><span><b>${person.nome}</b><small>Idade: ${person.idade} anos</small></span><i>→</i>`;
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
  testimony.textContent = 'Não foi possível carregar os depoimentos. Tente recarregar a página.';
});

replay.addEventListener('click', () => {
  if (selected) showTestimony(selected);
});

}
