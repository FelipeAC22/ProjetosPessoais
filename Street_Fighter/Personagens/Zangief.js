"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zangief = void 0;
var Zangief = /** @class */ (function () {
    function Zangief() {
        this.usouGolpeEspecial = false;
        this.nome = 'Zangief';
        this.vida = 100;
        this.nacionalidade = '';
        this.estiloLuta = '';
    }
    Zangief.prototype.getNome = function () {
        return this.nome;
    };
    Zangief.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Zangief.prototype.getVida = function () {
        return this.vida;
    };
    Zangief.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Zangief.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Zangief.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Zangief.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Zangief.prototype.setEstiloLuta = function (estiloluta) {
        this.estiloLuta = estiloluta;
    };
    Zangief.prototype.golpeLeve = function () {
        var min = 10;
        var max = 15;
        var danoLeve = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoLeve;
    };
    Zangief.prototype.golpePesado = function () {
        var min = 5;
        var max = 30;
        var danoPesado = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoPesado;
    };
    Zangief.prototype.golpeEspecial = function () {
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
    return Zangief;
}());
exports.Zangief = Zangief;
