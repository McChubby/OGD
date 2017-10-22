import boekenLijst from './data/data';

class Boek {
  constructor(boek) {
    // boek.titel = (typeof boek.titel !== 'undefined') ? boek.titel: 'Boek zonder kaft',
    // boek.auteur
    // boek.aantalAuteurs
    // boek.paginas ,
    // boek.likes
    this.boek = {
      titel: this.titel = (typeof boek.titel !== 'undefined') ? boek.titel : 'Boek zonder kaft',
      auteur: this.auteur = (typeof boek.auteur !== 'undefined') ? boek.auteur : 'John Doe',
      aantalAuteurs: this.aantalAuteurs = (typeof boek.aantalAuteurs !== 'undefined') ? boek.aantalAuteurs : 1,
      paginas: this.paginas = (typeof boek.paginas !== 'undefined') ? boek.paginas : 50,
      likes: this.likes = (typeof boek.likes !== 'undefined') ? boek.likes : 10,
    };
    console.dir(this.boek);
    return this.boek;
  }

  render() {
    console.log(this.boek);
  }

  dislike (gekozenBoek) {
    if(boekenLijst[gekozenBoek].likes <= 0) {
      console.log('0 likes is de bodem.');
    } else {
      boekenLijst[gekozenBoek].likes = boekenLijst[gekozenBoek].likes - 1;
    }
  }
  
  like (gekozenBoek) {
    boekenLijst[gekozenBoek].likes = boekenLijst[gekozenBoek].likes + 1;
  }

  toString (gekozenBoek) {
    var selectie = boekenLijst[gekozenBoek];
    return selectie.titel+" van "+selectie.auteur+" bevat "+selectie.paginas+" pagina's en heeft "+selectie.likes+" likes.";
  }
}
console.log(boekenLijst);

// Nu wordt, m.b.v. deze boekenlijst een <select> gevuld.
const kiesBoek = document.getElementById('kiesBoek');
for (var i = 0; i < boekenLijst.length; i++) {
  kiesBoek[kiesBoek.length] = new Option(boekenLijst[i].titel, i); // Hier loop je vast!
  console.log(kiesBoek[kiesBoek.length]);
}

// Hier voegen we twee javascript event listeners toe aan de elementen met IDs 'dislike' en 'like'.
// Dit hoef je op dit punt in het traject nog niet zelf te kunnen.
document.getElementById('dislike').addEventListener('click', dislikeBoek);
document.getElementById('like').addEventListener('click', likeBoek);

function dislikeBoek(oEvent) {
  oEvent.preventDefault();
  // kiesBoek is een globale variabele die we kunnen gebruiken om het geselecteerde boek te bepalen
  const gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;
  Boek.dislike(gekozenBoek);  
  alert(Boek.toString(gekozenBoek));
}

function likeBoek(oEvent) {
  oEvent.preventDefault();
  const gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;  
  Boek.like(gekozenBoek);
  alert(Boek.toString(gekozenBoek));
}
