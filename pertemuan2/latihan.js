let mahasiswa = {
  nama: "ilham",
  alamat: "gowa",
};
console.log(mahasiswa.nama.alamat);

function orang(nama, umur) {
  let orang = {};
  orang.nama = nama;
  orang.umur = umur;

  // orang.bijak =function(jam);
  console.log(`ayah bekerja selama ${`jam`}`);
}

let ayah = orang(`ambo`, 55);

console.log(orang.nama);
