// classes
class Invoice {
    //   public  client: string;     access to variable from all code
    //   private details: string;    access to variable just inside class
    //   readonly amount: number;    access write and read inside class and just read out of class

    /*  constructor(c: string, d: string, a: number) {
          this.client = c;
          this.details = d;
          this.amount = a;
      }*/

    // new way 

    constructor(
        public client: string,
        private details: string,
        readonly amount: number
    ) { }

    // The above method can only be used when use private, public, readonly... 


    format() {
        return `${this.client} is a member, and work on ${this.details}. and get ${this.amount}$ per month`
    }

}
const inv1 = new Invoice('Mysm', 'codes', 222);
console.log(inv1.format());
