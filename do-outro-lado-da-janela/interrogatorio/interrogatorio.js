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
  "sandra-moura": "Investigador: Sandra, descobrimos que a Casa 118 não é o único imóvel ligado à senhora.\n\nSandra: Eu trabalho com imóveis há décadas. Já fui responsável por dezenas de propriedades.\n\nInvestigador: Inclusive pelos imóveis abandonados relacionados aos casos de Camila, Gabriela e Matheus.\n\nSandra: Sim. E já expliquei que não sabia que aqueles casos tinham qualquer relação.\n\nInvestigador: Bianca afirmou que a senhora costumava assustar adolescentes que se aproximavam desses lugares. Falava até sobre fantasmas.\n\nSandra: Isso é ridículo.\n\nInvestigador: Então ela está mentindo?\n\nSandra: Eu mandava os jovens ficarem longe. Casas abandonadas são perigosas. Se eu precisava inventar uma história para uma criança não entrar, eu inventava.\n\nInvestigador: Laura também foi alertada pela senhora.\n\nSandra: Porque ela queria entrar na Casa 118.\n\nInvestigador: O que havia lá dentro que a senhora não queria que ela encontrasse?\n\nSandra: Nada. Vocês estão procurando um monstro onde não existe.\n\nInvestigador: A senhora tinha as chaves de todos esses imóveis.\n\nSandra: Eu não era a única.\n\nInvestigador: Quem mais tinha acesso?\n\nSandra: Proprietários, funcionários, gente da manutenção… algumas chaves foram copiadas ao longo dos anos.\n\nInvestigador: E da Casa 118?\n\nSandra: Existe uma segunda cópia.\n\nInvestigador: Com quem?\n\nSandra: Esse é o problema. Ela desapareceu.\n\nInvestigador: Quando percebeu?\n\nSandra: pouco antes de Laura vir falar comigo.\n\nInvestigador: E não achou importante contar isso à polícia?\n\nSandra: Achei que algum funcionário tivesse perdido.\n\nInvestigador: Uma jovem desaparece investigando uma casa, uma cópia da chave dessa casa também desaparece e a senhora achou que não era importante?\n\nSandra: …Eu estava com medo.\n\nInvestigador: De quê?\n\nSandra: Porque não foi a primeira vez que uma chave sumiu.",
  "bianca-alves": "Investigador: Bianca, precisamos falar novamente sobre Matheus e Gabriela.\n\nBianca: O que eles têm a ver com a Laura?\n\nInvestigador: Você namorou Matheus. Ele se envolveu com Gabriela. Os dois morreram. Agora sua melhor amiga desapareceu.\n\nBianca: Está insinuando que eu fiz alguma coisa?\n\nInvestigador: Daniel também contou que você era obcecada por crimes. Fotografias, notícias, desaparecimentos…\n\nBianca: Eu gosto de casos criminais. Isso não me transforma em assassina.\n\nInvestigador: Foi você quem mostrou o caso de Camila para Laura.\n\nBianca: Mostrei uma matéria. Laura já conhecia Camila e percebeu as semelhanças.\n\nInvestigador: Então foi você quem colocou Laura nessa investigação.\n\nBianca: Não coloca isso nas minhas costas! Ela decidiu investigar.\n\nInvestigador: Matheus, Gabriela, Laura… você está ligada a todos eles. Se não foi você, quem poderia ter feito alguma coisa?\n\nBianca: Olhem para aquela corretora bizarra. Sandra tinha acesso às casas. Vivia assustando os adolescentes para ficarem longe, falando de fantasmas e outras bobagens. Ninguém sabe o que ela escondia lá.\n\nInvestigador: Mais alguma coisa que ainda não sabemos?\n\nBianca: Pouco antes de desaparecer, Laura estava investigando outro caso. Uma garota que morreu há alguns anos.\n\nInvestigador: Quem?\n\nBianca: Não lembro.\n\nInvestigador: Você coleciona casos criminais e não lembra?\n\nBianca: Eu disse que não lembro!\n\nInvestigador: Como ela morreu?\n\nBianca: Suicídio. Numa casa abandonada aqui do bairro.\n\nInvestigador: Por que Laura estava investigando isso?\n\nBianca: Ela achava que tinha alguma ligação.\n\nInvestigador: Ligação com o quê?\n\nBianca: Eu não sei! Ela não quis me contar.\n\nInvestigador: Sua melhor amiga desapareceu. Seu ex está morto. Gabriela está morta. Se está escondendo alguma coisa, esse é o momento de falar.",
  "marcelo-azevedo": "Investigador: Marcelo, entramos em contato novamente com as famílias de Camila, Gabriela e Matheus.\n\nMarcelo: Certo. E por que estou aqui novamente?\n\nInvestigador: Porque seu nome apareceu nos três casos. O senhor realizou serviços elétricos nas casas dos três. Também trabalhou na residência de Laura.\n\nMarcelo: Sou eletricista há quase vinte anos. Se procurarem o meu nome em casas desse bairro, vão encontrar muitas.\n\nInvestigador: Curiosamente, encontramos justamente nas casas de quatro jovens ligados ao mesmo caso.\n\nMarcelo: Está insinuando alguma coisa?\n\nInvestigador: Estamos trabalhando com fatos. Aproximadamente um mês antes dos acontecimentos estranhos começarem, o senhor esteve nas residências deles.\n\nMarcelo: Porque fui contratado para trabalhar. Tenho ordens de serviço, clientes, datas. Tudo registrado.\n\nInvestigador: Laura também entrou em contato com o senhor poucos dias antes de desaparecer.\n\nMarcelo: Sim.\n\nInvestigador: Por causa das câmeras da casa.\n\nMarcelo: Ela disse que as câmeras tinham parado de funcionar e perguntou se poderia ser um problema elétrico.\n\nInvestigador: E o senhor não foi verificar.\n\nMarcelo: Eu não tinha horário disponível. Foi exatamente o que disse a ela.\n\nInvestigador: Mas já conhecia a instalação elétrica daquela residência.\n\nMarcelo: Porque trabalhei lá. Isso não significa que eu tenha desligado as câmeras.\n\nInvestigador: Ninguém falou em desligar.\n\nMarcelo: É óbvio onde vocês querem chegar.\n\nInvestigador: O senhor também realizou serviços em imóveis administrados por Sandra Moura.\n\nMarcelo: Sim. Isso faz parte do meu trabalho.\n\nInvestigador: Ela afirma que algumas cópias das chaves desses imóveis desapareceram.\n\nMarcelo: Então perguntem a ela onde colocou as chaves.\n\nInvestigador: O senhor já recebeu alguma delas?\n\nMarcelo: Recebi chaves para trabalhar e devolvi todas. Sempre.\n\nInvestigador: Quatro jovens. Quatro residências. Problemas elétricos. Câmeras que param de funcionar. E o seu nome aparece repetidamente.\n\nMarcelo: Já respondi tudo que tinha para responder.\n\nInvestigador: Ainda temos algumas perguntas.\n\nMarcelo: Então elas serão respondidas na presença do meu advogado.\n\nInvestigador: Está se recusando a continuar?\n\nMarcelo: Estou exercendo meu direito. Se vocês decidiram que fazer meu trabalho me transforma em suspeito de assassinato, não digo mais uma palavra sem meu advogado.",
  "ricardo-vasconcelos": "Investigador: Vamos tentar novamente, Ricardo. No primeiro interrogatório, o senhor disse que conhecia Laura apenas de vista.\n\nRicardo: Já falamos disso.\n\nInvestigador: E agora sabemos que era mentira. Vocês mantinham uma relação escondida.\n\nRicardo: Minha vida pessoal não é problema de vocês.\n\nInvestigador: Laura trabalhou na sua empresa como jovem aprendiz.\n\nRicardo: E daí?\n\nInvestigador: Camila também.\n\nRicardo: …\n\nInvestigador: Gabriela também. Matheus também.\n\nRicardo: Minha empresa participou desse programa durante anos. Passaram dezenas de jovens por lá.\n\nInvestigador: Interessante. Porque começamos a conversar com antigos funcionários.\n\nRicardo: E o que disseram?\n\nInvestigador: Que o senhor gostava de se aproximar das jovens aprendizes.\n\nRicardo: Isso é mentira.\n\nInvestigador: Chamava algumas para conversar sozinho. Oferecia carona. Mandava mensagens fora do expediente.\n\nRicardo: Eu era responsável por aquela empresa! Conversar com funcionário agora é crime?\n\nInvestigador: Não. Se aproveitar da posição para pressionar uma jovem é outra história.\n\nRicardo: Está me acusando de abuso?\n\nInvestigador: Estou perguntando quantas outras existiram antes de Laura.\n\nRicardo: Nenhuma.\n\nInvestigador: Pense bem antes de responder.\n\nRicardo: Eu disse nenhuma!\n\nInvestigador: Laura foi a primeira funcionária com quem o senhor manteve uma relação?\n\nRicardo: Ela não trabalhava mais para mim quando aconteceu.\n\nInvestigador: Não foi o que perguntei.\n\nRicardo: Vai se foder.\n\nInvestigador: Camila alguma vez ficou sozinha com o senhor?\n\nRicardo: Não lembro.\n\nInvestigador: Gabriela?\n\nRicardo: Não lembro!\n\nInvestigador: Laura?\n\nRicardo: Vocês já têm as mensagens!\n\nInvestigador: Temos. Inclusive a de 14 de setembro: “Depois do que você fez hoje, não fala mais comigo.”\n\nRicardo: Foi uma discussão.\n\nInvestigador: O senhor encostou nela?\n\nRicardo: Não.\n\nInvestigador: Ameaçou?\n\nRicardo: Não!\n\nInvestigador: Tentou obrigá-la a continuar a relação?\n\nRicardo: NÃO!\n\nInvestigador: Ela ameaçou contar para alguém?\n\nRicardo: Chega dessa merda!\n\nInvestigador: Três jovens que trabalharam para o senhor estão mortos. Uma quarta desapareceu. E justamente com essa quarta descobrimos uma relação que o senhor tentou esconder da polícia.\n\nRicardo: VOCÊS ESTÃO TENTANDO ME TRANSFORMAR NUM PREDADOR!\n\nInvestigador: Então nos dê motivos para não pensar nisso.\n\nRicardo: Eu não preciso provar porra nenhuma para vocês!\n\nInvestigador: Talvez Camila pudesse esclarecer.\n\nRicardo: Ela está morta.\n\nInvestigador: Gabriela também.\n\nRicardo: Eu sei.\n\nInvestigador: Matheus também.\n\nRicardo: EU SEI!\n\nInvestigador: E Laura está desaparecida.\n\nRicardo: …\n\nInvestigador: Quatro pessoas não podem responder. O senhor pode.\n\nRicardo: Eu não matei ninguém.\n\nInvestigador: Não perguntei se matou.\n\nRicardo: …\n\nInvestigador: Interessante que tenha sido essa a sua resposta.\n\nRicardo: Vocês estão fazendo isso de propósito.\n\nInvestigador: Estamos. Queremos que pare de mentir.\n\nRicardo: Chega.\n\nInvestigador: O que aconteceu com Laura em 14 de setembro?\n\nRicardo: Já respondi.\n\nInvestigador: Não respondeu.\n\nRicardo: Foi uma discussão!\n\nInvestigador: O senhor fez alguma coisa contra a vontade dela?\n\nRicardo: NÃO ENCOSTEI NELA!\n\nInvestigador: Então por que ela não queria mais falar com o senhor?\n\nRicardo: …\n\nInvestigador: O que Laura sabia que o senhor estava tão desesperado para manter escondido?\n\nRicardo: Acabou.\n\nInvestigador: Ainda não.\n\nRicardo: Para mim, acabou.\n\nInvestigador: Ricardo—\n\nRicardo: Quero meu advogado. E se vocês querem continuar me chamando de abusador, façam isso na frente dele. Não respondo mais nada.",
  "otavio-brandao": "Investigador: Senhor Otávio, encontramos uma ligação entre o senhor e as quatro vítimas.\n\nOtávio: Que ligação?\n\nInvestigador: Laura, Camila, Gabriela e Matheus eram clientes da sua loja.\n\nOtávio: Assim como centenas de pessoas do bairro.\n\nInvestigador: Mas o senhor também fez entregas pessoalmente na casa dos quatro.\n\nOtávio: Sim. Minha loja é pequena. Muitas entregas eu mesmo fazia.\n\nInvestigador: Então conhecia os endereços deles.\n\nOtávio: Conhecia os endereços dos meus clientes. Isso não significa nada.\n\nInvestigador: Laura havia reservado um vestido pouco antes de desaparecer.\n\nOtávio: Sim.\n\nInvestigador: Para o aniversário dela.\n\nOtávio: Isso.\n\nInvestigador: O senhor se lembra bastante dela.\n\nOtávio: Ela esteve na minha loja recentemente. É diferente de me perguntar sobre alguém que comprou há anos.\n\nInvestigador: Vamos falar das casas abandonadas. Conhecia a Casa 118?\n\nOtávio: Claro. Moro no bairro há muito tempo.\n\nInvestigador: Já entrou nela?\n\nOtávio: Não.\n\nInvestigador: E nas propriedades relacionadas aos outros três casos?\n\nOtávio: Não.\n\nInvestigador: Nunca?\n\nOtávio: Já respondi.\n\nInvestigador: Temos relatos de que o senhor circulava próximo a alguns desses endereços.\n\nOtávio: Eu fazia entregas pelo bairro inteiro.\n\nInvestigador: Por que acha que Laura desapareceu?\n\nOtávio: Não faço ideia.\n\nInvestigador: E por que quatro jovens ligados ao senhor desapareceram em circunstâncias tão parecidas?\n\nOtávio: Não vou responder essa pergunta.\n\nInvestigador: Por quê?\n\nOtávio: Porque qualquer coisa que eu disser agora vocês vão tentar transformar em confissão.\n\nInvestigador: O senhor perdeu sua filha há alguns anos. Sabe exatamente a dor que esses pais estão sentindo.\n\nOtávio: …Não use minha filha para conseguir uma resposta.\n\nInvestigador: Então nos ajude a encontrar Laura.\n\nOtávio: Eu já ajudei no que podia.\n\nInvestigador: O que aconteceu com sua filha, senhor Otávio?\n\nOtávio: Acabou o interrogatório.\n\nInvestigador: Ainda não terminamos.\n\nOtávio: Para mim, terminaram. Minha filha não tem nada a ver com isso, ela foi mais uma vitima!",
  "daniel-rocha": "Investigador: Daniel, sabemos agora que você também conhecia Matheus, ele o caso dele tem ligação direta com Laura.\n\nDaniel: Conhecia da escola, mas o que tem haver ?\n\nInvestigador: Vocês brigaram por que de acordo com você ele estava dando encima de você ?\n\nDaniel: Isso foi anos atrás, onde quer chegar ?\n\nInvestigador: você praticou homofobia, você seguia as vítimas no Instagram, você foi uma das últimas pessoas que teve contato com Laura, você tinha acesso direto a casa.\n\nDaniel: não é bem assim, não foi homofobia eu só não queria nada , eu não faria isso com Laura eu amava ela, vocês estão tentando me acusar de algo que não fiz.\n\nInvestigador: não estamos acusando, você está nervoso? Talvez esteja escondendo  algo.\n\nDaniel:  porra, eu não estou escondendo nada, eu tô cansado só disso, minha ex está desaparecida e vocês me tratam como suspeito invés de brigar quem fez isso com ela, temos um maluco no bairro que matou a esposa e vocês querem me perseguir?  Sem contar que a melhor amiga ela era obcecada em crimes. \n\nInvestigador: Bianca ? \n\nDaniel: Ela é uma paranoica do terror, ela sim deve ser uma psicopata eu já vi ela matar um esquilo com pedra sem ter nenhuma dó.\n\nInvestigador: ok"
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
