// cara membuat class
// class Orang {

// }

// const Pegawai = new Orang();
// const Petani = new Orang();
// console.log(Pegawai);
// console.log(Pegawai);

// membuat constructor class////////////
// class Orang {
//   constructor(nama) {
//     console.log(`halo saya ${nama}`);
//   }
// }
// const Pegawai = new Orang("Budi");
// const Guru = new Orang("Ahmad");

//menambahkan property dalam class
// class Orang {
//   constructor(nama) {
//     this.nama = nama;
//   }
// }
// const Pegawai = new Orang("Budi");
// const Guru = new Orang("Ahmad");
// console.log(Pegawai);
// console.log(Pegawai.nama);

//menambahkan Method dalam class
class Orang {
  constructor(nama) {
    this.nama = nama;
  }
  salamSapa(kampus) {
    return `Halo nama saya ${this.nama} kuliah di ${kampus}`;
  }
}
const Pegawai = new Orang("Budi");
const Guru = new Orang("Ahmad");
console.log(Pegawai.salamSapa("Unismuh"));
console.log(Guru.salamSapa("Telkom"));

