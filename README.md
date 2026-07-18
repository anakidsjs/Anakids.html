# 🌸 ANAKIDS - Sistema Comercial

Sistema completo para gestão da loja, pronto para ser instalado como aplicativo no computador.

## 📁 O que tem nesta pasta

- `index.html` — o sistema completo (única página, funciona sozinho)
- `manifest.json` — arquivo que permite "instalar" o sistema como app
- `sw.js` — service worker, permite abrir o app mesmo sem internet
- `icons/` — ícone do ANAKIDS em vários tamanhos (fundo branco)
- `logo-white-square.png` e `logo-transparent.png` — logo isolada, caso queira usar em outro lugar

## 🚀 Passo 1: Colocar no GitHub

1. Crie uma conta em https://github.com (se ainda não tiver)
2. Clique em **New repository** (Novo repositório)
3. Dê um nome, por exemplo `anakids-sistema`
4. Marque como **Public** (precisa ser público para o GitHub Pages funcionar de graça)
5. Clique em **Create repository**
6. Clique em **uploading an existing file** (ou arraste os arquivos)
7. Arraste TODOS os arquivos desta pasta (`index.html`, `manifest.json`, `sw.js`, a pasta `icons` inteira e os dois PNGs da logo)
8. Clique em **Commit changes**

## 🌐 Passo 2: Ativar o GitHub Pages (para ter um link de acesso)

1. No repositório, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Branch**, selecione `main` e a pasta `/ (root)`
4. Clique em **Save**
5. Aguarde 1 a 2 minutos. Vai aparecer um link tipo:
   `https://seu-usuario.github.io/anakids-sistema/`

Esse é o endereço do seu sistema na internet.

## 💻 Passo 3: Instalar como app no PC

1. Abra o link do GitHub Pages no **Google Chrome** ou **Microsoft Edge**
2. Do lado direito da barra de endereço, vai aparecer um ícone de **instalar** (um monitor com uma setinha, ou três pontinhos > "Instalar ANAKIDS...")
3. Clique em **Instalar**
4. Pronto — o sistema vira um app com ícone próprio, abre em janela separada (sem barra do navegador) e fica disponível na área de trabalho e no menu iniciar, como qualquer outro programa

### Se o botão de instalar não aparecer
- Confirme que está acessando pelo endereço `https://...github.io/...` (precisa ser https, não abre instalando direto do arquivo local)
- No Chrome: menu (⋮) > "Instalar ANAKIDS..."
- No Edge: menu (⋯) > Apps > "Instalar este site como um aplicativo"

## ⚠️ Importante sobre os dados do sistema

Este sistema guarda os dados (vendas, produtos, caixa) no navegador de quem está usando. Isso significa:
- Os dados ficam salvos no computador/navegador onde o app foi instalado
- Se limpar os dados do navegador, os dados do sistema também somem
- Cada computador/instalação terá seus próprios dados separados (não sincroniza sozinho entre PCs)

Se precisar que os dados sejam compartilhados entre vários computadores ou funcionários ao mesmo tempo, isso exigiria evoluir o sistema para usar um banco de dados online — posso te ajudar com isso depois, se quiser.
