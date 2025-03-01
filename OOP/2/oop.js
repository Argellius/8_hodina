class Zvire {
    constructor(jmeno, zvuk) {
        this.jmeno = jmeno;
        this.zvuk = zvuk;
    }

    vydejZvuk() {
        console.log(`${this.jmeno} vydává zvuk: ${this.zvuk}`);
    }

    vratJmenoZvirete() {
        return this.jmeno;
    }
}

class Kocka extends Zvire {
    constructor(jmeno) {
        super(jmeno, "Mňau");
    }

    ulovMys() {
        console.log(`${this.jmeno} hledá myš a loví.`)
    }
}


class Pes extends Zvire {
    constructor(jmeno) {
        super(jmeno, "Haf!");
    }

    hlidejDum() {
        console.log(`${this.jmeno} hlídá dům`);
    }
}


const mojeKocka = new Kocka("Micka");
const mojeKocka2 = new Kocka("Piškot");

const mujPes = new Pes("Rex");
const mujPes2 = new Pes("Pepa");


mojeKocka.vydejZvuk();
mujPes.vydejZvuk();
mojeKocka2.vydejZvuk();
mujPes2.vydejZvuk();

console.log("-----------------");

mujPes.hlidejDum();
mojeKocka.ulovMys();