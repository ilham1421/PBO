function Mahasiswa(nama, umur, statusAktif) {
  let _nama = nama;
  let _umur = umur;
  let _statusAktif = statusAktif;

  this.tampilkanInfo = function () {
    return {
      nama: _nama,
      umur: _umur,
      statusAktif: _statusAktif,
    };
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
}

const daftarMahasiswa = [];
let editIndex = null;

function tampilkanMahasiswa() {
  const tabelMahasiswa = document
    .getElementById("tabel-mahasiswa")
    .getElementsByTagName("tbody")[0];
  tabelMahasiswa.innerHTML = "";

  daftarMahasiswa.forEach((mahasiswa, index) => {
    const row = tabelMahasiswa.insertRow();
    const info = mahasiswa.tampilkanInfo();
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${info.nama}</td>
            <td>${info.umur}</td>
            <td>${info.statusAktif ? "Aktif" : "Tidak Aktif"}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editMahasiswa(${index})">Edit</button>
                <button class="action-btn" onclick="hapusMahasiswa(${index})">Hapus</button>
            </td>
        `;
  });
}

document
  .getElementById("form-mahasiswa")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const statusAktif = document.getElementById("status").checked;

    if (editIndex === null) {
      const mahasiswaBaru = new Mahasiswa(nama, umur, statusAktif);
      daftarMahasiswa.push(mahasiswaBaru);
    } else {
      const mahasiswa = daftarMahasiswa[editIndex];
      mahasiswa.ubahNama(nama);
      mahasiswa.ubahUmur(umur);
      mahasiswa.ubahStatusAktif(statusAktif);
      editIndex = null;
      document.getElementById("submit-button").innerText = "Tambah Mahasiswa";
    }

    tampilkanMahasiswa();
    event.target.reset();
  });

function editMahasiswa(index) {
  const mahasiswa = daftarMahasiswa[index];
  const info = mahasiswa.tampilkanInfo();

  document.getElementById("nama").value = info.nama;
  document.getElementById("umur").value = info.umur;
  document.getElementById("status").checked = info.statusAktif;

  editIndex = index;
  document.getElementById("submit-button").innerText = "Edit Mahasiswa";
}

function hapusMahasiswa(index) {
  daftarMahasiswa.splice(index, 1);
  tampilkanMahasiswa();
}
