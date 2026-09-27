const themeLink = document.createElement('link');
themeLink.rel = 'stylesheet';
themeLink.href = new URL('horror.css', document.currentScript.src).href;
document.head.append(themeLink);
const logoUrl = new URL('images/logo-branca.png', document.currentScript.src).href;
const caseImageUrl = new URL('images/quarto307.png', document.currentScript.src).href;
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = new URL('images/logo-branca.png', document.currentScript.src).href;
document.head.append(favicon);
const portraitStyle = document.createElement('style');
portraitStyle.textContent = '.suspect{min-height:132px;padding:20px;grid-template-columns:30px 92px 1fr 22px}.portrait{width:92px;height:108px;position:relative;overflow:hidden}.portrait img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.portrait-initial{display:grid;place-items:center;width:100%;height:100%}@media(max-width:700px){.suspect{min-height:116px;grid-template-columns:30px 78px 1fr 22px}.portrait{width:78px;height:92px}}';
document.head.append(portraitStyle);
document.querySelectorAll('.brand').forEach((brand) => {
  brand.innerHTML = `<img src="${logoUrl}" alt="Página Oculta">`;
  const logo = brand.querySelector('img');
  logo.style.cssText = 'display:block;max-height:50px;max-width:190px;width:auto;object-fit:contain';
});
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .13 });
  document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
  document.querySelectorAll('.tilt').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const box = card.getBoundingClientRect(), x = (event.clientX - box.left) / box.width - .5, y = (event.clientY - box.top) / box.height - .5;
      card.style.transform = `perspective(800px) rotateX(${-y * 7}deg) rotateY(${x * 8}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
}

const caseEntry = document.querySelector('.case-entry');
if (caseEntry) {
  const openAccess = () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:20px;background:radial-gradient(circle at 50% 25%,#321314,#070808 64%);color:#eee6d8;font-family:DM Sans,sans-serif';
    overlay.innerHTML = `<div style="width:min(420px,100%);text-align:center"><div style="height:230px;padding:18px;display:flex;flex-direction:column;justify-content:flex-end;text-align:left;background:linear-gradient(to bottom,transparent 22%,rgba(0,0,0,.96)),url('images/quarto307.png') center/cover;border:1px solid #76615a;box-shadow:0 18px 45px #000"><span style="font:10px DM Mono;letter-spacing:1px;text-transform:uppercase">arquivo 001 · acesso restrito</span><b style="font:700 43px/.9 Playfair Display;margin-top:9px">O Quarto<br>307</b></div><h1 style="font:700 38px/1 Playfair Display;margin:25px 0 9px">Digite a senha</h1><p style="color:#bdb5a8;margin:0 0 18px">Use o código de acesso do seu caso.</p><div class="entry-dots" style="height:31px;font:25px DM Mono;letter-spacing:10px;color:#dc3730;margin-bottom:13px">○ ○ ○ ○</div><div class="entry-pad" style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px">${[1,2,3,4,5,6,7,8,9].map(n=>`<button data-key="${n}" style="height:48px;background:#171918;color:#eee6d8;border:1px solid #5a4944;font:500 18px DM Mono;cursor:pointer">${n}</button>`).join('')}<button data-key="clear" style="height:48px;background:#171918;color:#df453d;border:1px solid #5a4944;font:500 11px DM Mono;cursor:pointer">limpar</button><button data-key="0" style="height:48px;background:#171918;color:#eee6d8;border:1px solid #5a4944;font:500 18px DM Mono;cursor:pointer">0</button><button data-key="back" style="height:48px;background:#171918;color:#df453d;border:1px solid #5a4944;font:500 18px DM Mono;cursor:pointer">←</button></div><p class="entry-error" style="height:18px;color:#ee4a41;font:10px DM Mono;letter-spacing:1px;text-transform:uppercase"></p></div>`;
    document.body.append(overlay); let pin = ''; const dots = overlay.querySelector('.entry-dots'), error = overlay.querySelector('.entry-error');
    overlay.querySelectorAll('[data-key]').forEach((key) => key.onclick = () => { const value = key.dataset.key; pin = value === 'clear' ? '' : value === 'back' ? pin.slice(0, -1) : pin.length < 4 ? pin + value : pin; dots.textContent = [0,1,2,3].map(i => i < pin.length ? '●' : '○').join(' '); if (pin.length === 4) { if (pin === '0307') { sessionStorage.setItem('quarto307', 'ok'); window.location.href = 'interrogatorio/'; } else { error.textContent = 'senha incorreta · acesso negado'; pin = ''; setTimeout(() => { dots.textContent = '○ ○ ○ ○'; }, 450); } } });
  };
  caseEntry.addEventListener('click', openAccess);
  caseEntry.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') openAccess(); });
}

// Na rota de interrogatório, apresenta primeiro a capa do caso antes de pedir o código.
const interrogationEntryObserver = new MutationObserver(() => {
  const gate = document.querySelector('.case-lock');
  if (!gate || gate.dataset.caseEntryReady) return;
  gate.dataset.caseEntryReady = 'true';

  const entryStyle = document.createElement('style');
  entryStyle.textContent = `.case-lock .case-access{width:min(340px,100%);text-align:center}.case-lock .case-card{width:100%;margin:0 0 12px;text-align:left;box-shadow:0 18px 45px #000}.case-lock .access-open{width:100%;height:54px;background:#a32c27;color:#fff;border:0;font:700 13px 'DM Mono';letter-spacing:1.5px;cursor:pointer}.case-lock .access-open:hover{background:#c43c35}.case-lock .access-pin{display:none}.case-lock.show-pin .case-card,.case-lock.show-pin .access-open{display:none}.case-lock.show-pin .access-pin{display:block}`;
  document.head.append(entryStyle);

  gate.innerHTML = `<div class="case-access"><article class="case-card card-amber" style="background-image:linear-gradient(to bottom,rgba(0,0,0,.02) 30%,rgba(0,0,0,.18) 52%,rgba(0,0,0,.96) 100%),url('${caseImageUrl}');background-size:cover;background-position:center"><div class="card-code">ARQ. 001</div><p>caso disponível agora</p><h3>O Quarto<br><em>307</em></h3><span class="card-arrow">↗</span></article><button class="access-open" type="button">ABRIR</button><div class="access-pin"><h1>Digite a senha</h1><p>Use o código de acesso do seu caso.</p><div class="pin-dots">○ ○ ○ ○</div><div class="keypad">${[1,2,3,4,5,6,7,8,9].map(n => `<button data-key="${n}">${n}</button>`).join('')}<button class="clear" data-key="clear">limpar</button><button data-key="0">0</button><button class="clear" data-key="back">←</button></div><div class="lock-error"></div></div></div>`;

  gate.querySelector('.access-open').onclick = () => gate.classList.add('show-pin');
  let pin = '';
  const dots = gate.querySelector('.pin-dots');
  const error = gate.querySelector('.lock-error');
  const paint = () => { dots.textContent = [0, 1, 2, 3].map(i => i < pin.length ? '●' : '○').join(' '); };
  gate.querySelectorAll('[data-key]').forEach((button) => {
    button.onclick = () => {
      const key = button.dataset.key;
      pin = key === 'clear' ? '' : key === 'back' ? pin.slice(0, -1) : pin.length < 4 ? pin + key : pin;
      paint();
      if (pin.length === 4 && pin === '0307') {
        sessionStorage.setItem('quarto307', 'ok');
        gate.style.opacity = '0';
        gate.style.transition = 'opacity .4s';
        setTimeout(() => gate.remove(), 400);
      } else if (pin.length === 4) {
        error.textContent = 'senha incorreta · acesso negado';
        pin = '';
        setTimeout(paint, 450);
      }
    };
  });
  interrogationEntryObserver.disconnect();
});
interrogationEntryObserver.observe(document.body, { childList: true, subtree: true });

const interrogationPage = document.querySelector('.interrogation');
if (interrogationPage) {
  const exitButton = document.createElement('button');
  exitButton.className = 'nav-link';
  exitButton.type = 'button';
  exitButton.textContent = 'sair ↗';
  exitButton.style.cssText = 'background:none;border:0;cursor:pointer';
  exitButton.onclick = () => {
    sessionStorage.removeItem('quarto307');
    window.location.reload();
  };
  document.querySelector('.nav')?.append(exitButton);
}

// Os depoimentos são carregados dos arquivos em interrogatorio/suspeitos.
const suspectsArea = document.querySelector('#suspects');
if (suspectsArea) {
  const files = ['camila-duarte','daniel-rocha','rafael-martins','marina-albuquerque','helena-martins','eduardo-alves','gabriel-monteiro','lucas-martins'];
  Promise.all(files.map((file) => fetch(`suspeitos/${file}.json`).then((response) => response.json()))).then((suspects) => {
    const questions = document.querySelector('#questions'), answer = document.querySelector('#answer'), name = document.querySelector('#name'), role = document.querySelector('#role');
    const showSuspect = (suspect) => {
      name.textContent = suspect.nome;
      role.textContent = `${suspect.papel} · ${suspect.idade} anos`;
      questions.innerHTML = '';
      answer.innerHTML = '<span>resposta</span><p>Escolha uma pergunta acima para consultar o depoimento.</p>';
      answer.style.display = '';
      const statement = document.createElement('div');
      statement.style.cssText = 'margin:18px 0;padding:21px 22px;background:linear-gradient(135deg,#211312,#151615);border-left:3px solid #b82a25';
      statement.innerHTML = `<span style="display:block;margin-bottom:9px;color:#dc4b43;font:10px 'DM Mono';letter-spacing:1px;text-transform:uppercase">depoimento inicial · ${suspect.nome}</span><p style="margin:0;color:#e8dfd1;font:600 20px/1.45 'Playfair Display';white-space:pre-line"></p>`;
      questions.append(statement);
      const statementText = suspect.depoimento || 'Este depoimento ainda está sendo preparado pelo investigador.';
      const statementTextElement = statement.querySelector('p');
      const showPhase = (phaseIndex) => {
        const fase = suspect.fases[phaseIndex];
        const group = document.createElement('div');
        group.style.cssText = 'margin-top:18px;border-top:1px solid #51524e;padding-top:12px';
        group.innerHTML = `<p style="margin:0 0 8px;color:#d5a96b;font:10px 'DM Mono';letter-spacing:1px;text-transform:uppercase">fase ${fase.fase} · escolha uma pergunta</p>`;
        const phaseQuestions = [...fase.perguntas];
        while (phaseQuestions.length < 3) phaseQuestions.push({ pergunta: 'Pergunta pendente', resposta: 'Esta pergunta ainda será adicionada ao arquivo JSON.' });
        phaseQuestions.forEach((item, index) => {
          const button = document.createElement('button');
          button.innerHTML = `<i>${String(index + 1).padStart(2, '0')}</i>${item.pergunta}<strong>+</strong>`;
          button.onclick = () => {
            group.querySelectorAll('button').forEach((other) => { other.disabled = true; other.style.opacity = other === button ? '1' : '.35'; });
            button.classList.add('asked');
            answer.style.display = 'none';
            const phaseAnswer = document.createElement('div');
            phaseAnswer.style.cssText = 'margin-top:14px;padding:17px 18px;background:#30312e;border-left:3px solid #d5a96b';
            phaseAnswer.innerHTML = `<span style="display:block;color:#d5a96b;font:10px 'DM Mono';letter-spacing:1px;text-transform:uppercase">resposta de ${suspect.nome} · fase ${fase.fase}</span><p style="font:600 20px/1.35 'Playfair Display';margin:8px 0 0">“${item.resposta}”</p>`;
            group.append(phaseAnswer);
            if (phaseIndex < suspect.fases.length - 1) {
              showPhase(phaseIndex + 1);
              questions.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          };
          group.append(button);
        });
        questions.append(group);
      };
      let character = 0;
      const typeStatement = () => {
        statementTextElement.textContent = statementText.slice(0, character);
        if (character < statementText.length) { character += 1; setTimeout(typeStatement, 18); }
        else showPhase(0);
      };
      typeStatement();
    };
    suspectsArea.innerHTML = '';
    const portraitFiles = { 'marina-albuquerque': 'marina_alburquerque.png' };
    suspects.forEach((suspect, index) => {
      const button = document.createElement('button');
      button.className = `suspect${index === 0 ? ' active' : ''}`;
      const portraitFile = portraitFiles[suspect.id] || `${suspect.id.replaceAll('-', '_')}.png`;
      button.innerHTML = `<span class="suspect-no">${String(index + 1).padStart(2, '0')}</span><span class="portrait portrait-${String.fromCharCode(97 + index)}"><img src="images/${portraitFile}" alt="Foto de ${suspect.nome}" onerror="this.remove()"><span class="portrait-initial">${suspect.nome[0]}</span></span><span><b>${suspect.nome}</b><small>${suspect.papel}</small></span><i>→</i>`;
      button.onclick = () => { suspectsArea.querySelectorAll('.suspect').forEach((other) => other.classList.remove('active')); button.classList.add('active'); showSuspect(suspect); };
      suspectsArea.append(button);
    });
    showSuspect(suspects[0]);
  }).catch(() => {});
}
