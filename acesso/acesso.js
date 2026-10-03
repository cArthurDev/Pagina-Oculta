(() => {
  const root = new URL('../', document.currentScript.src);
  const params = new URLSearchParams(window.location.search);
  const section = params.get('secao') || 'interrogatorio';
  const caseId = document.documentElement.dataset.caso;
  const password = document.querySelector('#password');
  const error = document.querySelector('#error');
  const card = document.querySelector('#case-card');
  const open = document.querySelector('#open-pin');
  const pinArea = document.querySelector('#pin-area');
  const showCase = () => {
    const data = window.CASOS[caseId];
    password.value = '';
    error.textContent = '';
    pinArea.hidden = true;
    card.hidden = !data;
    open.hidden = !data;
    if (!data) {
      error.textContent = 'Caso não encontrado. Escolha um caso disponível.';
      return;
    }
    document.querySelector('#case-code').textContent = data.codigo;
    document.querySelector('#case-title').textContent = data.titulo;
    card.style.backgroundImage = `linear-gradient(to bottom,transparent 30%,rgba(0,0,0,.96)),url("${new URL(data.imagem, root).href}")`;
    password.maxLength = data.senha.length;
  };
  const submit = () => {
    const data = window.CASOS[caseId];
    if (!data) return;
    if (password.value !== data.senha) {
      error.textContent = 'Senha incorreta · acesso negado';
      password.value = '';
      password.focus();
      return;
    }
    if (!Object.hasOwn(data.paginas, section)) {
      error.textContent = 'Esta seção não está disponível para este caso.';
      return;
    }
    try { sessionStorage.setItem(`caso:${caseId}`, 'ok'); }
    catch {
      error.textContent = 'Permita o armazenamento da sessão no navegador para continuar.';
      return;
    }
    window.location.replace(new URL(data.paginas[section], root).href);
  };
  open.addEventListener('click', () => {
    card.hidden = true;
    open.hidden = true;
    pinArea.hidden = false;
    password.focus();
  });
  document.querySelector('#back').addEventListener('click', showCase);
  document.querySelector('#access-form').addEventListener('submit', event => {
    event.preventDefault();
    submit();
  });
  password.addEventListener('input', () => { error.textContent = ''; });
  [1,2,3,4,5,6,7,8,9,'clear',0,'back'].forEach(key => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = key === 'clear' ? 'limpar' : key === 'back' ? '←' : key;
    if (typeof key === 'string') button.className = 'clear';
    if (key === 'back') button.setAttribute('aria-label', 'Apagar último dígito');
    button.addEventListener('click', () => {
      error.textContent = '';
      if (key === 'clear') password.value = '';
      else if (key === 'back') password.value = password.value.slice(0, -1);
      else if (password.value.length < password.maxLength) password.value += key;
      if (password.value.length === password.maxLength) submit();
    });
    document.querySelector('#keypad').append(button);
  });
  showCase();
})();
