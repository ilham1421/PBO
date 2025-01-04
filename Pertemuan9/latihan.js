class Kendaraan {
  constructor(merek, model, tahun) {
    this.merek = merek;
    this.model = model;
    this.tahun = tahun;
  }
  deskripsi() {
    console.log(
      `Mobil ${this.merek} mempunyai model ${this.model} yang diproduksi tahun ${this.tahun}`
    );
  }
}

class KendaraanBensin extends Kendaraan {
  constructor(merek, model, tahun, kapasitasTangki) {
    super(merek, model, tahun);
    this.kapasitasTangki = kapasitasTangki;
  }
  isiBensin(isiBensin) {
    super.deskripsi();
    console.log(
      `Mobil ${this.merek} mempunyai kapasitas tangki ${this.kapasitasTangki} liter dan terisi ${isiBensin} liter`
    );
  }
}

class KendaraanListrik extends Kendaraan {
  constructor(merek, model, tahun, kapasitasBaterai) {
    super(merek, model, tahun);
    this.kapasitasBaterai = kapasitasBaterai;
  }
  isiDaya(isiBaterai) {
    super.deskripsi();
    console.log(
      `Mobil ${this.merek} mempunyai kapasitas baterai ${this.kapasitasBaterai} kWh dan terisi ${isiBaterai} kWh`
    );
  }
}

const mobil = new KendaraanBensin("Toyota", "Avanza", 2021, 30);
mobil.isiBensin(20);

const mobilListrik = new KendaraanListrik("Tesla", "Model S", 2021, 100);
mobilListrik.isiDaya(80);
