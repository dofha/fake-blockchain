import Chain from "./chain";
import Wallet from "./wallet";

const a = new Wallet();
const b = new Wallet();
const c = new Wallet();

a.sendMoney(100, "dd");
b.sendMoney(40, "coucou");
c.sendMoney(20, b.publicKey);

console.log(Chain.instance);
