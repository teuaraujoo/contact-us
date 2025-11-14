# Formulário de Contato Disney

![Disney Contact Form](/src/assets/Design-final.png)

## 🎯 Sobre o Projeto

Cara, esse projeto é especial demais pra mim! É um formulário de contato inspirado na Disney que desenvolvi pra marcar meu **início nos estudos de JavaScript**. 

O projeto permite que o usuário envie uma mensagem preenchendo nome, sobrenome, email, telefone e a mensagem propriamente dita. **Os dados vão direto pro Google Sheets!** 📊

O design foi inspirado em um vídeo que vi no reels do Instagram e resolvi recriar do zero, adicionando minha própria identidade visual com as cores e logo da Disney pra deixar o projeto mais atrativo.

## 🚀 Demonstração

- **Deploy:** [Ver projeto online](https://forms-disney-delta-lac.vercel.app/)
- **Repositório:** [GitHub](https://github.com/teuaraujoo/contact-us)

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estruturação do formulário
- **CSS3** - Toda estilização e responsividade
- **JavaScript** - Validação e integração com Google Sheets
- **Google Apps Script** - Conexão com planilha
- **Flexbox** - Layout responsivo
- **CSS Keyframes** - Animações
- **Color Space** - CSS Gradient 
- **Font Awesome** - Ícones
- **UIVERSE** - Botões redes sociais
- **Google Fonts** - Tipografia
- **Vercel** - Deploy

## ✨ Funcionalidades

- ✅ Formulário de contato completo
- ✅ Validação de campos obrigatórios (nome e telefone)
- ✅ Mensagens de erro personalizadas
- ✅ Estilização do outline dos inputs em erro
- ✅ Integração automática com Google Sheets
- ✅ Animação fade-in na página toda
- ✅ Design responsivo com 3 breakpoints
- ✅ Gradient azul inspirado na Disney
- ✅ Ícones de redes sociais estilizados
- ✅ Logo Disney

## 🎨 Design

### Desktop (acima de 1224px)
- Gradient azul de um lado
- Formulário do outro lado
- Layout Horizontal 

### Mobile/Tablet (abaixo de 1224px)
- Gradient azul em cima
- Formulário embaixo
- Layout Vertical

### Breakpoints
- 📱 **728px** - Mobile
- 💻 **1224px** - Tablets/Telas portáteis
- 🖥️ **1440px** - Notebooks

## 🎨 Paleta de Cores

Usei diferentes tons de azul pra dar um ar mais leve e parecido ccom o da Disney:
- Gradient com tons de azul claro e escuro
- Visual clean e profissional

**Ferramentas usadas:**
- [Color Space](https://mycolor.space/) - Pra criar o gradient perfeito

## 📁 Estrutura de Pastas

Cara, nesse projeto eu melhorei MUITO minha organização das pastas. Ficou da seguinte forma:

```
contact-us/
├── index.html
├── src/
│   ├── 404page.html
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── logo/
│   ├── styles/
│   │   └── style.css
│   │   └── 404page.css
│   └── scripts/
│       └── script.js
└── README.md
```

Essa organização deixou tudo mais profissional e fácil de mexer depois!

## 🔥 Meu Marco em JavaScript

Esse projeto é **MUITO** especial pra mim porque marca meu início real nos estudos de JavaScript! 

### O que aprendi:

**JavaScript:**
- ✅ Validação de formulários
- ✅ Manipulação do DOM
- ✅ Event listeners
- ✅ Funções e declaração de variáveis
- ✅ Ordem de execução do código

## 💪 Desafios Superados

### A Parada Mais Difícil: Validação em JavaScript

Por ser meu primeiro contato mais sério com JS, errei muita coisa:
- Ordem errada das funções
- Declaração das variáveis no lugar errado
- Lógica confusa no começo

Mas sabe o melhor? **Conseguir resolver!** 

Depois de pesquisar bastante, assistir alguns vídeos, em especial, o vídeo do Sujeito Programador e ter mais calma pra entender o código, tudo fez sentido. Foi muito gratificante ver funcionando!

## 📚 Recursos que Me Ajudaram

Esses conteúdos salvaram minha vida:

1. **[Learning Axis - Google Sheets Integration](https://learning-axis.com/projects/google-sheets/)** - Explicação completa sobre a integração com Google Sheets
3. **[Sujeito Programador - YouTube](https://www.youtube.com/watch?v=k7iMlH5YyK8)** - Vídeo que me ajudou demais na validação

Recomendo MUITO esses dois pra quem tá começando!

## ✅ Validação de Campos

O formulário valida:

- **Nome** (obrigatório) - Não deixa enviar sem preencher
- **Telefone** (obrigatório) - Também é obrigatório

**Quando o usuário erra:**
- Aparece uma mensagem personalizada
- O outline do input fica estilizado (vermleho) pra mostrar o erro

## 📊 Integração com Google Sheets

Quando o usuário envia o formulário, os dados vão automaticamente pra uma planilha do Google Sheets que criei, com colunas:
- name
- lastname
- phone
- email
- menssage

**Como funciona:**
1. Usuário preenche o form
2. Clica em enviar
3. Mensagem de envio confirmado instântanea (nao tem a esperada do envio dos dados para o google sheets)
4. JavaScript valida os dados
5. Envia pro Google Apps Script
6. Script joga os dados na planilha

## 🎬 Animações

Implementei uma animação suave de **fade-in** na página inteira usando `@keyframes`!

Quando você entra no site, tudo aparece suavemente.

## 🎨 Recursos Visuais

### Fontes
Importei pela primeira vez usando a tag `<head>` do HTML! Acostumado a usar `@import` na folha de estilo CSS.

### Ícones
- **Font Awesome** - Todos os ícones do formulário
- Aprendi a usar de forma mais eficiente nesse projeto

### Botões de Redes Sociais
Peguei os botões no [Uiverse](https://uiverse.io/)! São só decorativos (Instagram, Facebook, LinkedIn e Twitter), mas deixaram o design muito mais completo.

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/teuaraujoo/contact-us.git
```

2. Entre na pasta:
```bash
cd contact-us
```

**Obs:** Pra integração com Google Sheets funcionar, você precisa configurar seu próprio Apps Script.

## ⏱️ Tempo de Desenvolvimento

Dediquei **1 dia completo** nesse projeto!

A maior parte do tempo foi rfazendo as validações no JavaScript. Mas valeu MUITO a pena, porque aprendi pra caramba!

## 💭 Reflexão Pessoal

Foi meu **primeiro projeto real com JavaScript**, onde não só copiei código, mas entendi a lógica, pesquisei e resolvi os problemas sozinho.

Sei que esse projeto vai agregar muito ao meu portfólio e, mais importante, **me ajudou a evoluir nos estudos de JS**! 🚀

É gratificante ver que o esforço valeu a pena e que estou no caminho certo!

## 🎓 Diferenciais do Projeto

Esses são os pontos que me deixam mais orgulhoso:

- 🔥 **Validação em JavaScript** - Meu primeiro contato sério com JS
- 📊 **Google Sheets Integration** - Dados reais sendo salvos
- 📁 **Organização profissional** - Pastas bem estruturadas
- 🎨 **Responsividade top** - 3 breakpoints funcionando perfeitamente

- GitHub: [@teuaraujoo](https://github.com/teuaraujoo)

## 📝 Licença

Projeto desenvolvido para fins educacionais e de portfólio.

---

⭐ **Se curtiu o projeto, deixa uma estrela!** ⭐
