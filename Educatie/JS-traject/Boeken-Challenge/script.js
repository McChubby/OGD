// Boek constructor en prototype
const Boeken = {   
  addBoek(boek) {
    boek.titel = (typeof boek.titel !== 'undefined') ? boek.titel: 'Boek zonder kaft',
    boek.auteur = (typeof boek.auteur !== 'undefined') ? boek.auteur: 'John Doe',
    boek.aantalAuteurs = (typeof boek.aantalAuteurs !== 'undefined') ? boek.aantalAuteurs: 1,
    boek.paginas = (typeof boek.paginas !== 'undefined') ? boek.paginas: 50,
    boek.likes = (typeof boek.likes !== 'undefined') ? boek.likes: 10,
    
    this[boek] = {
      titel: boek.titel, auteur: boek.auteur, aantalAuteurs: boek.aantalAuteurs, paginas: boek.paginas, likes: boek.likes
    };
  return this[boek];
  },

  dislike (gekozenBoek) {
    if(boekenLijst[gekozenBoek].likes <= 0) {
      console.log('0 likes is de bodem.');
    } else {
      boekenLijst[gekozenBoek].likes = boekenLijst[gekozenBoek].likes - 1;
    }
  },

  like (gekozenBoek) {
    boekenLijst[gekozenBoek].likes = boekenLijst[gekozenBoek].likes + 1;
  },

  toString (gekozenBoek) {
    var selectie = boekenLijst[gekozenBoek];
    return selectie.titel+" van "+selectie.auteur+" bevat "+selectie.paginas+" pagina's en heeft "+selectie.likes+" likes.";
  },
};

// **************************************************

// **************************************************

var boekenLijst = [];
// boekenLijst.push(new Boek('JavaScript: The Good Parts', 'Douglas Crockford', 1, 234, 10));
// boekenLijst.push(new Boek('JavaScript for Cats', 'Max Ogden', 1, 201, 10));
// boekenLijst.push(new Boek('Eloquent JavaScript', 'Marijn Haverbeke', 1, 262, 10));
// boekenLijst.push(new Boek('The Magic Mountain', 'Thomas Mann', 1, 235, 32));
// boekenLijst.push(new Boek('Things Fall Apart', 'Chinua Achebe', 1, 938, 40));
// boekenLijst.push(new Boek('Het bureau', 'J.J. Voskuil', 1, 48390, 10));
// boekenLijst.push( new Boek({titel: 'javascript', auteur: 'mijn auteur', paginas: 341}) );
boekenLijst.push(Boeken.addBoek({titel:'De huiswerkopdracht', auteur:'Ruan Kok', aantalAuteurs: 1, likes: 40 }));
boekenLijst.push(Boeken.addBoek({titel:'De huiswerkopdracht', auteur:'Ruan Kok', aantalAuteurs: 1, paginas: 14, likes: 40 }));
boekenLijst.push(Boeken.addBoek({titel: 'javascript', auteur: 'mijn auteur', paginas: 341}));
boekenLijst.push(Boeken.addBoek({auteur:'Douglas Crockford', aantalAuteurs: 1, paginas: 234, likes: 10}));
boekenLijst.push(Boeken.addBoek({titel: 'JavaScript for Cats', auteur:'Max Ogden', paginas: 201, likes: 10}));
boekenLijst.push(Boeken.addBoek({titel: 'Eloquent JavaScript', auteur:'Marijn Haverbeke', aantalAuteurs: 1, paginas: 262, likes: 10}));
boekenLijst.push(Boeken.addBoek({titel:'Het object', aantalAuteurs: 3, paginas: 14}));

// Nu wordt, m.b.v. deze boekenlijst een <select> gevuld.
const kiesBoek = document.getElementById('kiesBoek');
for (var i = 0; i < boekenLijst.length; i++) {
  kiesBoek[kiesBoek.length] = new Option(boekenLijst[i].titel, i); // Hier loop je vast!
}

// Hier voegen we twee javascript event listeners toe aan de elementen met IDs 'dislike' en 'like'.
// Dit hoef je op dit punt in het traject nog niet zelf te kunnen.
document.getElementById('dislike').addEventListener('click', dislikeBoek);
document.getElementById('like').addEventListener('click', likeBoek);

function dislikeBoek(oEvent) {
  oEvent.preventDefault();
  // kiesBoek is een globale variabele die we kunnen gebruiken om het geselecteerde boek te bepalen
  const gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;
  Boeken.dislike(gekozenBoek);  
  alert(Boeken.toString(gekozenBoek));
}

function likeBoek(oEvent) {
  oEvent.preventDefault();
  const gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;  
  Boeken.like(gekozenBoek);
  alert(Boeken.toString(gekozenBoek));
}
