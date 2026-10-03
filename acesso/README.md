# Acesso aos casos

A página `acesso/index.html` concentra a escolha do caso e a senha. O parâmetro
`secao` define para onde o visitante vai após entrar: `interrogatorio`,
`testemunhas`, `depoimentos`, `casoresolvido` ou `revelacao`.

Exemplo: `acesso/index.html?caso=quarto307&secao=testemunhas`.

## Adicionar um caso

1. Crie as páginas e os arquivos de conteúdo do novo caso.
2. Adicione uma entrada em `casos.js`, com identificador único, título, código,
   imagem, senha (texto, para preservar zeros iniciais) e os caminhos das seções.
3. Nas páginas do novo caso, use `<html lang="pt-BR" data-caso="identificador" data-secao="testemunhas">`,
   ajustando a seção para cada página.
4. Carregue `casos.js` e `acesso/controle.js` no `<head>`, nessa ordem,
   ajustando os caminhos relativos conforme a pasta.
5. Execute o JavaScript do conteúdo apenas quando `window.CaseAccess?.allowed`
   for verdadeiro, como nas páginas atuais.

O novo caso aparecerá automaticamente na seleção de acesso. A autorização
fica na sessão do navegador, separada por caso, e vale para todas as suas seções.

Este site usa validação no navegador, assim como o fluxo anterior. Senhas e
conteúdos enviados ao navegador não constituem proteção de servidor.
