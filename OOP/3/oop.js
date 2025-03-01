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



//Fukce pro vytvoření kočky a zobrazení její akce
function vytvorKocku() {
    const kocka = new Kocka("Micka");

    document.getElementById("vystup").innerHTML =
        `<p>${kocka.vydejZvuk()}</p>`;
    `<p>${kocka.ulovMys()}</p>`;
}

//Fukce pro vytvoření kočky a zobrazení její akce
function vytvorPsa() {
    const pes = new Pes("Rex");

    document.getElementById("vystup").innerHTML =
        `<p>${pes.vydejZvuk()}</p>`;
    `<p>${pes.hlidejDum()}</p>`;
}

