const boekenKast = [];
class Boek {
  constructor(boek) {
    this.boek = {
      key: boek.key,
      titel: this.titel = (typeof boek.titel !== 'undefined') ? boek.titel : 'Boek zonder kaft',
      auteur: this.auteur = (typeof boek.auteur !== 'undefined') ? boek.auteur : 'John Doe',
      aantalAuteurs: this.aantalAuteurs = (typeof boek.aantalAuteurs !== 'undefined') ? boek.aantalAuteurs : 1,
      paginas: this.paginas = (typeof boek.paginas !== 'undefined') ? boek.paginas : 50,
      likes: this.likes = (typeof boek.likes !== 'undefined') ? boek.likes : 10,
    };
    console.dir(this.boek);
  }

  dislike(gekozenBoek) {
    boekenKast.forEach((boek) => {
      console.dir(`boek #${[gekozenBoek]}`);
    });

    let selectBoek = boekenKast[gekozenBoek];
    if (this.likes <= 0) {
      console.log('0 likes is de bodem.');
    } else {
      this.likes = this.likes - 1;
    }
  }

  like(gekozenBoek) {
    let selectBoek = boekenKast[gekozenBoek];
    this.likes = this.likes + 1;
  }

  toString() {
    // return `${this.boek.titel} van ${this.boek.auteur} bevat ${this.boek.paginas} pagina's en heeft ${this.boek.likes} likes.`;
  }
}

// **************************************************

// **************************************************

const type = typeof boekenKast;
console.log(`typeof: ${type}`);

boekenKast.push(new Boek({
  key: 0,
  titel: 'De huiswerkopdracht',
  auteur: 'Ruan Kok',
  aantalAuteurs: 1,
  likes: 40,
}));

boekenKast.push(new Boek({
  key: 1,
  titel: 'De huiswerkopdracht',
  auteur: 'Ruan Kok',
  aantalAuteurs: 1,
  paginas: 14,
  likes: 40,
}));

boekenKast.push(new Boek({
  key: 2,
  titel: 'javascript',
  auteur: 'mijn auteur',
  paginas: 341,
}));

boekenKast.push(new Boek({
  key: 3,
  auteur: 'Douglas Crockford',
  aantalAuteurs: 1,
  paginas: 234,
  likes: 10,
}));

boekenKast.push(new Boek({
  key: 4,
  titel: 'JavaScript for Cats',
  auteur: 'Max Ogden',
  paginas: 201,
  likes: 10,
}));

boekenKast.push(new Boek({
  key: 5,
  titel: 'Eloquent JavaScript', 
  auteur: 'Marijn Haverbeke',
  aantalAuteurs: 1,
  paginas: 262,
  likes: 10,
}));

boekenKast.push(new Boek({
  key: 6,
  titel: 'Het object',
  aantalAuteurs: 3,
  paginas: 14,
}));


// Nu wordt, m.b.v. deze boekenlijst een <select> gevuld.
const kiesBoek = document.getElementById('kiesBoek');
for (var i = 0; i < boekenKast.length; i++) {
  kiesBoek[kiesBoek.length] = new Option(boekenKast[i].titel, i); // Hier loop je vast!
  console.log(kiesBoek[kiesBoek.length]);
}

function dislikeBoek(oEvent) {
  oEvent.preventDefault();
  // kiesBoek is een globale variabele die we kunnen gebruiken om het geselecteerde boek te bepalen
  const gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;
  Boek.prototype.dislike(gekozenBoek); 
  console.log(`Het geselecteerde boek ${Boek.prototype}`);
  // alert(Boek.toString(gekozenBoek));
}

console.log(boekenKast);
function likeBoek(oEvent) {
  oEvent.preventDefault();
  const gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;  
  // console.log(gekozenBoek);
  Boek.prototype.like(gekozenBoek);
  alert(Boek.toString());
}

// Hier voegen we twee javascript event listeners toe aan de elementen met IDs 'dislike' en 'like'.
// Dit hoef je op dit punt in het traject nog niet zelf te kunnen.
document.getElementById('dislike').addEventListener('click', dislikeBoek);
document.getElementById('like').addEventListener('click', likeBoek);
