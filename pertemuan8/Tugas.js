class KUE {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }
  infoKue(berbahan) {
    return `kue ini bernama ${this.nama} menggunakan bahan dasar ${berbahan} seharga ${this.harga}`;
  }
}
const Kue1 = new KUE("Kue Lapis", "5000 rupiah");
const Kue2 = new KUE("Kue Lumpur", "1 jt rupiah");
console.log(Kue1.infoKue("Tepung beras"));
console.log(Kue2.infoKue("terigu"));
