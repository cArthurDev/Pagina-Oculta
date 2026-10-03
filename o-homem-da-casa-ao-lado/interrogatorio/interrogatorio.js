if (window.CaseAccess?.allowed) {
const suspects = [
  ["ricardo-vasconcelos", "ricardo_vasconcelos.png"],
  ["daniel-rocha", "daniel_rocha.png"],
  ["sandra-moura", "sandra_moura.png"],
  ["otavio-brandao", "otavio_brandão.png"],
  ["bianca-alves", "bianca_alves.png"],
  ["marcelo-azevedo", "marcelo_azevedo.png"]
];
const interrogations = {};


const questions = document.querySelector('#questions'), name = document.querySelector('#name'), role = document.querySelector('#role'), area = document.querySelector('#suspects');
const renderSuspect = (suspect) => {
  name.textContent = suspect.nome; role.textContent = `${suspect.papel} · ${suspect.idade} anos`; questions.innerHTML = '';
  const phases = interrogations[suspect.id] || suspect.fases;
  if (!phases.length) { questions.textContent = 'As perguntas e respostas deste interrogatório aguardam conteúdo.'; return; }
  phases.forEach((phase) => { const group = document.createElement('div'); group.className = 'phase'; group.innerHTML = `<p>fase ${phase.fase} · escolha uma pergunta</p>`; phase.perguntas.forEach((item, index) => { const button = document.createElement('button'); button.innerHTML = `<i>${String(index + 1).padStart(2, '0')}</i>${item.pergunta}<strong>+</strong>`; button.onclick = () => { group.querySelectorAll('button').forEach(other => { other.disabled = true; other.style.opacity = other === button ? '1' : '.35'; }); button.classList.add('asked'); const response = document.createElement('div'); response.className = 'phase-answer'; response.innerHTML = `<span>resposta de ${suspect.nome}</span><p>“${item.resposta}”</p>`; group.append(response); }; group.append(button); }); questions.append(group); });
};
Promise.all(suspects.map(([id, photo]) => fetch(`suspeitos/${id}.json`).then(response => response.json()).then(data => ({ ...data, photo })))).then((data) => { area.innerHTML = ''; data.forEach((suspect, index) => { const button = document.createElement('button'); button.className = `suspect${index === 0 ? ' active' : ''}`; button.innerHTML = `<span class="suspect-no">${String(index + 1).padStart(2, '0')}</span><span class="portrait"><img src="images/${suspect.photo}" alt="Foto de ${suspect.nome}" onerror="this.remove()"><span class="portrait-initial">${suspect.nome[0]}</span></span><span><b>${suspect.nome}</b><small>Idade: ${suspect.idade} anos</small></span><i>→</i>`; button.onclick = () => { area.querySelectorAll('.suspect').forEach(item => item.classList.remove('active')); button.classList.add('active'); renderSuspect(suspect); document.querySelector('.question-panel').scrollIntoView({ behavior: 'smooth', block: 'start' }); }; area.append(button); }); renderSuspect(data[0]); }).catch(() => { area.innerHTML = '<p>Não foi possível carregar os arquivos de interrogatório.</p>'; });

}
