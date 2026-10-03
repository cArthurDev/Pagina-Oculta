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
    window.location.href = new URL('acesso/o-quarto-307/?secao=interrogatorio', new URL('.', themeLink.href)).href;
  };
  caseEntry.addEventListener('click', openAccess);
  caseEntry.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openAccess();
    }
  });
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
