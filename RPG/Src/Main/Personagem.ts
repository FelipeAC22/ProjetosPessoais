export interface Personagem {
    nome: any
    defesa: number
    forca: number
    vida: number
    
    atacar(inimigo: Personagem): void
    perderVida(dano: number): void  
}