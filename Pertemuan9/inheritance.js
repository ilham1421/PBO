// class kue {
//     deskripsi (rasa) {
//         console.log(`kue ${this.nama} rasanya ${rasa}`);
//     }
// }
// const kueCoklat = new Kue ();
// kueCoklat.nama = "Bolu";
// kueCoklat.deskripsi("Coklat");

// const kueKeju = new Kue ();
// kueKeju.nama = "onde-onde";
// kueKeju.deskripsi("Keju");

// class Kue {
//   deskripsi(rasa) {
//     console.log(`kue ${this.nama} rasanya ${rasa}`);
//   }
// }
// class KueBasah extends Kue {
// inheritance class Kue ke KueBasah
//   deskripsi(rasa) {
//     console.log(`Kue basah ${this.nama} rasanya ${rasa}`);
//   }
// }
// const kueCoklat = new KueBasah();
// kueCoklat.nama = "Bolu";
// kueCoklat.deskripsi("Coklat");

// const kueKeju = new KueBasah();
// kueKeju.nama = "Pudding";
// kueKeju.deskripsi("Keju");

/*/ Super Method /*/

class Kue {
  constructor(nama) {
    this.nama = nama;
  }
  deskripsi(rasa) {
    console.log(`kue ${this.nama} rasanya ${rasa}`);
  }
  infoBahan(bahan) {
    console.log(
      `kue ${this.nama} terbuat dari bahan dasar tepung, gula, dan telur`
    );
  }
}
class KueBasah extends Kue {
  constructor(nama, harga) {
    super(nama);
    this.harga = harga;
  }
  deskripsi(rasa) {
    console.log(`Kue basah ${this.nama} rasanya ${rasa}`);
    console.log(`Kue basah ${this.nama} memiliki harga ${this.harga}`);
    super.infoBahan();
  }
}
const kueCetak = new Kue("nastar");
kueCetak.deskripsi("coklat");

const kuePudding = new KueBasah("Pudding", 10000);
kuePudding.deskripsi("Vanila");
