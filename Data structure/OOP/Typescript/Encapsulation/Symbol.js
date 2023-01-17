const _privateProp = Symbol();

class Wallet {
  constructor () {
    this[_privateProp] = "I'm a private prop"
  }

  getPrivateProp () {
    return this[_privateProp]
  }
}


const miniWallet = new Wallet()

console.log(_privateProp); // undefined
// console.log(miniWallet._privateProp); // Error
console.log(miniWallet.getPrivateProp()); // return value

