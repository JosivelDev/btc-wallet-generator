# ₿ Bitcoin Wallet Generator - Formação Blockchain da DIO

Este projeto foi desenvolvido como parte de um desafio prático da **Formação Blockchain da DIO (Digital Innovation One)**. O objetivo principal é criar um gerador de carteiras Bitcoin utilizando a arquitetura de **Carteiras Determinísticas Hierárquicas (HD)**.

## ⚙️ Funcionalidades
- Geração de **Seed Phrases** (Mnemônicos) de 12 palavras usando o padrão BIP39.
- Derivação de chaves privadas e públicas utilizando o protocolo **BIP32**.
- Suporte para a rede de testes (**Testnet**) do Bitcoin, ideal para ambiente de desenvolvimento.
- Geração de endereços no formato **P2PKH** (Legacy).

## 🛠️ Tecnologias e Bibliotecas
- **Node.js**: Ambiente de execução.
- **bip39**: Para a geração da semente mnemônica.
- **bip32 (v2.0.6)**: Para a derivação da árvore de chaves (versão utilizada para compatibilidade direta com os exemplos da formação).
- **bitcoinjs-lib**: Biblioteca principal para manipulação de endereços e redes Bitcoin.

## 🚀 Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/JosivelDev/btc-wallet-generator.git](https://github.com/JosivelDev/btc-wallet-generator.git)