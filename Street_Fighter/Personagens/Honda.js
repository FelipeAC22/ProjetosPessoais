"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Honda = void 0;
var Honda = /** @class */ (function () {
    function Honda() {
        this.usouGolpeEspecial = false;
        this.nome = 'Honda';
        this.vida = 100;
        this.nacionalidade = '';
        this.estiloLuta = '';
    }
    Honda.prototype.getNome = function () {
        return this.nome;
    };
    Honda.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Honda.prototype.getVida = function () {
        return this.vida;
    };
    Honda.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Honda.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Honda.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Honda.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Honda.prototype.setEstiloLuta = function (estiloluta) {
        this.estiloLuta = estiloluta;
    };
    Honda.prototype.golpeLeve = function () {
        var min = 10;
        var max = 15;
        var danoLeve = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoLeve;
    };
    Honda.prototype.golpePesado = function () {
        var min = 5;
        var max = 30;
        var danoPesado = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoPesado;
    };
    Honda.prototype.golpeEspecial = function () {
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
    return Honda;
}());
exports.Honda = Honda;
