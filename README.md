# Bem-vindo ao projeto 👋

Este é um projeto [Expo](https://expo.dev) criado com [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## ⬇️ Clonando o projeto

Para clonar este repositório, use o comando abaixo para garantir que você está na branch principal `develop`:

```bash
git clone https://github.com/Mateus-Caldarte/mystatistics-reactnativetypescript.git
cd  MyStatistics-ReactNativeTypescript
git checkout develop - default já vai estar na develop
```

## ▶️ Primeiros passos

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o app:

   ```bash
   npx expo start
   ```

Na saída do terminal, você verá opções para abrir o app em:

- um [build de desenvolvimento](https://docs.expo.dev/develop/development-builds/introduction/)
- um [emulador Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- um [simulador iOS](https://docs.expo.dev/workflow/ios-simulator/)
- o [Expo Go](https://expo.dev/go), um ambiente limitado para testar o desenvolvimento com o Expo
- selecione a opção desejada

## 🧰 Tecnologias utilizadas

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

- [React Native](https://reactnative.dev/) — Framework para desenvolvimento mobile nativo com JavaScript/TypeScript
- [Expo](https://expo.dev/) — Plataforma que facilita o desenvolvimento e build de apps React Native
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática
- [Redux Toolkit](https://redux-toolkit.js.org/) — Conjunto de ferramentas para simplificar a gestão de estado global no Redux
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) — Middleware para lidar com chamadas assíncronas no Redux
- [Expo Router](https://expo.github.io/router/docs) — Navegação baseada em arquivos no estilo Next.js para apps Expo/React Native

## 📁 Estrutura do projeto

O projeto segue uma organização modular, com destaque para MVC:

- `redux/` — configuração da store e ducks (actions/reducers)
- `redux/thunks/` — operações assíncronas usando `redux-thunk`
- `atomic/` — componentes reutilizáveis organizados por nível de composição (atoms, molecules)
- `views/` — para exibição
- `index/` — para lógicasj
- `models/` — para tipagens
