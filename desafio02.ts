// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

enum Profession {
    Atriz,
    Padeiro
}

type Human = {
    name: string,
    age: number,
    profession: Profession
}

let person1: Human = {
    name: 'Maria',
    age: 29,
    profession: Profession.Atriz
}

let person2: Human = {
    name: 'Roberto',
    age: 19,
    profession: Profession.Padeiro
}

let person3: Human = {
    name: 'Laura',
    age: 32,
    profession: Profession.Atriz
}

let person4: Human = {
    name: 'Carlos',
    age: 19,
    profession: Profession.Padeiro
}
