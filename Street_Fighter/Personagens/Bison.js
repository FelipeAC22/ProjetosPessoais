"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bison = void 0;
var Bison = /** @class */ (function () {
    function Bison() {
        this.usouGolpeEspecial = false;
        this.nome = 'Bison';
        this.vida = 100;
        this.nacionalidade = '';
        this.estiloLuta = '';
    }
    Bison.prototype.getNome = function () {
        return this.nome;
    };
    Bison.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Bison.prototype.getVida = function () {
        return this.vida;
    };
    Bison.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Bison.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Bison.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Bison.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    Bison.prototype.setEstiloLuta = function (estiloluta) {
        this.estiloLuta = estiloluta;
    };
    Bison.prototype.golpeLeve = function () {
        var min = 10;
        var max = 15;
        var danoLeve = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoLeve;
    };
    Bison.prototype.golpePesado = function () {
        var min = 5;
        var max = 30;
        var danoPesado = Math.floor(Math.random() * (max - min + 1)) + min;
        return danoPesado;
    };
    Bison.prototype.golpeEspecial = function () {
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
    return Bison;
}());
exports.Bison = Bison;
