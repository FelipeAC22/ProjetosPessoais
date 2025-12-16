"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cammy = void 0;
var Cammy = /** @class */ (function () {
    function Cammy() {
        this.usouGolpeEspecial = false;
        this.nome = 'Cammy';
        this.vida = 100;
        this.nacionalidade = '';
        this.estiloLuta = '';
    }
    Cammy.prototype.getNome = function () {
        return this.nome;
    };
    Cammy.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cammy.prototype.getVida = function () {
        return this.vida;
    };
    Cammy.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Cammy.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Cammy.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Cammy.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Cammy.prototype.setEstiloLuta = function (estiloluta) {
        this.estiloLuta = estiloluta;
    };
    Cammy.prototype.golpeLeve = function () {
        var min = 10;
        var max = 15;
        var danoLeve = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoLeve;
    };
    Cammy.prototype.golpePesado = function () {
        var min = 5;
        var max = 30;
        var danoPesado = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoPesado;
    };
    Cammy.prototype.golpeEspecial = function () {
        if (this.usouGolpeEspecial) {
            return 0;
        }
        else {
            var min = 30;
            var max = 50;
            var danoEspecial = Math.floor(Math.random() * (max - min + 1)) + min;
            return danoEspecial;
        }
    };
    return Cammy;
}());
exports.Cammy = Cammy;
