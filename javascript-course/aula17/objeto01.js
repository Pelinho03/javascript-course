let amigo = {
    nome: "José",
    sexo: "M",
    peso: 85.4,
    engordar(p = 0) {
        console.log("Engordar");
        this.peso += p;
    },
};
amigo.engordar(2);
console.log(`O ${amigo.nome} pesa ${amigo.peso}`);
