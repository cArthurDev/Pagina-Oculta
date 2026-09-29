const witnesses = [
  { id: '01', title: 'Testemunha 01', note: 'Registro enviado sem identificação.', audio: 'audios/testemunha-01.mp3' },
  { id: '02', title: 'Testemunha 02', note: 'Voz alterada para preservar a fonte.', audio: 'audios/testemunha-02.mp3' },
  { id: '03', title: 'Testemunha 03', note: 'Gravação recebida após o apagão.', audio: 'audios/testemunha-03.mp3' }
];

const witnessList = document.querySelector('#witness-list');
witnessList.innerHTML = witnesses.map(witness => `
  <article class="witness-card">
    <span class="witness-number">registro confidencial · ${witness.id}</span>
    <h2>${witness.title}</h2>
    <p>${witness.note}</p>
    <span class="witness-status">áudio anexado</span>
    <audio class="audio-player" controls preload="metadata" src="${witness.audio}">
      Seu navegador não suporta a reprodução de áudio.
    </audio>
    <div class="audio-note" aria-live="polite"></div>
  </article>
`).join('');

document.querySelectorAll('.audio-player').forEach(player => {
  const note = player.parentElement.querySelector('.audio-note');
  player.addEventListener('error', () => { note.textContent = 'arquivo de áudio ainda não disponível'; });
});

const access = document.querySelector('#case-access');
access.innerHTML = `<div class="access-wrap"><article class="access-card" style="background-image:linear-gradient(to bottom,rgba(0,0,0,.02) 30%,rgba(0,0,0,.18) 52%,rgba(0,0,0,.96) 100%),url('../images/quarto307.png');background-size:cover;background-position:center"><div class="card-code">ARQ. 001</div><p>caso disponível agora</p><h2>O Quarto<br><em>307</em></h2><span class="card-arrow">↗</span></article><button class="access-open" type="button">ABRIR</button><div class="pin-area"><h2>Digite a senha</h2><p>Use o código de acesso do seu caso.</p><div class="pin-dots">○ ○ ○ ○</div><div class="keypad">${[1,2,3,4,5,6,7,8,9].map(number => `<button data-key="${number}">${number}</button>`).join('')}<button class="clear" data-key="clear">limpar</button><button data-key="0">0</button><button class="clear" data-key="back">←</button></div><div class="lock-error"></div></div></div>`;
access.querySelector('.access-open').onclick = () => access.classList.add('show-pin');
let pin = '';
const dots = access.querySelector('.pin-dots');
const error = access.querySelector('.lock-error');
access.querySelectorAll('[data-key]').forEach(button => {
  button.onclick = () => {
    const key = button.dataset.key;
    pin = key === 'clear' ? '' : key === 'back' ? pin.slice(0, -1) : pin.length < 4 ? pin + key : pin;
    dots.textContent = [0, 1, 2, 3].map(index => index < pin.length ? '●' : '○').join(' ');
    if (pin.length !== 4) return;
    if (pin === '0307') access.remove();
    else { error.textContent = 'senha incorreta · acesso negado'; pin = ''; setTimeout(() => { dots.textContent = '○ ○ ○ ○'; }, 450); }
  };
});
