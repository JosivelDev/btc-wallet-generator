//imortando as dependencias 
const bip32 = require ('bip32')
const bip39 = require ('bip39')
const bitcoin = require ('bitcoinjs-lib')

//definir a rede
//bitcoin - rede principal - mainnet
//testnet - rede de test - testnet
const network = bitcoin.networks.testnet

//derivação da carteira HD
const path = `m/49'/1'/0'/0`

//criando o mnemonic para a seed (palavra de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz da carteiraHD
let root = bip32.fromSeed(seed, network)

//criando uma conta - par pvt-pub keys
let account = root.derivePath(path)
let Node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: Node.publicKey,
    network: network,
}).address

console.log("Carteira gerada")
console.log("endereço: ", btcAddress)
console.log("Chave privada:", Node.toWIF())
console.log("Seed", mnemonic)