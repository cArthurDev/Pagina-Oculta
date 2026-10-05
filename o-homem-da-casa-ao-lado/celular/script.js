if (window.CaseAccess?.allowed) {
// Fotos cadastradas na pasta galeria.
const galleryPhotos = document.getElementById('gallery-photos');
const galleryImages = window.IMAGENS_GALERIA || [];
const galleryViewer = document.getElementById('gallery-viewer');
const galleryFullImage = document.getElementById('gallery-full-image');
const galleryCaption = document.getElementById('gallery-caption');

function abrirImagemGaleria(image) {
    galleryFullImage.src = image.src;
    galleryFullImage.alt = image.alt;
    galleryCaption.textContent = image.alt;
    galleryViewer.showModal();
}

document.getElementById('gallery-close').addEventListener('click', () => galleryViewer.close());
galleryViewer.addEventListener('click', (event) => {
    if (event.target === galleryViewer) galleryViewer.close();
});
galleryViewer.addEventListener('close', () => {
    galleryFullImage.removeAttribute('src');
});

document.getElementById('gallery-empty').hidden = galleryImages.length > 0;
galleryImages.forEach(({ arquivo, descricao }, index) => {
    const photo = document.createElement('button');
    photo.type = 'button';
    photo.className = 'photo';
    const image = document.createElement('img');
    image.src = `galeria/${arquivo}`;
    image.alt = descricao || `Foto ${index + 1}`;
    image.loading = 'lazy';
    photo.setAttribute('aria-label', `Abrir imagem: ${image.alt}`);
    photo.addEventListener('click', () => abrirImagemGaleria(image));
    photo.append(image);
    galleryPhotos.append(photo);
});

// Edite os textos abaixo para personalizar o histórico de cada conversa.
const conversas = {
    "mae": {
        "nome": "Mãe",
        "mensagens": [
            { "dia": "13/10", "hora": "12:08", "tipo": "recebida", "texto": "Filha vai almoçar em casa?" },
            { "dia": "13/10", "hora": "12:08", "tipo": "enviada", "texto": "acho que sim" },
            { "dia": "13/10", "hora": "12:08", "tipo": "recebida", "texto": "Se vier compra leite" },
            { "dia": "13/10", "hora": "12:08", "tipo": "enviada", "texto": "ta bom" },
            { "dia": "13/10", "hora": "12:08", "tipo": "recebida", "texto": "E não esquece que sua tia perguntou do domingo" },
            { "dia": "13/10", "hora": "12:08", "tipo": "enviada", "texto": "eu sei mãe kkkkk" },
            { "dia": "13/10", "hora": "12:08", "tipo": "recebida", "texto": "22 anos só uma vez" },
            { "dia": "13/10", "hora": "12:08", "tipo": "enviada", "texto": "nem fiz 22 ainda 😭" },
            { "dia": "13/10", "hora": "12:08", "tipo": "recebida", "texto": "faltam poucos dias" },
            { "dia": "14/10", "hora": "20:31", "tipo": "recebida", "texto": "Vou dormir cedo hoje" },
            { "dia": "14/10", "hora": "20:31", "tipo": "enviada", "texto": "ta" },
            { "dia": "14/10", "hora": "20:31", "tipo": "recebida", "texto": "Não fica até tarde estudando" },
            { "dia": "14/10", "hora": "20:31", "tipo": "enviada", "texto": "não vou" },
            { "dia": "14/10", "hora": "20:31", "tipo": "recebida", "texto": "boa noite filha ❤️" },
            { "dia": "14/10", "hora": "20:31", "tipo": "enviada", "texto": "boa noite ❤️" }
        ]
    },
    "bianca": {
        "nome": "Bianca",
        "mensagens": [
            {
                "dia": "11/10",
                "hora": "22:17",
                "tipo": "enviada",
                "texto": "amiga ta acordada?"
            },
            {
                "dia": "11/10",
                "hora": "22:17",
                "tipo": "recebida",
                "texto": "infelizmente kkkkk"
            },
            {
                "dia": "11/10",
                "hora": "22:17",
                "tipo": "enviada",
                "texto": "a luz acendeu de novo"
            },
            {
                "dia": "11/10",
                "hora": "22:17",
                "tipo": "recebida",
                "texto": "naquela casa?"
            },
            {
                "dia": "11/10",
                "hora": "22:17",
                "tipo": "enviada",
                "texto": "sim"
            },
            {
                "dia": "11/10",
                "hora": "22:17",
                "tipo": "recebida",
                "texto": "laura vc precisa parar de ficar olhando isso"
            },
            {
                "dia": "11/10",
                "hora": "22:17",
                "tipo": "enviada",
                "texto": "eu tentei"
            },
            {
                "dia": "11/10",
                "hora": "22:17",
                "tipo": "enviada",
                "texto": "mas hoje tinha algu?m na janela"
            },
            {
                "dia": "11/10",
                "hora": "22:17",
                "tipo": "recebida",
                "texto": "de novo aquela mulher?"
            },
            {
                "dia": "11/10",
                "hora": "22:17",
                "tipo": "enviada",
                "texto": "parecia"
            },
            {
                "dia": "12/10",
                "hora": "00:03",
                "tipo": "enviada",
                "texto": "lembra da Camila que te falei?"
            },
            {
                "dia": "12/10",
                "hora": "00:03",
                "tipo": "recebida",
                "texto": "lembro"
            },
            {
                "dia": "12/10",
                "hora": "00:03",
                "tipo": "enviada",
                "texto": "achei umas coisas sobre o caso dela"
            },
            {
                "dia": "12/10",
                "hora": "00:03",
                "tipo": "recebida",
                "texto": "laura pelo amor de deus"
            },
            {
                "dia": "12/10",
                "hora": "00:03",
                "tipo": "enviada",
                "texto": "ela falava de uma casa vazia tamb?m"
            },
            {
                "dia": "12/10",
                "hora": "00:03",
                "tipo": "recebida",
                "texto": "isso n?o quer dizer que seja a mesma coisa"
            },
            {
                "dia": "12/10",
                "hora": "00:03",
                "tipo": "enviada",
                "texto": "eu sei"
            },
            {
                "dia": "12/10",
                "hora": "00:03",
                "tipo": "enviada",
                "texto": "mas ? estranho demais"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "enviada",
                "texto": "tirei mais fotos"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "recebida",
                "texto": "conseguiu pegar ela?"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "enviada",
                "texto": "consegui"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "enviada",
                "texto": "s? que tem uma coisa estranha"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "recebida",
                "texto": "oq"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "enviada",
                "texto": "comparei com as outras"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "enviada",
                "texto": "ela t? sempre no MESMO lugar"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "recebida",
                "texto": "como assim?"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "enviada",
                "texto": "mesma posi??o"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "enviada",
                "texto": "at? a cabe?a parece igual"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "recebida",
                "texto": "credo"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "enviada",
                "texto": "amanh? te mostro"
            },
            {
                "dia": "14/10",
                "hora": "23:37",
                "tipo": "enviada",
                "texto": "bia"
            },
            {
                "dia": "14/10",
                "hora": "23:37",
                "tipo": "recebida",
                "texto": "oi"
            },
            {
                "dia": "14/10",
                "hora": "23:37",
                "tipo": "enviada",
                "texto": "acho que descobri uma coisa"
            },
            {
                "dia": "14/10",
                "hora": "23:37",
                "tipo": "recebida",
                "texto": "sobre a casa?"
            },
            {
                "dia": "14/10",
                "hora": "23:37",
                "tipo": "enviada",
                "texto": "sim"
            },
            {
                "dia": "14/10",
                "hora": "23:37",
                "tipo": "enviada",
                "texto": "se eu estiver certa tem algo a mais por tr?s da mulher na janela"
            },
            {
                "dia": "14/10",
                "hora": "23:37",
                "tipo": "recebida",
                "texto": "oq vc descobriu?"
            },
            {
                "dia": "14/10",
                "hora": "23:37",
                "tipo": "recebida",
                "texto": "Laura?"
            },
            {
                "dia": "14/10",
                "hora": "23:37",
                "tipo": "recebida",
                "texto": "???"
            },
            {
                "dia": "14/10",
                "hora": "23:37",
                "tipo": "recebida",
                "texto": "me responde"
            },
            {
                "dia": "15/10",
                "hora": "07:02",
                "tipo": "recebida",
                "texto": "Laura"
            },
            {
                "dia": "15/10",
                "hora": "07:02",
                "tipo": "recebida",
                "texto": "vc ta bem?"
            },
            {
                "dia": "15/10",
                "hora": "07:02",
                "tipo": "recebida",
                "texto": "me responde por favor"
            }
        ]
    }
};

const conversation = document.getElementById('conversation');
const conversationHistory = document.getElementById('conversation-history');
const conversationBack = document.getElementById('conversation-back');
const messagesList = document.querySelector('#messages > .app-content');
let conversaAberta = null;

// A lista acompanha os contatos e a ?ltima mensagem de cada conversa.
const chatList = document.querySelector('#messages .chat-list');
chatList.replaceChildren();
Object.entries(conversas).forEach(([id, conversa]) => {
    const ultimaMensagem = conversa.mensagens[conversa.mensagens.length - 1];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chat-item';
    button.dataset.conversa = id;

    const avatar = document.createElement('div');
    avatar.className = 'avatar bg-pink';
    avatar.textContent = conversa.nome.charAt(0);
    const preview = document.createElement('div');
    preview.className = 'chat-preview';
    const title = document.createElement('div');
    title.className = 'chat-title';
    const name = document.createElement('strong');
    name.textContent = conversa.nome;
    const time = document.createElement('span');
    time.className = 'chat-time';
    time.textContent = ultimaMensagem?.dia || '';
    const excerpt = document.createElement('p');
    excerpt.textContent = ultimaMensagem?.texto || '';
    title.append(name, time);
    preview.append(title, excerpt);
    button.append(avatar, preview);
    chatList.append(button);
});

function abrirConversa(button) {
    const conversa = conversas[button.dataset.conversa];
    if (!conversa) return;
    conversaAberta = button;
    document.getElementById('conversation-name').textContent = conversa.nome;
    conversationHistory.replaceChildren();
    let diaAnterior = null;
    conversa.mensagens.forEach(mensagem => {
        if (mensagem.dia && mensagem.dia !== diaAnterior) {
            const date = document.createElement('p');
            date.className = 'message-date';
            date.textContent = mensagem.dia;
            conversationHistory.append(date);
            diaAnterior = mensagem.dia;
        }
        const bubble = document.createElement('div');
        bubble.className = `message-bubble ${mensagem.tipo === 'enviada' ? 'sent' : 'received'}`;
        const text = document.createElement('p');
        text.textContent = mensagem.texto;
        const time = document.createElement('span');
        time.className = 'message-time';
        time.textContent = mensagem.hora;
        bubble.setAttribute('aria-label', `${mensagem.tipo === 'enviada' ? 'Você' : conversa.nome}, ${mensagem.hora}`);
        bubble.append(text, time);
        conversationHistory.append(bubble);
    });
    button.classList.remove('unread');
    messagesList.hidden = true;
    conversation.hidden = false;
    conversationHistory.scrollTop = conversationHistory.scrollHeight;
    conversationBack.focus();
}

function fecharConversa(restaurarFoco = true) {
    conversation.hidden = true;
    messagesList.hidden = false;
    if (restaurarFoco && conversaAberta) conversaAberta.focus();
    conversaAberta = null;
}

document.querySelectorAll('[data-conversa]').forEach(button => {
    button.addEventListener('click', () => abrirConversa(button));
});
conversationBack.addEventListener('click', () => fecharConversa());
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !conversation.hidden && !galleryViewer.open) fecharConversa();
});

// Edite os textos completos dos emails abaixo.
const textosEmails = {
    'pare de olhar': 'Você está olhando para a casa errada.\n\nPare de olhar.',
    'Movimento detectado': 'Atividade registrada pela câmera externa às 02:17.\n\nConsulte as imagens da câmera para verificar o movimento detectado.',
    'RE: Planta do imóvel 118': 'Laura,\n\nEncontrei uma planta antiga do imóvel 118. Existe uma entrada de serviço nos fundos.\n\nSandra Moura',
    'Seu pedido foi enviado': 'Seu produto já está a caminho.\n\nPedido: Mini câmera Wi-Fi.\n\nObrigada por comprar na VisionTech!',
    'Protocolo de atendimento #84192': 'Em resposta à sua solicitação, informamos que não consta fornecimento ativo de energia para o imóvel nº 118.\n\nProtocolo de atendimento: #84192.\n\nCompanhia de Energia São Vale',
    'Sobre a casa 118': 'Laura,\n\nConforme conversamos, o imóvel está desocupado há bastante tempo.\n\nSandra Moura',
    'Você estava lá ontem?': 'Laura,\n\nPassei na rua e achei que tinha visto você perto daquela casa. Você estava lá ontem?\n\nDaniel',
    'RE: Rua das Acácias': 'Laura,\n\nEu trabalho de madrugada e já te disse: não vi ninguém entrando naquela casa.\n\nRicardo Vasconcelos',
    'você precisa parar com isso': 'Laura,\n\nEu acredito em você, mas ficar olhando aquela janela toda madrugada está te fazendo mal. Você precisa descansar.\n\nBianca',
    'Só queria conversar': 'Laura,\n\nEu sei que você não quer falar comigo. Não vou insistir, mas só queria conversar. Se quiser, me responde quando puder.\n\nDaniel',
    'fotos de ontem kkkkk': 'Laura, tô te mandando as fotos porque no WhatsApp vai perder qualidade.\n\nDepois olha as fotos de ontem kkkkk.\n\nBianca',
    'Aviso acadêmico — alteração de sala': 'Prezados alunos,\n\nInformamos que a aula desta quinta-feira terá alteração de sala. Consulte a atualização no portal acadêmico antes da aula.\n\nFaculdade São Vale',
    'Orçamento elétrico': 'Laura,\n\nSobre o problema que você comentou na iluminação externa, precisamos avaliar a instalação para preparar o orçamento. Me avise quando puder agendar uma visita.\n\nMarcelo Azevedo'
};
const emailMessage = document.getElementById('email-message');
const emailBack = document.getElementById('email-back');
const emailList = document.querySelector('#email > .app-content');
const emailDetail = document.querySelector('.email-detail');
let emailAberto = null;

function abrirEmail(button) {
    const assunto = button.querySelector('strong').textContent;
    document.getElementById('email-subject').textContent = assunto;
    document.getElementById('email-from').textContent = `De: ${button.querySelector('.email-sender').textContent}`;
    document.getElementById('email-body').textContent = textosEmails[assunto] || button.querySelector('p').textContent;
    emailAberto = button;
    button.classList.remove('unread');
    emailList.hidden = true;
    emailMessage.hidden = false;
    emailDetail.scrollTop = 0;
    emailBack.focus();
}

function fecharEmail(restaurarFoco = true) {
    emailMessage.hidden = true;
    emailList.hidden = false;
    if (restaurarFoco && emailAberto) emailAberto.focus();
    emailAberto = null;
}

document.querySelectorAll('button.email-item').forEach(button => {
    button.addEventListener('click', () => abrirEmail(button));
});
emailBack.addEventListener('click', () => fecharEmail());
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !emailMessage.hidden && !galleryViewer.open) fecharEmail();
});

// Leitura completa das notas, preservando as quebras de linha.
const noteReader = document.getElementById('note-reader');
const noteList = document.querySelector('#notes > .app-content');
const noteBack = document.getElementById('note-back');
let notaAberta = null;

function abrirNota(button) {
    notaAberta = button;
    document.getElementById('note-title').textContent = button.querySelector('strong').textContent;
    const texto = button.querySelector('p').cloneNode(true);
    texto.querySelectorAll('br').forEach(br => br.replaceWith('\n'));
    document.getElementById('note-body').textContent = button.dataset.texto || texto.textContent;
    noteList.hidden = true;
    noteReader.hidden = false;
    noteReader.querySelector('article').scrollTop = 0;
    noteBack.focus();
}

function fecharNota(restaurarFoco = true) {
    noteReader.hidden = true;
    noteList.hidden = false;
    if (restaurarFoco && notaAberta) notaAberta.focus();
    notaAberta = null;
}

document.querySelectorAll('button.note-item').forEach(button => {
    button.addEventListener('click', () => abrirNota(button));
});
noteBack.addEventListener('click', () => fecharNota());
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !noteReader.hidden && !galleryViewer.open) fecharNota();
});

// Atualizar relógio
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    clock.innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// Lógica de navegação dos aplicativos
const homeScreen = document.getElementById('home-screen');
const homeButton = document.getElementById('home-button');
const apps = document.querySelectorAll('.app-icon');
const screens = document.querySelectorAll('.screen');

let currentApp = null;

// Senha do enigma do celular: altere aqui para trocar o codigo.
const SENHA_CELULAR = '1810';
const lockScreen = document.getElementById('lock-screen');
const phonePassword = document.getElementById('phone-password');
const unlockError = document.getElementById('unlock-error');
let celularBloqueado = true;
const unlockForm = document.getElementById('unlock-form');
const passcodeDots = document.querySelector('.passcode-dots');

function atualizarCodigo() {
    passcodeDots.querySelectorAll('span').forEach((dot, index) => {
        dot.classList.toggle('filled', index < phonePassword.value.length);
    });
}

function digitarCodigo(digit) {
    if (!celularBloqueado || phonePassword.value.length >= 4) return;
    unlockError.textContent = '';
    phonePassword.removeAttribute('aria-invalid');
    phonePassword.value += digit;
    atualizarCodigo();
    if (phonePassword.value.length === 4) unlockForm.requestSubmit();
}

document.querySelectorAll('[data-digit]').forEach(button => {
    button.addEventListener('click', () => digitarCodigo(button.dataset.digit));
});
document.getElementById('unlock-delete').addEventListener('click', () => {
    phonePassword.value = phonePassword.value.slice(0, -1);
    atualizarCodigo();
});
document.getElementById('unlock-cancel').addEventListener('click', () => {
    phonePassword.value = '';
    unlockError.textContent = '';
    phonePassword.removeAttribute('aria-invalid');
    atualizarCodigo();
});
phonePassword.addEventListener('input', () => {
    phonePassword.value = phonePassword.value.replace(/\D/g, '').slice(0, 4);
    atualizarCodigo();
    if (phonePassword.value.length === 4) unlockForm.requestSubmit();
});
document.addEventListener('keydown', event => {
    if (!celularBloqueado || event.ctrlKey || event.metaKey || event.altKey) return;
    if (/^[0-9]$/.test(event.key)) {
        event.preventDefault();
        digitarCodigo(event.key);
    } else if (event.key === 'Backspace') {
        event.preventDefault();
        document.getElementById('unlock-delete').click();
    } else if (event.key === 'Escape') {
        document.getElementById('unlock-cancel').click();
    }
});

document.querySelectorAll('.app-view').forEach(screen => { screen.inert = true; });
document.getElementById('unlock-form').addEventListener('submit', event => {
    event.preventDefault();
    if (phonePassword.value !== SENHA_CELULAR) {
        unlockError.textContent = 'Senha incorreta. Tente novamente.';
        phonePassword.setAttribute('aria-invalid', 'true');
        phonePassword.value = '';
        atualizarCodigo();
        passcodeDots.classList.remove('rejected');
        void passcodeDots.offsetWidth;
        passcodeDots.classList.add('rejected');
        return;
    }
    celularBloqueado = false;
    phonePassword.value = '';
    atualizarCodigo();
    phonePassword.removeAttribute('aria-invalid');
    unlockError.textContent = '';
    lockScreen.classList.remove('active');
    lockScreen.inert = true;
    homeScreen.inert = false;
    document.querySelectorAll('.app-view').forEach(screen => { screen.inert = false; });
    homeScreen.classList.add('active');
    homeScreen.setAttribute('tabindex', '-1');
    homeScreen.focus();
});

// Abrir aplicativo
apps.forEach(app => {
    app.addEventListener('click', () => {
        if (celularBloqueado) return;
        const appId = app.getAttribute('data-app');
        const targetScreen = document.getElementById(appId);
        
        if (targetScreen) {
            // Esconde a home suavemente (efeito iOS)
            homeScreen.classList.remove('active');
            homeScreen.classList.add('inactive-left');
            
            // Mostra o app
            targetScreen.classList.add('active');
            currentApp = targetScreen;
        }
    });
});

// Fechar aplicativo (Voltar para Home)
function voltarParaInicio() {
    if (currentApp) {
        fecharConversa(false);
        fecharEmail(false);
        fecharNota(false);
        // Esconde o app atual
        currentApp.classList.remove('active');
        
        // Restaura a tela inicial
        homeScreen.classList.remove('inactive-left');
        homeScreen.classList.add('active');
        
        currentApp = null;
    }
}

homeButton.addEventListener('click', voltarParaInicio);
document.querySelectorAll('.app-back').forEach(button => {
    button.addEventListener('click', voltarParaInicio);
});

// Impede arrasto de imagens (para não estragar a imersão de celular)
document.addEventListener('dragstart', (e) => e.preventDefault());


// Calculadora: opera??es sequenciais, sem avaliar c?digo digitado.
const calculatorDisplay = document.getElementById('calculator-display');
let calcValue = '0';
let calcStored = null;
let calcOperator = null;
let calcNewEntry = false;

function atualizarCalculadora() {
    calculatorDisplay.textContent = calcValue.replace('.', ',');
}

function calcularOperacao() {
    const value = Number(calcValue);
    let result;
    switch (calcOperator) {
        case '+': result = calcStored + value; break;
        case '-': result = calcStored - value; break;
        case '*': result = calcStored * value; break;
        case '/': result = value === 0 ? NaN : calcStored / value; break;
        default: return;
    }
    calcValue = Number.isFinite(result) ? String(Number(result.toPrecision(12))) : 'Erro';
    calcStored = null;
    calcOperator = null;
}

function usarCalculadora(key) {
    if (key === 'clear' || calcValue === 'Erro') {
        calcValue = '0';
        calcStored = null;
        calcOperator = null;
        calcNewEntry = false;
        if (key === 'clear') { atualizarCalculadora(); return; }
    }
    if (/^[0-9]$/.test(key)) {
        if (calcNewEntry || calcValue === '0') calcValue = key;
        else if (calcValue.replace(/[-.]/g, '').length < 12) calcValue += key;
        calcNewEntry = false;
    } else if (key === '.') {
        if (calcNewEntry) calcValue = '0';
        if (!calcValue.includes('.')) calcValue += '.';
        calcNewEntry = false;
    } else if (key === 'sign') {
        if (Number(calcValue) !== 0) calcValue = calcValue.startsWith('-') ? calcValue.slice(1) : '-' + calcValue;
    } else if (key === 'percent') {
        calcValue = String(Number((Number(calcValue) / 100).toPrecision(12)));
    } else if (['+', '-', '*', '/'].includes(key)) {
        if (calcOperator && !calcNewEntry) calcularOperacao();
        if (calcValue !== 'Erro') {
            calcStored = Number(calcValue);
            calcOperator = key;
            calcNewEntry = true;
        }
    } else if (key === '=') {
        if (calcOperator) calcularOperacao();
        calcNewEntry = true;
    } else if (key === 'delete' && !calcNewEntry) {
        calcValue = calcValue.slice(0, -1);
        if (!calcValue || calcValue === '-') calcValue = '0';
    }
    atualizarCalculadora();
}

document.querySelectorAll('[data-calc]').forEach(button => {
    button.addEventListener('click', () => usarCalculadora(button.dataset.calc));
});
document.addEventListener('keydown', event => {
    if (celularBloqueado || currentApp?.id !== 'calculator' || event.ctrlKey || event.metaKey || event.altKey) return;
    const key = { Enter: '=', Escape: 'clear', Backspace: 'delete', ',': '.', '%': 'percent' }[event.key] || event.key;
    if (/^[0-9.+*/=-]$/.test(key) || ['clear', 'delete', 'percent'].includes(key)) {
        event.preventDefault();
        usarCalculadora(key);
    }
});

}
