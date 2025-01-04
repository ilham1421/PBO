class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  aunthenticate() {
    console.log(`Username ${this.username} dan Password ${this.password}`);
  }
}
class adminLogin extends Login {
  constructor(username, password, tingkatan) {
    super(username, password);
    this.tingkatan = tingkatan;
  }
  accessDashboard(angka) {
    super.aunthenticate();
    console.log(
      `Anda login sebagai admin tingkat ${angka} dari total tingkatan yaitu ${this.tingkatan}`
    );
  }
}
class userLogin extends Login {
  constructor(username, password, tingkatan) {
    super(username, password);
    this.tingkatan = tingkatan;
  }
  accessProfile(angka) {
    super.aunthenticate();
    console.log(
      `Anda login sebagai user tingkat VIP ${angka} dengan total tingkatan VIP ${this.tingkatan}`
    );
  }
}

const admin = new adminLogin("admin123", "adminPass", 10);
admin.accessDashboard(5);

const user = new userLogin("userGanteng", "userBanget", 5);
user.accessProfile(3);
