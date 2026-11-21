<div align="center">

![Banner](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=220&section=header&text=Cypress%20eXpress&fontSize=60&fontColor=ffffff&animation=fadeIn&desc=Automa%C3%A7%C3%A3o%20de%20testes%20E2E%20do%20ZERO%20e%20do%20jeito%20certo&descSize=18&descAlignY=72)

<p>
  <img src="https://skillicons.dev/icons?i=cypress,js,nodejs,yarn,git,github,vscode" alt="Tecnologias" />
</p>

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Project-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-Package%20Manager-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Udemy](https://img.shields.io/badge/Udemy-Curso-A435F0?style=for-the-badge&logo=udemy&logoColor=white)

### 🚀 Um curso rápido, prático e direto ao ponto para aprender automação de testes do ZERO e do jeito certo

[📚 Ver o curso na Udemy](https://www.udemy.com/course/cypress-express/) · [👨‍🏫 Instrutor: Fernando Papito](https://www.udemy.com/user/fernando-papito/)

</div>

---

## 📖 Sobre o projeto

Este repositório contém o código que desenvolvi durante o curso **Cypress eXpress**, do instrutor **Fernando Papito**, na Udemy.

Testes automatizados são parte vital do desenvolvimento de software moderno. Os testes de regressão crescem a cada nova versão do sistema, e automatizá-los reduz uma carga de trabalho que, em muitas empresas, ainda é manual.

O **Cypress** é um framework JavaScript de testes automatizados para aplicações web, capaz de testar qualquer coisa que rode no navegador. Devs e QAs de times frontend que usam React, Vue, Backbone, Redux, Express ou Angular costumam preferi-lo.

A aplicação testada é o **Mark L**, um gerenciador de tarefas criado para fins de demonstração.

---

## 🎯 O que foi praticado

- ✅ Construção de um projeto de testes **ponta a ponta (E2E)** para aplicações web
- ✅ Criação de um projeto **Node.js do zero com Yarn**, com instalação e configuração do Cypress
- ✅ Automação de **testes de regressão** com Cypress
- ✅ Preenchimento automático de formulários
- ✅ Automação das ações que o usuário realiza no navegador
- ✅ Validação do comportamento esperado da aplicação
- ✅ Testes de aplicações simulando um **ambiente real**
- ✅ **Testes independentes**, sem dependência entre si
- ✅ **Custom Commands** para reaproveitar código
- ✅ Relatórios ricos com **screenshots e vídeos** como evidência
- ✅ Boas práticas de implementação de testes automatizados

---

## 🗂️ Estrutura do projeto

```
cypress-express-mark
├── cypress
│   ├── e2e
│   │   ├── home
│   │   │   └── home.cy.js      # Testes da página inicial
│   │   └── tasks.cy.js         # Testes do gerenciador de tarefas
│   ├── fixtures                # Massa de dados dos testes
│   ├── support                 # Custom Commands e configurações globais
│   └── downloads
├── cypress.config.js           # Configurações do Cypress
├── Insomnia_markL.json         # Coleção de requisições da API (Insomnia)
├── package.json
└── yarn.lock
```

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- A aplicação **Mark L** rodando localmente (conforme as instruções do curso)

---

## 🚀 Como executar

**1. Clone o repositório**

```bash
git clone https://github.com/linuxestudos03112026/Cypress-Express-MarkL.git
cd Cypress-Express-MarkL
```

**2. Instale as dependências**

```bash
yarn install
```

**3. Suba a aplicação Mark L** seguindo as instruções do curso e confira se a `baseUrl` no `cypress.config.js` aponta para o endereço correto.

**4. Execute os testes**

Modo interativo, com a interface do Cypress:

```bash
npx cypress open
```

Modo headless, direto no terminal. Gera screenshots das falhas e vídeos:

```bash
npx cypress run
```

---

## 📸 Evidências

Ao rodar `npx cypress run`, o Cypress gera automaticamente:

| Evidência | Pasta |
|-----------|-------|
| 🎥 Vídeos das execuções | `cypress/videos/` |
| 🖼️ Screenshots das falhas | `cypress/screenshots/` |

> 💡 **Dica:** adicione aqui um print do Cypress Test Runner com os testes passando. Salve a imagem em `docs/execucao.png` e use `![Execução dos testes](docs/execucao.png)`.

---

## 💬 Comunidade

O suporte e a troca de experiências entre os alunos acontecem na **Comunidade Oficial no Telegram** do curso. Lá há troca de conhecimento, networking com outros profissionais de QA e aprendizado coletivo.

---

## 🙏 Créditos

Curso **Cypress eXpress** criado por **[Fernando Papito](https://www.udemy.com/user/fernando-papito/)**.

🔗 [Acessar o curso na Udemy](https://www.udemy.com/course/cypress-express/)

---

<div align="center">

Feito com 💚 por **[linuxestudos03112026](https://github.com/linuxestudos03112026)** durante a jornada de estudos em QA

⭐ Se este repositório te ajudou, deixe uma estrela!

![Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=100&section=footer)

</div>
