import * as crypto from "crypto";

class Transaction {
  constructor(
    public amount: number,
    public payer: string,
    public payee: string
  ) {}

  public toString() {
    return JSON.stringify(this);
  }
}

export default Transaction;
