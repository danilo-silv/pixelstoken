
## Pixelstoken

Pixelstoken é um projeto desenvolvido em React Native com Expo, utilizando o Tamagui UI Kit para criação de interfaces. Gerenciamos estados com o Zustand, realizamos requisições com o SWR e usamos uma configuração fornecida pelo [Create Expo Stack](https://createexpostack.com/). O projeto consiste em uma carteira de tokens onde o usuário pode visualizar e adquirir NFTs.

## Requisitos

- **Gerenciador de Pacotes**: Yarn `1.22.22`
- **Versão do Node**: >= `20`

## Dependências

- **Framework**: React Native com Expo
- **UI Kit**: [Tamagui](https://tamagui.dev/)
- **Gerenciamento de Estado**: Zustand
- **Fetch de Dados**: SWR
- **Testes**: Jest e React Testing Library

## Configuração Inicial

### 1. Clonar o Repositório

```sh
git clone https://github.com/danilo-silv/pixelstoken.git
cd pixelstoken
```

### 2. Instalar as Dependências

Certifique-se de estar utilizando a versão correta do Yarn especificada no `cesconfig.json`.

```sh
yarn install
```

### 3. Criar o Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável de ambiente:

```dotenv
API_BASE_URL=https://66cbe57d4290b1c4f19b573c.mockapi.io/api/v1
```

Este projeto utiliza o serviço de integração do [MockAPI](https://mockapi.io/), onde temos duas rotas cadastradas para retornar produtos, como Tokens e NFTs.

### 4. Iniciar o Servidor de Desenvolvimento

```sh
yarn start
```

## Executar o Aplicativo

Para executar o aplicativo, abra o aplicativo **Expo Go** no seu dispositivo e escaneie o QR code mostrado no terminal após executar `yarn start`.

## Configurações do CESConfig

O `cesconfig.json` fornece uma configuração padrão para Prettier e ESLint, que será aplicada automaticamente ao seu projeto.

## Testes

Este projeto utiliza o **React Testing Library** para testes. Para executar os testes:

```sh
yarn test
```

## Vídeo Demonstrativo

Abaixo você pode assistir ao vídeo explicando a interface de usuário (UI) do aplicativo Pixelstoken:

[Vimeo](https://vimeo.com/1004497776?share=copy)


## Links Úteis

- [Documentação do Tamagui](https://tamagui.dev/)
- [Documentação do Zustand](https://github.com/pmndrs/zustand)
- [Documentação do SWR](https://swr.vercel.app/)
- [Documentação do Expo](https://docs.expo.dev/)

## Contato

Para quaisquer dúvidas ou contribuições, por favor, abra uma issue no repositório ou entre em contato através do email: danilo.ssilva72@gmail.com
