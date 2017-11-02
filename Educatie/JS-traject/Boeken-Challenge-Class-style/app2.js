class Boek {
  constructor({ titel, auteur, aantalAuteurs, paginas, likes }) {
    this.titel = titel;
    this.auteur = auteur;
    this.aantalAuteurs = aantalAuteurs;
    this.paginas = (paginas !== '' && typeof paginas !== 'undefined') ? paginas : 40;
    this.likes = (likes !== '' && typeof likes !== 'undefined') ? likes : 10;
  }

  like() {
    this.likes = this.likes + 1;
    this.alertChange();
  }
  dislike() {
    this.likes = this.likes - 1;
    this.alertChange();
  }
  alertChange() {
    alert(`${this.titel} van ${this.auteur} heeft ${this.likes} likes.`);
  }
}
const boekenKast = []
boekenKast.push(new Boek({ titel: 'Harry Potter De Gevangene As Kar en Ban', auteur: 'J.K.Rowlings', aantalAuteurs: 3 }));
boekenKast.push(new Boek({ titel: 'Harry Potter Filisoferende stoner', auteur: 'J.K.Rowlings', aantalAuteurs: 3, paginas: 20, likes: 30 }));
boekenKast.push(new Boek({ titel: 'Harry Potter en de Vliegende Schotels', auteur: 'J.K.Rowlings' }));
boekenKast.push(new Boek({ titel: 'Harry Potter meets Dolfje weerwolfje', auteur: 'J.K.Rowlings' }));

let selectBoek = document.getElementById('kiesBoek');
for (var i = 0; i < boekenKast.length; i ++) {
  this.boek = boekenKast[i];
  selectBoek[selectBoek.length] = new Option(this.boek.titel, i);
}

const gekozenBoek = selectBoek.options[selectBoek.selectedIndex].value;

document.getElementById('dislike').addEventListener('click', () => { boekenKast[gekozenBoek].dislike(); });
document.getElementById('like').addEventListener('click', () => { boekenKast[gekozenBoek].like(); });
