export interface Personagem {
    getNome(): string
    setNome(nome: string): void

    getVida(): number
    setVida(vida: number): void

    getNacionalidade(): string
    setNacionalidade(nacionalidade: string): void // ta faltando aqui as nacionalidades pra cada personagem

    getEstiloLuta(): string
    setEstiloLuta(estiloluta: string): void // falta os estilos de luta tbm

    golpeLeve(): number
    golpePesado(): number
    golpeEspecial(): number
}