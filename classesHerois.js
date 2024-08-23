class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome; // Atibui o nome do herói
    this.idade = idade; // Atibiu a idade do herói
    this.tipo = tipo; // Atribui o tipo de heroi
  }
  escrever() {
    console.log(
      `O herói ${this.nome} tem ${this.idade} anos e é do tipo ${this.tipo}`
    );
  }
  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "e usou magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "e usou espada";
    } else if (this.tipo === "monge") {
      ataque = "e usou artes marcias";
    } else if (this.tipo === "ninja") {
      ataque = "e usou shuriken";
    } else {
      ataque = "tipo nao definido";
    }
    console.log(`O ${this.tipo} atacou ${ataque}!`);
  }
}

let meuHeroi = new heroi("DRS", 25, "ninja");
let meuHeroi1 = new heroi("DRS", 25, "guerreiro");
let meuHeroi2 = new heroi("DRS", 25, "mago");
let meuHeroi3 = new heroi("DRS", 25, "monge");
let meuHeroi4 = new heroi("DRS", 25, "jogador");

meuHeroi.escrever();
meuHeroi.atacar();
meuHeroi1.escrever();
meuHeroi1.atacar();
meuHeroi2.escrever();
meuHeroi2.atacar();
meuHeroi3.escrever();
meuHeroi3.atacar();
meuHeroi4.escrever();
meuHeroi4.atacar();
