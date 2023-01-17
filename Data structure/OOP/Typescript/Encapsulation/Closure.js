function MyWallet () {
  var money = 1000; // private var
  var moneyChecker = function () {console.log('The amount of money is equal to ' + money)};

  this.publicMethod = function () {
    console.log("I'm a public interface");
    moneyChecker(); // private method
  }
}



const wallet = new MyWallet()
console.log(wallet.money); // undefined
console.log(wallet.moneyChecker); // undefined
console.log(wallet.publicMethod()); // return money


