class cuenta {
    id;
    propietario;
    saldo;

    constructor(id, propietario, saldo) {
        this.id = id;
        this.propietario = propietario;
        this.saldo = saldo
    };

    acreditar(monto) {
        this.saldo += monto
    };
    debitar(monto) {
        this.saldo -= monto
    };
    getSaldo(){
        console.log("Saldo de la cuenta de la cuenta de "+this.propietario+" es Q"+this.saldo+".00")
    }
}

let cuenta1=new cuenta(1, "Luis", 1000);
let cuenta2=new cuenta(2, "María", 1000);

cuenta1.getSaldo()
cuenta2.getSaldo()

cuenta1.acreditar(parseInt(prompt("Valor a acreditar a la cuenta 1")))
cuenta2.acreditar(parseInt(prompt("Valor a acreditar a la cuenta 2")))

cuenta1.getSaldo()
cuenta2.getSaldo()

cuenta1.debitar(parseInt(prompt("Valor a debitar de la cuenta 1")))
cuenta2.debitar(parseInt(prompt("Valor a debitar de la cuenta 2")))

cuenta1.getSaldo()
cuenta2.getSaldo()