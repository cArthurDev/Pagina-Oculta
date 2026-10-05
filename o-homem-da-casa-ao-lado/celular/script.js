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
    "sandra": {
        "nome": "Sandra Imóveis",
        "mensagens": [
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "Oi dona Sandra, tudo bem?" },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Oi Laura. Tudo sim. Aconteceu alguma coisa?" },
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "queria perguntar sobre a casa 118 aqui da rua" },
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "é a senhora que cuida dela né?" },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Sou responsável pelo imóvel, sim. Por quê?" },
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "ela tá vazia mesmo?" },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Está. Há bastante tempo." },
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "é que tenho visto luz acesa lá de noite" },
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "e às vezes parece ter alguém na janela" },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Laura, aquela casa está fechada." },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Você tem certeza do que viu?" },
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "tenho" },
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "alguém além da senhora tem a chave?" },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Por que quer saber isso?" },
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "pq se tá vazia alguém deve estar entrando" },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Eu tenho uma chave por causa da imobiliária." },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Mas não entro naquela casa sem necessidade." },
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "quando foi a última vez que a senhora entrou?" },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Não lembro exatamente." },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Já faz algum tempo." },
            { "dia": "09/10", "hora": "11:42", "tipo": "enviada", "texto": "entendi" },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Laura, não tente entrar lá." },
            { "dia": "09/10", "hora": "11:42", "tipo": "recebida", "texto": "Se realmente estiver acontecendo alguma coisa, deixe que eu resolvo." },
            { "dia": "12/10", "hora": "22:51", "tipo": "enviada", "texto": "dona Sandra desculpa mandar essa hora" },
            { "dia": "12/10", "hora": "22:51", "tipo": "enviada", "texto": "a luz acendeu de novo" },
            { "dia": "12/10", "hora": "22:51", "tipo": "recebida", "texto": "Na 118?" },
            { "dia": "12/10", "hora": "22:51", "tipo": "enviada", "texto": "sim" },
            { "dia": "12/10", "hora": "22:51", "tipo": "enviada", "texto": "tem alguém na janela de novo" },
            { "dia": "12/10", "hora": "22:51", "tipo": "recebida", "texto": "Você está olhando para a casa agora?" },
            { "dia": "12/10", "hora": "22:51", "tipo": "enviada", "texto": "tô" },
            { "dia": "12/10", "hora": "22:51", "tipo": "recebida", "texto": "Então pare de olhar e fique dentro de casa." },
            { "dia": "12/10", "hora": "22:51", "tipo": "enviada", "texto": "a senhora não quer vir ver?" },
            { "dia": "12/10", "hora": "22:51", "tipo": "recebida", "texto": "Agora não." },
            { "dia": "12/10", "hora": "22:51", "tipo": "enviada", "texto": "mas se ninguém pode estar lá…" },
            { "dia": "12/10", "hora": "22:51", "tipo": "recebida", "texto": "Laura, já disse que vou verificar." },
            { "dia": "12/10", "hora": "22:51", "tipo": "recebida", "texto": "Não entre naquela casa." },
            { "dia": "12/10", "hora": "22:51", "tipo": "enviada", "texto": "tá bom" },
            { "dia": "12/10", "hora": "22:51", "tipo": "recebida", "texto": "E, por favor, não mexa no portão nem tente descobrir sozinha quem está lá." }
        ]
    },
    "octavio": {
        "nome": "Otávio",
        "mensagens": [
            { "dia": "30/09", "hora": "16:18", "tipo": "enviada", "texto": "Oi seu Otávio, boa tarde" },
            { "dia": "30/09", "hora": "16:18", "tipo": "recebida", "texto": "Oi Laura! Boa tarde 😊" },
            { "dia": "30/09", "hora": "16:18", "tipo": "enviada", "texto": "Meu aniversário tá chegando e queria ver uns vestidos" },
            { "dia": "30/09", "hora": "16:18", "tipo": "enviada", "texto": "tem algum mais arrumadinho? mas não muito chique kkk" },
            { "dia": "30/09", "hora": "16:18", "tipo": "recebida", "texto": "Tenho sim. Chegaram alguns essa semana" },
            { "dia": "30/09", "hora": "16:18", "tipo": "recebida", "texto": "Vou te mandar umas opções.", "fotosSequenciais": "otavio" },
            { "dia": "30/09", "hora": "16:18", "tipo": "enviada", "texto": "gostei mais desse vermelho com brilho 😭❤️" },
            { "dia": "30/09", "hora": "16:18", "tipo": "enviada", "texto": "acho que vou ficar com ele mesmo" },
            { "dia": "30/09", "hora": "16:18", "tipo": "enviada", "texto": "consegue reservar pra mim até dia 18? Quero usar no meu aniversário" },
            { "dia": "30/09", "hora": "16:18", "tipo": "recebida", "texto": "Consigo sim 😊" },
            { "dia": "30/09", "hora": "16:18", "tipo": "recebida", "texto": "Vou deixar separado no seu tamanho até o dia 18." },
            { "dia": "30/09", "hora": "16:18", "tipo": "enviada", "texto": "perfeitooo, obrigada seu Otávio ❤️" },
            { "dia": "30/09", "hora": "16:18", "tipo": "recebida", "texto": "Por nada, Laura 😊" },
            { "dia": "30/09", "hora": "16:18", "tipo": "recebida", "texto": "Está reservado." }
        ]
    },
    "daniel": {
        "nome": "Daniel",
        "mensagens": [
            { "dia": "13/10", "hora": "18:42", "tipo": "enviada", "texto": "oi" },
            { "dia": "13/10", "hora": "18:42", "tipo": "recebida", "texto": "aconteceu alguma coisa?" },
            { "dia": "13/10", "hora": "18:42", "tipo": "enviada", "texto": "preciso te pedir uma coisa" },
            { "dia": "13/10", "hora": "18:42", "tipo": "recebida", "texto": "fala" },
            { "dia": "13/10", "hora": "18:42", "tipo": "enviada", "texto": "vc ainda tem aquela lanterna grande no carro?" },
            { "dia": "13/10", "hora": "18:42", "tipo": "recebida", "texto": "tenho pq" },
            { "dia": "13/10", "hora": "18:42", "tipo": "enviada", "texto": "preciso entrar num lugar" },
            { "dia": "13/10", "hora": "18:42", "tipo": "recebida", "texto": "que lugar?" },
            { "dia": "13/10", "hora": "18:42", "tipo": "enviada", "texto": "naquela casa na minha frente" },
            { "dia": "13/10", "hora": "18:42", "tipo": "recebida", "texto": "nem fudendo Laura" },
            { "dia": "13/10", "hora": "18:42", "tipo": "enviada", "texto": "é sério" },
            { "dia": "13/10", "hora": "18:42", "tipo": "recebida", "texto": "justamente por isso" },
            { "dia": "13/10", "hora": "18:42", "tipo": "recebida", "texto": "vc ta ficando obcecada com essa casa" },
            { "dia": "13/10", "hora": "18:42", "tipo": "enviada", "texto": "eu só quero entrar e ver uma coisa" },
            { "dia": "13/10", "hora": "18:42", "tipo": "recebida", "texto": "não" },
            { "dia": "13/10", "hora": "18:42", "tipo": "enviada", "texto": "então pelo menos vem aqui amanhã" },
            { "dia": "13/10", "hora": "18:42", "tipo": "recebida", "texto": "pra que" },
            { "dia": "13/10", "hora": "18:42", "tipo": "enviada", "texto": "quero te mostrar umas fotos" },
            { "dia": "13/10", "hora": "18:42", "tipo": "recebida", "texto": "fotos de que?" },
            { "dia": "13/10", "hora": "18:42", "tipo": "enviada", "texto": "amanhã eu explico" },
            { "dia": "14/10", "hora": "17:21", "tipo": "recebida", "texto": "cheguei" },
            { "dia": "14/10", "hora": "17:21", "tipo": "enviada", "texto": "to descendo" }
        ]
    },
    "julia": {
        "nome": "Júlia",
        "mensagens": [
            { "dia": "14/10", "hora": "09:26", "tipo": "recebida", "texto": "vc fez a parte da maquete?" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "quase" },
            { "dia": "14/10", "hora": "09:26", "tipo": "recebida", "texto": "“quase” = não fez" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "cala boca kkkkk" },
            { "dia": "14/10", "hora": "09:26", "tipo": "recebida", "texto": "vai amanhã?" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "vou" },
            { "dia": "14/10", "hora": "09:26", "tipo": "recebida", "texto": "vc ta estranha esses dias" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "dormindo mal" },
            { "dia": "14/10", "hora": "09:26", "tipo": "recebida", "texto": "por causa daquela casa ainda?" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "um pouco" },
            { "dia": "14/10", "hora": "09:26", "tipo": "recebida", "texto": "esquece isso menina" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "queria" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "mas ontem aconteceu uma coisa" },
            { "dia": "14/10", "hora": "09:26", "tipo": "recebida", "texto": "oq?" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "eu fiquei olhando a janela por quase uma hora" },
            { "dia": "14/10", "hora": "09:26", "tipo": "recebida", "texto": "psicopata kkkkk" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "não é isso" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "a figura não se mexeu nenhuma vez" },
            { "dia": "14/10", "hora": "09:26", "tipo": "recebida", "texto": "e?" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "uma pessoa se mexeria." },
            { "dia": "14/10", "hora": "09:26", "tipo": "recebida", "texto": "para 😭" },
            { "dia": "14/10", "hora": "09:26", "tipo": "enviada", "texto": "to falando sério" }
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
                "texto": "mas hoje tinha alguém na janela"
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
                "texto": "ela falava de uma casa vazia também"
            },
            {
                "dia": "12/10",
                "hora": "00:03",
                "tipo": "recebida",
                "texto": "isso não quer dizer que seja a mesma coisa"
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
                "texto": "mas é estranho demais"
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
                "texto": "só que tem uma coisa estranha"
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
                "texto": "ela tá sempre no MESMO lugar"
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
                "texto": "mesma posição"
            },
            {
                "dia": "13/10",
                "hora": "23:48",
                "tipo": "enviada",
                "texto": "até a cabeça parece igual"
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
                "texto": "amanhã te mostro"
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
                "texto": "se eu estiver certa tem algo a mais por trás da mulher na janela"
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

// Carrega foto1.png, foto2.png etc. até encontrar o primeiro arquivo ausente.
async function carregarFotosDaMensagem(container, mensagem, nome) {
    for (let numero = 1; container.isConnected; numero++) {
        const image = new Image();
        image.alt = `Foto ${numero} enviada por ${nome}`;
        const carregou = await new Promise(resolve => {
            image.onload = () => resolve(true);
            image.onerror = () => resolve(false);
            image.src = `${mensagem.fotosSequenciais}/foto${numero}.png`;
        });
        if (!carregou || !container.isConnected) break;

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble received message-photo';
        const photo = document.createElement('button');
        photo.type = 'button';
        photo.className = 'message-photo-button';
        photo.setAttribute('aria-label', `Abrir imagem: ${image.alt}`);
        photo.addEventListener('click', () => abrirImagemGaleria(image));
        photo.append(image);
        const time = document.createElement('span');
        time.className = 'message-time';
        time.textContent = mensagem.hora;
        bubble.append(photo, time);
        container.append(bubble);
    }
}

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
        if (mensagem.fotosSequenciais) {
            const photos = document.createElement('div');
            photos.className = 'message-photos';
            conversationHistory.append(photos);
            carregarFotosDaMensagem(photos, mensagem, conversa.nome);
        }
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
