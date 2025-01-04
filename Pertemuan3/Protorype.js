function Orang(nama, pekerjaan) {
  this.nama = nama;
  this.pekerjaan = pekerjaan;

  //   this.sapa = function () {
  //     return "Halo apa kabar";
  //   };
}

Orang.prototype.sapa = function () {
  return "halo apa kabar";
};

let ambo = new Orang("ambo", "programmer");
let budi = new Orang("Budi", "Network Enggineer");
let cika = new Orang("cika", "Network Engineer");

console.log(ambo);
console.log(budi);
console.log(cika);

let angka = [1, 2, 3, 4];
let tanggal = new Date();
let nama = "ambo";

console.log(angka.reverse());
console.log(tanggal.getHours());
console.log(nama.length);

document.getElementById("demo").innerHTML = ambo.sapa();
