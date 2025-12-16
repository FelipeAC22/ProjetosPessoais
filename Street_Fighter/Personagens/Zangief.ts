import { Personagem } from "../Interface/Personagem";

export class Zangief implements Personagem {
    private nome: string
    private vida: number
    private nacionalidade: string
    private estiloLuta: string
    private usouGolpeEspecial: boolean = false
    constructor() {
        this.nome = 'Zangief'
        this.vida = 100
        this.nacionalidade = ''
        this.estiloLuta = ''
    }

    public getNome(): string {
        return this.nome
    }
    public setNome(nome: string) {
        this.nome = nome
    }
    public getVida(): number {
        return this.vida
    }
    public setVida(vida: number) {
        this.vida = vida
    }
    public getNacionalidade(): string {
        return this.nacionalidade
    }
    public setNacionalidade(nacionalidade: string) {
        this.nacionalidade = nacionalidade
    }
    public getEstiloLuta(): string {
        return this.estiloLuta
    }
    public setEstiloLuta(estiloluta: string) {
        this.estiloLuta = estiloluta
    }
    golpeLeve() {
        const min = 10
        const max = 15

        let danoLeve = Math.floor(Math.random() * (max - min + 1)) + min
        return danoLeve
    }
    golpePesado() {
        const min = 5
        const max = 30

        let danoPesado = Math.floor(Math.random() * (max - min + 1)) + min
        return danoPesado
    }
    golpeEspecial() {
        if (this.usouGolpeEspecial) {
            return 0

        } else {

            const min = 30
            const max = 50

            let danoEspecial = Math.floor(Math.random() * (max - min + 1)) + min
            return danoEspecial
        }
    }
}