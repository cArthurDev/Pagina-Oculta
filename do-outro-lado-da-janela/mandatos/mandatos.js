if (window.CaseAccess?.allowed) {
  const people = window.MANDATOS;
  const nav = document.querySelector('#people');
  const gallery = document.querySelector('#gallery');
  const viewer = document.querySelector('#viewer');
  let selected = 0;
  let photoIndex = 0;
  const photoUrl = index => new URL(`${encodeURIComponent(people[selected].pasta)}/${encodeURIComponent(people[selected].fotos[index])}`, document.baseURI).href;
  function showPhoto(index) {
    photoIndex = index;
    const person = people[selected];
    const caption = `${person.nome} · fotografia ${index + 1} de ${person.fotos.length}`;
    document.querySelector('#viewer-caption').textContent = caption;
    const image = document.querySelector('#viewer-image');
    image.src = photoUrl(index);
    image.alt = caption;

    document.querySelector('#previous').disabled = index === 0;
    document.querySelector('#next').disabled = index === person.fotos.length - 1;
  }
  function selectPerson(index) {
    selected = index;
    const person = people[index];
    [...nav.children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    document.querySelector('#person-name').textContent = person.nome;
    document.querySelector('#photo-count').textContent = `${person.fotos.length} ${person.fotos.length === 1 ? 'fotografia' : 'fotografias'}`;
    gallery.replaceChildren();
    if (!person.fotos.length) {
      const empty = document.createElement('div');
      empty.className = 'empty';
      empty.innerHTML = '<p>Nenhuma fotografia disponível.</p><small>Os documentos deste envolvido ainda não foram adicionados.</small>';
      gallery.append(empty);
    }
    person.fotos.forEach((file, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'photo';
      const image = document.createElement('img');
      image.src = photoUrl(i);
      image.alt = `Mandado de busca de ${person.nome} · fotografia ${i + 1}`;
      image.loading = 'lazy';
      image.addEventListener('error', () => { label.textContent = `Fotografia ${i + 1} indisponível`; button.disabled = true; });
      const label = document.createElement('span');
      label.textContent = `Fotografia ${String(i + 1).padStart(2, '0')} · ampliar ↗`;
      button.append(image, label);
      button.addEventListener('click', () => { showPhoto(i); viewer.showModal(); });
      gallery.append(button);
    });
  }
  people.forEach((person, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    const number = document.createElement('span');
    number.textContent = `ENVOLVIDO ${String(index + 1).padStart(2, '0')}`;
    button.append(number, document.createTextNode(person.nome));
    button.addEventListener('click', () => selectPerson(index));
    nav.append(button);
  });
  document.querySelector('#close-viewer').addEventListener('click', () => viewer.close());
  document.querySelector('#previous').addEventListener('click', () => { if (photoIndex > 0) showPhoto(photoIndex - 1); });
  document.querySelector('#next').addEventListener('click', () => { if (photoIndex < people[selected].fotos.length - 1) showPhoto(photoIndex + 1); });
  viewer.addEventListener('click', event => { if (event.target === viewer) { const box = viewer.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) viewer.close(); } });
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' && photoIndex > 0) showPhoto(photoIndex - 1);
    if (event.key === 'ArrowRight' && photoIndex < people[selected].fotos.length - 1) showPhoto(photoIndex + 1);
  });
  selectPerson(0);
}
