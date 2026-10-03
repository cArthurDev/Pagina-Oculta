(() => {
  const root = new URL('../', document.currentScript.src);
  const caseId = document.documentElement.dataset.caso;
  const section = document.documentElement.dataset.secao;
  const caseData = window.CASOS[caseId];
  let allowed = false;
  try { allowed = sessionStorage.getItem(`caso:${caseId}`) === 'ok'; } catch {}
  allowed = Boolean(allowed && caseData && Object.hasOwn(caseData.paginas, section));
  window.CaseAccess = { allowed };
  if (!allowed) {
    document.documentElement.style.visibility = 'hidden';
    const destination = new URL(caseData?.acesso || 'acesso/index.html', root);
    if (!caseData) destination.searchParams.set('caso', caseId);
    destination.searchParams.set('secao', section);
    window.location.replace(destination.href);
  }
})();
