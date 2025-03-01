class Auto {

    constructor(znacka, model) {

        this.znacka = znacka;
        this.model = model;
    }

    popis() {
        return `Metoda pro popis auta: ${this.znacka} ${this.model} | Voláno z rodiče, Auto`;
    }
}

class ElektroAuto extends Auto {
    constructor(znacka, model, baterie) {
        super(znacka, model);
        this.baterie = baterie;
    }

    dojezd() {
        return `Metoda pro dojezd auta: ${this.znacka} ${this.model} má dojezd ${this.baterie} km. | Voláno z potomka, ElektroAuto`;
    }
}

const mojeElektroAuto = new ElektroAuto("Tesla", "Model S", 600);
console.log(mojeElektroAuto.popis());
console.log(mojeElektroAuto.dojezd());


// Výstup: Tesla Model S má dojezd 600 km.

