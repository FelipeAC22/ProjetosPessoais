"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ask = require('readline-sync');
var Bison_1 = require("../Personagens/Bison");
var Blanka_1 = require("../Personagens/Blanka");
var Cammy_1 = require("../Personagens/Cammy");
var Dee_jay_1 = require("../Personagens/Dee_jay");
var Honda_1 = require("../Personagens/Honda");
var Ken_1 = require("../Personagens/Ken");
var Ryu_1 = require("../Personagens/Ryu");
var Zangief_1 = require("../Personagens/Zangief");
// FUNÇAO PARA SELECIONAR OS PERSONAGENS//
function selecionarPersonagem1() {
    console.clear();
    while (true) {
        console.log("\n-------------------------JOGADOR1-----------------------\n[0] Bison\n[1] Blanka\n[2] Cammy\n[3] Dee jay\n[4] Honda\n[5] Ken\n[6] Ryu\n[7] Zangief\n--------------------------------------------------------\n");
        var opcao = Number(ask.question("\njogador1 escolha seu personagem:"));
        switch (opcao) {
            case 0:
                return new Bison_1.Bison();
            case 1:
                return new Blanka_1.Blanka();
            case 2:
                return new Cammy_1.Cammy();
            case 3:
                return new Dee_jay_1.DeeJay();
            case 4:
                return new Honda_1.Honda();
            case 5:
                return new Ken_1.Ken();
            case 6:
                return new Ryu_1.Ryu();
            case 7:
                return new Zangief_1.Zangief();
            default:
                ask.question('Personagem não encontrado, tecle ENTER para voltar');
                break;
        }
    }
}
function selecionarPersonagem2() {
    console.clear();
    while (true) {
        console.log("\n-------------------------JOGADOR2----------------------\n[0] Bison\n[1] Blanka\n[2] Cammy\n[3] Dee jay\n[4] Honda\n[5] Ken\n[6] Ryu\n[7] Zangief\n--------------------------------------------------------\n    ");
        var opcao = Number(ask.question("\njogador2 escolha seu personagem: "));
        switch (opcao) {
            case 0:
                return new Bison_1.Bison();
            case 1:
                return new Blanka_1.Blanka();
            case 2:
                return new Cammy_1.Cammy();
            case 3:
                return new Dee_jay_1.DeeJay();
            case 4:
                return new Honda_1.Honda();
            case 5:
                return new Ken_1.Ken();
            case 6:
                return new Ryu_1.Ryu();
            case 7:
                return new Zangief_1.Zangief();
            default:
                ask.question('Personagem não encontrado, tecle ENTER para voltar');
                break;
        }
    }
}
// ESCOLHER GOLPE NA BATALHA//
function selecionarGolpe(personagem, golpeEspecialUsado) {
    while (true) {
        console.log("".concat(personagem.getNome(), " escolha o golpe deste turno: "));
        console.log("Escolha o tipo de golpe:");
        console.log("[1] Golpe Leve");
        console.log("[2] Golpe Pesado");
        console.log("[3] Golpe Especial (Somente uma vez por turno)");
        var escolha = Number(ask.question("Digite o numero do golpe: "));
        // Se o jogador já usou o golpe especial, ele não pode usar novamente
        if (escolha === 3 && golpeEspecialUsado) {
            console.log("Você já usou o golpe especial neste turno! Escolha outro tipo de golpe");
            continue;
        }
        // Processa a escolha
        switch (escolha) {
            case 1:
                return { dano: personagem.golpeLeve(), golpeEspecialUsado: golpeEspecialUsado };
            case 2:
                return { dano: personagem.golpePesado(), golpeEspecialUsado: golpeEspecialUsado };
            case 3:
                if (!golpeEspecialUsado) {
                    return { dano: personagem.golpeEspecial(), golpeEspecialUsado: true };
                }
                else {
                    console.log("Golpe especial já foi usado! Escolha outro golpe.");
                    continue;
                }
            default:
                // Caso a opção seja inválida, não conta dano e pede nova escolha
                console.log("Opção inválida. Escolha novamente.");
                continue;
        }
    }
}
// FUNCAO BATALHA //
function batalha(jogador1, jogador2) {
    var turno = 1;
    var vencedor = null;
    while (jogador1.getVida() > 0 && jogador2.getVida() > 0) {
        console.log("\n--- Turno ".concat(turno, " ---"));
        console.log("".concat(jogador1.getNome(), " vs ").concat(jogador2.getNome()));
        var golpeEspecialUsado1 = false;
        var golpeEspecialUsado2 = false;
        // Jogador 1 - 3 ataques
        for (var i = 0; i < 3; i++) {
            var _a = selecionarGolpe(jogador1, golpeEspecialUsado1), dano = _a.dano, golpeEspecialUsado = _a.golpeEspecialUsado;
            jogador2.setVida(jogador2.getVida() - dano);
            golpeEspecialUsado1 = golpeEspecialUsado;
            console.log("".concat(jogador1.getNome(), " causou ").concat(dano, " de dano a ").concat(jogador2.getNome(), ". Vida restante de ").concat(jogador2.getNome(), ": ").concat(jogador2.getVida()));
            if (jogador2.getVida() <= 0) {
                vencedor = jogador1;
                break;
            }
        }
        if (vencedor)
            break;
        // Jogador 2 - 3 ataques
        for (var i = 0; i < 3; i++) {
            var _b = selecionarGolpe(jogador2, golpeEspecialUsado2), dano = _b.dano, golpeEspecialUsado = _b.golpeEspecialUsado;
            jogador1.setVida(jogador1.getVida() - dano);
            golpeEspecialUsado2 = golpeEspecialUsado;
            console.log("".concat(jogador2.getNome(), " causou ").concat(dano, " de dano a ").concat(jogador1.getNome(), ". Vida restante de ").concat(jogador1.getNome(), ": ").concat(jogador1.getVida()));
            if (jogador1.getVida() <= 0) {
                vencedor = jogador2;
                break;
            }
        }
        if (vencedor)
            break;
        turno++;
    }
    console.log("\nO vencedor \u00E9 ".concat(vencedor === null || vencedor === void 0 ? void 0 : vencedor.getNome(), "!"));
}
// FUNCAO MAIN //
function main() {
    console.log("Bem-vindo ao Street Fighter");
    var jogador1 = selecionarPersonagem1();
    ask.question("tecle ENTER para continuar: ");
    var jogador2 = selecionarPersonagem2();
    console.clear();
    console.log("".concat(jogador1.getNome(), " x ").concat(jogador2.getNome()));
    ask.question('tecle ENTER para comecar: ');
    batalha(jogador1, jogador2);
}
main();
