"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeeJay = void 0;
var DeeJay = /** @class */ (function () {
    function DeeJay() {
        this.usouGolpeEspecial = false;
        this.nome = 'Dee jay';
        this.vida = 100;
        this.nacionalidade = '';
        this.estiloLuta = '';
    }
    DeeJay.prototype.getNome = function () {
        return this.nome;
    };
    DeeJay.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    DeeJay.prototype.getVida = function () {
        return this.vida;
    };
    DeeJay.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    DeeJay.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    DeeJay.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    DeeJay.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    DeeJay.prototype.setEstiloLuta = function (estiloluta) {
        this.estiloLuta = estiloluta;
    };
    DeeJay.prototype.golpeLeve = function () {
        var min = 10;
        var max = 15;
        var danoLeve = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoLeve;
    };
    DeeJay.prototype.golpePesado = function () {
        var min = 5;
        var max = 30;
        var danoPesado = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoPesado;
    };
    DeeJay.prototype.golpeEspecial = function () {
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
    return DeeJay;
}());
exports.DeeJay = DeeJay;
