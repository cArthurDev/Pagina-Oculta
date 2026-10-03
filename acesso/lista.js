(() => {
  const root = new URL('../', document.currentScript.src);
  const params = new URLSearchParams(window.location.search);
  const caseId = params.get('caso');
  const data = Object.hasOwn(window.CASOS, caseId) ? window.CASOS[caseId] : null;
  const destinationFor = data => {
    const destination = new URL(data.acesso, root);
    if (params.has('secao')) destination.searchParams.set('secao', params.get('secao'));
    return destination.href;
  };
  if (data) {
    window.location.replace(destinationFor(data));
    return;
  }
  if (caseId) document.querySelector('#error').textContent = 'Caso n?o encontrado. Abra um dos casos dispon?veis.';
  Object.values(window.CASOS).forEach(data => {
    const link = document.createElement('a');
    link.className = 'access-open case-link';
    link.href = destinationFor(data);
    link.textContent = data.titulo;
    document.querySelector('#case-links').append(link);
  });
})();
