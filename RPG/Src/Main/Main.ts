const ask = require('readline-sync')

import { Guerreiro } from "./Guerreiro"
import { Mago } from "./Mago"

let guerreiro1 = new Guerreiro('simas turbo')
let mago1 = new Mago('thomas turbano')

function pauQuebrando(personagem1: any, personagem2: any) {
    console.log('ROUND ONE, FIGHT!')

    while (personagem1.vida > 0 && personagem2.vida > 0) {
        personagem1.atacar(personagem2)
        if (personagem2.vida <= 0) {
            console.log(`${personagem1.nome} ganhou a batalha!`)
            break;
        }
        personagem2.atacar(personagem1)
        if (personagem1.vida <= 0) {
            console.log(`${personagem2.nome} ganhou a batalha!`)
            break;
        }
    }
}

pauQuebrando(guerreiro1, mago1)