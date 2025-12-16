"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ryu = void 0;
var Ryu = /** @class */ (function () {
    function Ryu() {
        this.usouGolpeEspecial = false;
        this.nome = 'Ryu';
        this.vida = 100;
        this.nacionalidade = '';
        this.estiloLuta = '';
    }
    Ryu.prototype.getNome = function () {
        return this.nome;
    };
    Ryu.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Ryu.prototype.getVida = function () {
        return this.vida;
    };
    Ryu.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Ryu.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Ryu.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Ryu.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Ryu.prototype.setEstiloLuta = function (estiloluta) {
        this.estiloLuta = estiloluta;
    };
    Ryu.prototype.golpeLeve = function () {
        var min = 10;
        var max = 15;
        var danoLeve = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoLeve;
    };
    Ryu.prototype.golpePesado = function () {
        var min = 5;
        var max = 30;
        var danoPesado = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoPesado;
    };
    Ryu.prototype.golpeEspecial = function () {
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
    return Ryu;
}());
exports.Ryu = Ryu;
