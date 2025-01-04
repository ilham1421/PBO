function Mahasiswa(nama, umur, statusAktif) {
  let _nama = nama;
  let _umur = umur;
  let _statusAktif = statusAktif;

  this.tampilkanInfo = function () {
    console.log(`Nama: ${_nama}`);
    console.log(`Umur: ${_umur}`);
    console.log(`Status Aktif: ${_statusAktif}`);
  };

  this.ubahNama = function (namaBaru) {
    _nama = namaBaru;
  };

  this.ubahUmur = function (umurBaru) {
    _umur = umurBaru;
  };

  this.ubahStatusAktif = function (statusBaru) {
    _statusAktif = statusBaru;
  };

  Mahasiswa.daftarMahasiswa.push(this);
}
Mahasiswa.daftarMahasiswa = [];

// Menampilkan Seluruh Data Mahasiswa
Mahasiswa.prototype.tampilkanSemuaMahasiswa = function () {
  if (Mahasiswa.daftarMahasiswa.length === 0) {
    console.log("Daftar mahasiswa kosong.");
  } else {
    console.log("Daftar Mahasiswa:");
    Mahasiswa.daftarMahasiswa.forEach((mhs, index) => {
      console.log(`\nMahasiswa ke-${index + 1}:`);
      mhs.tampilkanInfo();
    });
  }
};

// method untuk ubah data mahasiswa
Mahasiswa.ubahMahasiswa = function (index, nama, umur, statusAktif) {
  if (index >= 0 && index < Mahasiswa.daftarMahasiswa.length) {
    const mahasiswa = Mahasiswa.daftarMahasiswa[index];
    if (nama) mahasiswa.ubahNama(nama);
    if (umur) mahasiswa.ubahUmur(umur);
    if (statusAktif !== undefined) mahasiswa.ubahStatusAktif(statusAktif);
    console.log(`Data mahasiswa ke-${index + 1} telah diperbarui.`);
  } else {
    console.log("Index mahasiswa tidak valid.");
  }
};

// method menghapus data mahasiswa
Mahasiswa.hapusMahasiswa = function (index) {
  if (index >= 0 && index < Mahasiswa.daftarMahasiswa.length) {
    const mahasiswaDihapus = Mahasiswa.daftarMahasiswa.splice(index, 1);
    console.log("Mahasiswa telah dihapus.");
  } else {
    console.log("Index mahasiswa tidak valid.");
  }
};

// Input Data, Mengubah, dan Hapus Data Mahasiswa
const mahasiswa1 = new Mahasiswa("ilham", 20, true);
const mahasiswa2 = new Mahasiswa("akbar", 22, false);
const mahasiswa3 = new Mahasiswa("muhammad", 21, true);
const mahasiswa4 = new Mahasiswa("fikri", 23, true);

Mahasiswa.prototype.tampilkanSemuaMahasiswa();

Mahasiswa.ubahMahasiswa(1, "Budi Santoso", 23, true);
Mahasiswa.prototype.tampilkanSemuaMahasiswa();

Mahasiswa.hapusMahasiswa(0);
Mahasiswa.prototype.tampilkanSemuaMahasiswa();
