"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ken = void 0;
var Ken = /** @class */ (function () {
    function Ken() {
        this.usouGolpeEspecial = false;
        this.nome = 'Ken';
        this.vida = 100;
        this.nacionalidade = '';
        this.estiloLuta = '';
    }
    Ken.prototype.getNome = function () {
        return this.nome;
    };
    Ken.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Ken.prototype.getVida = function () {
        return this.vida;
    };
    Ken.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Ken.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Ken.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Ken.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Ken.prototype.setEstiloLuta = function (estiloluta) {
        this.estiloLuta = estiloluta;
    };
    Ken.prototype.golpeLeve = function () {
        var min = 10;
        var max = 15;
        var danoLeve = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoLeve;
    };
    Ken.prototype.golpePesado = function () {
        var min = 5;
        var max = 30;
        var danoPesado = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoPesado;
    };
    Ken.prototype.golpeEspecial = function () {
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
    return Ken;
}());
exports.Ken = Ken;
