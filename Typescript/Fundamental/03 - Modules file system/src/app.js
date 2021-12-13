// classes 
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " is a member, and work on ").concat(this.details, ". and get ").concat(this.amount, "$ per month");
    };
    return Invoice;
}());
var inv1 = new Invoice('Mysm', 'codes', 222);
var inv2 = new Invoice('dude', 'design', 22122);
console.log(inv1.format());
console.log(inv2.format());
// 
var Invoices = [];
// Invoices.push('sss') We can push anything here!! why? because Invoices type equal to Invoice class so we cant push anything on this. just class can
// exm:
Invoices.push(inv1); // see? here there is no problem 
Invoices.push(inv2);
