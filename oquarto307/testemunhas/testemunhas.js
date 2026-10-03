if (window.CaseAccess?.allowed) {
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


}
