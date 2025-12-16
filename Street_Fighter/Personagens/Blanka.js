"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blanka = void 0;
var Blanka = /** @class */ (function () {
    function Blanka() {
        this.usouGolpeEspecial = false;
        this.nome = 'Blanka';
        this.vida = 100;
        this.nacionalidade = '';
        this.estiloLuta = '';
    }
    Blanka.prototype.getNome = function () {
        return this.nome;
    };
    Blanka.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Blanka.prototype.getVida = function () {
        return this.vida;
    };
    Blanka.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Blanka.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Blanka.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Blanka.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Blanka.prototype.setEstiloLuta = function (estiloluta) {
        this.estiloLuta = estiloluta;
    };
    Blanka.prototype.golpeLeve = function () {
        var min = 10;
        var max = 15;
        var danoLeve = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoLeve;
    };
    Blanka.prototype.golpePesado = function () {
        var min = 5;
        var max = 30;
        var danoPesado = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoPesado;
    };
    Blanka.prototype.golpeEspecial = function () {
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
    return Blanka;
}());
exports.Blanka = Blanka;
