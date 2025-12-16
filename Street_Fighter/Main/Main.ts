const ask = require('readline-sync')
import { Personagem } from "../Interface/Personagem"
import { Bison } from "../Personagens/Bison"
import { Blanka } from "../Personagens/Blanka"
import { Cammy } from "../Personagens/Cammy"
import { DeeJay } from "../Personagens/Dee_jay"
import { Honda } from "../Personagens/Honda"
import { Ken } from "../Personagens/Ken"
import { Ryu } from "../Personagens/Ryu"
import { Zangief } from "../Personagens/Zangief"

// FUNÇAO PARA SELECIONAR OS PERSONAGENS//

function selecionarPersonagem1(): any {
    console.clear()
    while (true) {

        console.log(`
-------------------------JOGADOR1-----------------------
[0] Bison
[1] Blanka
[2] Cammy
[3] Dee jay
[4] Honda
[5] Ken
[6] Ryu
[7] Zangief
--------------------------------------------------------
`)

        let opcao = Number(ask.question(`
jogador1 escolha seu personagem:`))

        switch (opcao) {
            case 0:
                return new Bison()
            case 1:
                return new Blanka()
            case 2:
                return new Cammy()
            case 3:
                return new DeeJay()
            case 4:
                return new Honda()
            case 5:
                return new Ken()
            case 6:
                return new Ryu()
            case 7:
                return new Zangief()
            default:
                ask.question('Personagem não encontrado, tecle ENTER para voltar')
                break;
        }
    }
}

function selecionarPersonagem2(): any {
    console.clear()
    while (true) {

        console.log(`
-------------------------JOGADOR2----------------------
[0] Bison
[1] Blanka
[2] Cammy
[3] Dee jay
[4] Honda
[5] Ken
[6] Ryu
[7] Zangief
--------------------------------------------------------
    `)

        let opcao = Number(ask.question(`
jogador2 escolha seu personagem: `))

        switch (opcao) {
            case 0:
                return new Bison()
            case 1:
                return new Blanka()
            case 2:
                return new Cammy()
            case 3:
                return new DeeJay()
            case 4:
                return new Honda()
            case 5:
                return new Ken()
            case 6:
                return new Ryu()
            case 7:
                return new Zangief()
            default:
                ask.question('Personagem não encontrado, tecle ENTER para voltar')
                break;
        }
    }
}

// ESCOLHER GOLPE NA BATALHA//

function selecionarGolpe(personagem: Personagem, golpeEspecialUsado: boolean): { dano: number, golpeEspecialUsado: boolean } {
    while (true) {
        console.log(`${personagem.getNome()} escolha o golpe deste turno: `)
        console.log("Escolha o tipo de golpe:")
        console.log("[1] Golpe Leve")
        console.log("[2] Golpe Pesado")
        console.log("[3] Golpe Especial (Somente uma vez por turno)")

        let escolha = Number(ask.question("Digite o numero do golpe: "))

        // Se o jogador já usou o golpe especial, ele não pode usar novamente
        if (escolha === 3 && golpeEspecialUsado) {
            console.log("Você já usou o golpe especial neste turno! Escolha outro tipo de golpe")
            continue;
        }

        // Processa a escolha
        switch (escolha) {
            case 1:
                return { dano: personagem.golpeLeve(), golpeEspecialUsado }
            case 2:
                return { dano: personagem.golpePesado(), golpeEspecialUsado }
            case 3:
                if (!golpeEspecialUsado) {
                    return { dano: personagem.golpeEspecial(), golpeEspecialUsado: true }
                } else {
                    console.log("Golpe especial já foi usado! Escolha outro golpe.")
                    continue
                }
            default:
                // Caso a opção seja inválida, não conta dano e pede nova escolha
                console.log("Opção inválida. Escolha novamente.")
                continue
        }
    }
}

// FUNCAO BATALHA //

function batalha(jogador1: Personagem, jogador2: Personagem): void {
    let turno = 1
    let vencedor: Personagem | null = null

    while (jogador1.getVida() > 0 && jogador2.getVida() > 0) {
        console.log(`\n--- Turno ${turno} ---`)
        console.log(`${jogador1.getNome()} vs ${jogador2.getNome()}`)

        let golpeEspecialUsado1 = false
        let golpeEspecialUsado2 = false

        // Jogador 1 - 3 ataques
        for (let i = 0; i < 3; i++) {
            let { dano, golpeEspecialUsado } = selecionarGolpe(jogador1, golpeEspecialUsado1)
            jogador2.setVida(jogador2.getVida() - dano)
            golpeEspecialUsado1 = golpeEspecialUsado
            console.log(`${jogador1.getNome()} causou ${dano} de dano a ${jogador2.getNome()}. Vida restante de ${jogador2.getNome()}: ${jogador2.getVida()}`)

            if (jogador2.getVida() <= 0) {
                vencedor = jogador1
                break;
            }
        }

        if (vencedor) break;

        // Jogador 2 - 3 ataques
        for (let i = 0; i < 3; i++) {
            let { dano, golpeEspecialUsado } = selecionarGolpe(jogador2, golpeEspecialUsado2)
            jogador1.setVida(jogador1.getVida() - dano)
            golpeEspecialUsado2 = golpeEspecialUsado
            console.log(`${jogador2.getNome()} causou ${dano} de dano a ${jogador1.getNome()}. Vida restante de ${jogador1.getNome()}: ${jogador1.getVida()}`)

            if (jogador1.getVida() <= 0) {
                vencedor = jogador2
                break;
            }
        }

        if (vencedor) break;

        turno++

    }

    console.log(`\nO vencedor é ${vencedor?.getNome()}!`)
}

// FUNCAO MAIN //

function main(): void {
    console.log("Bem-vindo ao Street Fighter")
    let jogador1: Personagem = selecionarPersonagem1()

    ask.question("tecle ENTER para continuar: ")

    let jogador2: Personagem = selecionarPersonagem2()
    console.clear()
    console.log(`${jogador1.getNome()} x ${jogador2.getNome()}`)
    ask.question('tecle ENTER para comecar: ')

    batalha(jogador1, jogador2)
}

main()
