//objek literal

// let hero = {
//   nama: "Figther",
//   poin: 10,

//   attack: function (damage) {
//     this.poin = this.poin + damage;
//     console.log(`${this.nama} menyerang dan mendapatkan point ${this.poin}`);
//   },
// };

// let hero2 = {
//   nama: "Mage",
//   poin: 10,

//   attack: function (damage) {
//     this.poin = this.poin + damage;
//     console.log(`${this.nama} menyerang dan mendapatkan point ${this.poin}`);
//   },
// };

// console.log(hero);
// console.log(hero.nama);
// console.log(hero.poin);
// console.log(hero.attack(100));
// console.log(hero2);
// console.log(hero2.nama);
// console.log(hero2.poin);
// console.log(hero2.attack(100));

// Function Deckaration

// function Hero(nama, poin) {
//   let hero = {};
//   hero.nama = nama;
//   hero.poin = poin;

//   hero.attack = function (damage) {
//     this.poin += damage;
//     console.log(`${this.nama} menyerang dan mendapatkan point ${this.poin}`);
//   };
//   hero.hit = function (damage) {
//     this.poin -= damage;
//     console.log(`${this.nama} diserang dan point berkurang ${this.poin}`);
//   };
//   return hero;
// }

// let Figther = Hero("Zilong", 10);
// let Mage = Hero("Eudora", 10);

// console.log(Figther);
// console.log(Mage);

//Object.create

// const methodhero = {
//   attack: function (damage) {
//     this.poin += damage;
//     return `${this.nama} menyerang dan mendapatkan point ${this.poin}`;
//   },

//   hit: function (damage) {
//     this.poin -= damage;
//     console.log(`${this.nama} diserang dan point berkurang ${this.poin}`);
//   },

//   heal: function (poin) {
//     this.poin += this.heal;
//   },
// };

// function Hero(nama, poin) {
//   let hero = Object.create(methodhero);
//   hero.nama = nama;
//   hero.poin = poin;

//   return hero;
// }
// let Figther = Hero("Zilong", 10);
// let Mage = Hero("Eudora", 10);

// console.log(Figther.attack(10));

//constructor function (keyword new)

function Hero(nama,poin){
  this.nama = nama;
  this.poin=poin;

  this.attack=function(damage){
    this.poin += damage;
    console.log (`${this.nama} menyerang dan mendapatkan point ${this.poin}`);
  }
  this.hit=function(damage){
    this.poin -= damage;
    console.log(`${this.nama} diserang dan point berkurang ${this.poin}`);
  }
}

let Figther = new Hero ("zilong",10);
let mage = new Hero ("eudora",10);
console.log(Figther);
console.log(mage);
console.log(mage.attack(20));