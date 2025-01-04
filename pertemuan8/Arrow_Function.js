// let ucapSapa = function (nama){
//     return `Halo ${nama}`;
// }

// let ucapSapa = (nama) => {return `halo ${nama}`;}

// let ucapSapa = nama => {return `halo ${nama}`}

// let ucapSapa = () => `halo apa kabar`;

// let ucapSapa = (nama, kampus) => {
//   return `halo ${nama} dari ${kampus}`;
// };
// console.log(ucapSapa("Ilham", "Unismuh"));

//tidak memakai Arrow Function //
// let mahasiswa = ['ambo','budi','cika'];
// let jumlahHuruf = mahasiswa.map (function(nama){
//   return nama.length;
// })
// console.log(jumlahHuruf)

//Memakai Arrow Function//
// let mahasiswa = ["ambo", "budi", "cika"];
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let mahasiswa = ["ambo", "budi", "cika"];
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));
// console.log(jumlahHuruf);

//menambahkan table
// let mahasiswa = ["ambo", "budi", "cika"];
// let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jmlHuruf: nama.length }));
// console.log(jumlahHuruf);
// console.table(jumlahHuruf);

