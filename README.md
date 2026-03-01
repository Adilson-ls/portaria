# Portaria App

Este é um projeto simples em React que demonstra uma interface de controle de portaria comum em condomínios ou prédios comerciais. Se você nunca trabalhou com programação antes, não se preocupe — abaixo está uma explicação em termos leigos do que cada parte do código faz.

---

## 📁 Estrutura Básica

- **`package.json`**: lista as dependências necessárias (bibliotecas que o projeto usa) e os comandos que você pode executar, como iniciar o app.
- **`src/`**: pasta onde está todo o código que roda no navegador.
  - **`App.jsx`**: componente principal que monta a interface e controla a navegação entre as telas.
  - **`index.js`**: ponto de entrada que diz ao navegador para exibir o `App`.
  - **`index.css`**: estilos básicos aplicados à página.

---

## 🧩 O que é React?
React é uma biblioteca JavaScript feita pelo Facebook para construir interfaces de usuário. Pense nele como um conjunto de peças de Lego: você cria pequenas partes (chamadas de *componentes*) e depois monta tudo junto para formar a página.

### 🔄 Componentes e Estado
No `App`, temos algo chamado **estado** (`useState`). É como uma caixinha que guarda informação atual, por exemplo:
```js
const [currentView, setCurrentView] = useState('home');
```
Isso significa "qual tela devo mostrar agora?". Quando alguém clica em um botão, chamamos `setCurrentView` para alterar a caixinha e o React redesenha a interface com a nova tela.

### 🧭 Navegação simples
A função `navigateTo` muda a "tela" atual, alternando entre as visualizações de `HomeView` e `PortariaView`.

---

## 💻 O que acontece dentro da interface?
O código mostra uma página com cabeçalho fixo e várias seções:

- **Cabeçalho** com botão de menu, logo e área do usuário.
- **Botão flutuante** no canto para iniciar uma ação (como enviar mensagem).
- **HomeView** com vários blocos (cadastros, mensagens, documentos etc.). Cada bloco é clicável, alguns apenas ilustrativos e outro leva para a tela de portaria.
- **PortariaView** com um painel mais detalhado, incluindo cadastro de visitas, visitantes ativos, mensagens, reservas, correspondências e chaves.

As telas usam **ícones** da biblioteca [lucide-react](https://lucide.dev/) para dar um visual moderno.

---

## 🛠️ Como rodar este projeto
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Abra o terminal na pasta do projeto e execute:
   ```bash
   npm install
   npm start
   ```
3. Uma janela do navegador abrirá em `http://localhost:3000` mostrando a interface.


---

## 📝 Para que serve este código?
Ele é um exemplo de como montar uma aplicação de administração de portaria/condomínio. Usando React, você pode facilmente estender cada seção para buscar informações reais de um servidor, permitir edição, adicionar formulários, etc.

Mesmo que você não entenda cada linha, a ideia principal é: o código descreve a aparência e o comportamento da página usando pedaços reutilizáveis que o React mantém organizados e atualiza automaticamente quando os dados mudam.

Se quiser aprender mais, comece brincando com o `App.jsx` e veja como pequenas alterações (como mudar texto ou cores) se refletem instantaneamente quando a página recarrega.

---

Boa sorte e divirta-se explorando! 😊
