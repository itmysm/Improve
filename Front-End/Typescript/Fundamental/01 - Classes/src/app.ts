// classes 


class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }


    format() {
        return `${this.client} is a member, and work on ${this.details}. and get ${this.amount}$ per month`
    }

}



const inv1 = new Invoice('Mysm', 'codes', 222);
const inv2 = new Invoice('dude', 'design', 22122);



console.log(inv1.format());
console.log(inv2.format());

// 

let Invoices: Invoice[] = [];

// Invoices.push('sss') We can push anything here!! why? because Invoices type equal to Invoice class so we cant push anything on this. just class can
// exm:
Invoices.push(inv1) // see? here there is no problem 
Invoices.push(inv2)

