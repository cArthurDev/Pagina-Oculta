if (window.CaseAccess?.allowed) {
const addStyle = (css) => { const style = document.createElement('style'); style.textContent = css; document.head.append(style); };
const favicon = document.createElement('link'); favicon.rel = 'icon'; favicon.type = 'image/png'; favicon.href = '../../images/logo-branca.png'; document.head.append(favicon);


const theme = document.createElement('link'); theme.rel = 'stylesheet'; theme.href = '../../horror.css'; document.head.append(theme);
document.querySelectorAll('.brand').forEach((brand) => brand.innerHTML = '<img src="../../images/logo-branca.png" alt="Página Oculta" style="display:block;max-height:50px;max-width:190px;width:auto;object-fit:contain">');
addStyle(`.choice{display:grid;grid-template-columns:repeat(3,1fr);gap:13px;max-width:none;border:0}.choice label.solution-suspect{min-height:132px;margin:0;padding:20px;display:grid;grid-template-columns:28px 76px 1fr;grid-template-rows:1fr auto;gap:0 12px;align-items:center;background:#171918;border:1px solid var(--line);color:#e6dfd1;cursor:pointer;transition:.25s}.choice label.solution-suspect:hover,.choice label.solution-suspect.selected{background:#5d1515;box-shadow:0 0 22px rgba(182,24,24,.28);transform:translateY(-4px)}.choice label.solution-suspect input{grid-row:1/3;grid-column:1;width:17px;height:17px;margin:0;accent-color:#d42721}.choice label.solution-suspect .portrait{grid-row:1/3;grid-column:2;width:76px;height:90px;display:grid;place-items:center;background:#b48c61;color:#fff;font:700 42px 'Playfair Display'}.choice label.solution-suspect:nth-child(2) .portrait{background:#47544d}.choice label.solution-suspect:nth-child(3) .portrait{background:#933d35}.choice label.solution-suspect>span:not(.portrait){grid-column:3;align-self:end;font:700 23px/1 'Playfair Display';color:inherit}.choice label.solution-suspect small{grid-column:3;align-self:start;margin-top:5px;color:inherit;opacity:.7;font:10px 'DM Mono';letter-spacing:1px;text-transform:uppercase}@media(max-width:700px){.choice{grid-template-columns:1fr}.choice label.solution-suspect{min-height:112px;grid-template-columns:28px 70px 1fr}.choice label.solution-suspect .portrait{width:70px;height:82px}}`);

const suspects = [
  ['camila-duarte', 'Camila Duarte', 'melhor amiga da vítima', 'camila_duarte.png'],
  ['daniel-rocha', 'Daniel Rocha', 'melhor amigo do noivo', 'daniel_rocha.png'],
  ['rafael-martins', 'Rafael Martins', 'irmão da vítima', 'rafael_martins.png'],
  ['marina-albuquerque', 'Marina Albuquerque', 'irmã do noivo', 'marina_alburquerque.png'],
  ['helena-martins', 'Helena Martins', 'mãe da vítima', 'helena_martins.png'],
  ['eduardo-alves', 'Eduardo Alves', 'ex-namorado da vítima', 'eduardo_alves.png'],
  ['gabriel-monteiro', 'Gabriel Monteiro', 'noivo da vítima', 'gabriel_monteiro.png'],
  ['lucas-martins', 'Lucas Martins', 'primo da vítima', 'lucas_martins.png']
];
const cardMarkup = (field) => suspects.map(([id, name, role, image]) => `<label><input type="radio" name="${field}" value="${id}"><span class="portrait"><img src="images/${image}" alt="Foto de ${name}" onerror="this.remove()"><span class="portrait-initial">${name[0]}</span></span><span>${name}</span><small>${role}</small></label>`).join('');
const choiceArea = document.querySelector('.choice');
choiceArea.innerHTML = cardMarkup('culpado');
const lightsQuestion = document.createElement('section');
lightsQuestion.className = 'lights-question';
lightsQuestion.innerHTML = `<p class="eyebrow">segunda decisão</p><h2>Quem apagou as luzes?</h2><p>Selecione quem teve acesso ao apagão no momento do crime.</p><div class="choice lights-choice">${cardMarkup('apagao')}</div>`;
document.querySelector('#solution button[type="submit"]').before(lightsQuestion);
addStyle('.lights-question{margin:72px 0 35px}.lights-question h2{font:700 clamp(32px,4.3vw,54px)/.98 \'Playfair Display\';letter-spacing:-2px;margin:12px 0}.lights-question>p:not(.eyebrow){max-width:500px;line-height:1.55;color:#c6c0b5}.lights-choice{margin-top:28px}');
addStyle('.choice label.solution-suspect .portrait{position:relative;overflow:hidden}.choice label.solution-suspect .portrait img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.choice label.solution-suspect .portrait-initial{display:grid;place-items:center;width:100%;height:100%}');
const choices = [...document.querySelectorAll('.choice label')];
const updateSelection = () => choices.forEach((choice) => choice.classList.toggle('selected', choice.querySelector('input').checked));
choices.forEach((choice) => { const input = choice.querySelector('input'); choice.classList.add('solution-suspect'); input.addEventListener('change', updateSelection); choice.addEventListener('click', () => setTimeout(updateSelection)); });

document.querySelector('#solution').addEventListener('submit', (event) => { event.preventDefault(); const pick = document.querySelector('input[name="culpado"]:checked'), lights = document.querySelector('input[name="apagao"]:checked'), out = document.querySelector('#result'); if (!pick || !lights) { out.className = 'result wrong show'; out.innerHTML = '<b>Escolha um suspeito para as duas decisões antes de concluir.</b>'; return; } if (pick.value === 'helena-martins' && lights.value === 'gabriel-monteiro') { window.location.href = 'revelacao/'; return; } out.className = 'result wrong show'; out.innerHTML = '<span>veredito incorreto</span><h2>As peças ainda não<br>se <em>encaixam.</em></h2><p>Esse depoimento não explica todas as evidências. Reveja as pistas e os interrogatórios antes de tentar novamente.</p><a href="../interrogatorio/">← rever as pistas</a>'; out.scrollIntoView({ behavior: 'smooth', block: 'center' }); });

}
