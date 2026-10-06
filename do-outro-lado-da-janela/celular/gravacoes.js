if (window.CaseAccess?.allowed) {
    const list = document.getElementById('recordings-list');
    const recordings = window.GRAVACOES_VOZ || [];
    document.getElementById('recordings-empty').hidden = recordings.length > 0;

    recordings.forEach((recording, index) => {
        const card = document.createElement('article');
        card.className = 'recording-card';
        const title = document.createElement('h3');
        title.textContent = recording.titulo || `Gravação ${index + 1}`;
        card.append(title);
        if (recording.data) {
            const date = document.createElement('p');
            date.className = 'recording-date';
            date.textContent = recording.data;
            card.append(date);
        }
        const player = document.createElement('audio');
        player.controls = true;
        player.preload = 'metadata';
        player.src = `audios/${recording.arquivo.split('/').map(encodeURIComponent).join('/')}`;
        player.setAttribute('aria-label', `Ouvir ${title.textContent}`);
        player.addEventListener('play', () => {
            list.querySelectorAll('audio').forEach(other => {
                if (other !== player) other.pause();
            });
        });
        const error = document.createElement('p');
        error.className = 'recording-error';
        error.hidden = true;
        error.setAttribute('role', 'status');
        error.textContent = 'Não foi possível reproduzir esta gravação.';
        player.addEventListener('error', () => { error.hidden = false; });
        card.append(player, error);
        list.append(card);
    });

    const screen = document.getElementById('voice-recordings');
    new MutationObserver(() => {
        if (!screen.classList.contains('active')) {
            list.querySelectorAll('audio').forEach(player => player.pause());
        }
    }).observe(screen, { attributes: true, attributeFilter: ['class'] });
}
