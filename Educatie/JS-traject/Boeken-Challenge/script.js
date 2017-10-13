// Boek constructor en prototype
function Boek (arg) { 
    arg.titel = (typeof arg.titel !== 'undefined') ? arg.titel: 'Boek zonder kaft',
    arg.auteur = (typeof arg.auteur !== 'undefined') ? arg.auteur: 'John Doe',
    arg.aantalAuteurs = (typeof arg.aantalAuteurs !== 'undefined') ? arg.aantalAuteurs: 1,
    arg.paginas = (typeof arg.paginas !== 'undefined') ? arg.paginas: 50,
    arg.likes = (typeof arg.likes !== 'undefined') ? arg.likes: 10,
    
    this.titel= arg.titel;
    this.auteur= arg.auteur;
    this.aantalAuteurs= arg.aantalAuteurs;
    this.paginas= arg.paginas;
    this.likes= arg.likes;
}
console.log(Boek);

// **************************************************
// Maak boek prototype functies:

// dislike: haalt 1 van het totale aantal likes af. Aantal likes mag niet minder dan 0 zijn
function dislike(gekozenBoek){
    
    if(boekenLijst[gekozenBoek].likes <= 0){
        console.log('0 likes is de bodem.');
    } else {
        boekenLijst[gekozenBoek].likes = boekenLijst[gekozenBoek].likes - 1;
    }
}
// like: telt 1 op bij het totale aantal likes
function like(gekozenBoek){
    boekenLijst[gekozenBoek].likes = boekenLijst[gekozenBoek].likes + 1;
}
// toString: geeft een string representatie van een boek. Bijvoorbeeld: "JavaScript for Cats van Max Ogden bevat 201 pagina's en heeft 34 likes"\\
function toString(gekozenBoek){
    var selectie = boekenLijst[gekozenBoek];
    // console.log(selectie);
    
    var string = selectie.titel+" van "+selectie.auteur+" bevat "+selectie.paginas+" pagina's en heeft "+selectie.likes+" likes.";
    return string;
}
// **************************************************

var boekenLijst = [];
// boekenLijst.push(new Boek('JavaScript: The Good Parts', 'Douglas Crockford', 1, 234, 10));
// boekenLijst.push(new Boek('JavaScript for Cats', 'Max Ogden', 1, 201, 10));
// boekenLijst.push(new Boek('Eloquent JavaScript', 'Marijn Haverbeke', 1, 262, 10));
// boekenLijst.push(new Boek('The Magic Mountain', 'Thomas Mann', 1, 235, 32));
// boekenLijst.push(new Boek('Things Fall Apart', 'Chinua Achebe', 1, 938, 40));
// boekenLijst.push(new Boek('Het bureau', 'J.J. Voskuil', 1, 48390, 10));
// boekenLijst.push( new Boek({titel: 'javascript', auteur: 'mijn auteur', paginas: 341}) );
boekenLijst.push(new Boek({titel:'De huiswerkopdracht', auteur:'Ruan Kok', aantalAuteurs: 1, paginas: 14, likes: 40}));
boekenLijst.push(new Boek({titel: 'javascript', auteur: 'mijn auteur', paginas: 341}));
boekenLijst.push(new Boek({auteur:'Douglas Crockford', aantalAuteurs: 1, paginas: 234, likes: 10}));
boekenLijst.push(new Boek({titel: 'JavaScript for Cats', auteur:'Max Ogden', paginas: 201, likes: 10}));
boekenLijst.push(new Boek({titel: 'Eloquent JavaScript', auteur:'Marijn Haverbeke', aantalAuteurs: 1, paginas: 262, likes: 10}));
boekenLijst.push(new Boek({titel:'Het object', aantalAuteurs: 3, paginas: 14}));


// Nu wordt, m.b.v. deze boekenlijst een <select> gevuld.
var kiesBoek = document.getElementById('kiesBoek');
for (var i=0; i<boekenLijst.length; i++) {
    kiesBoek[kiesBoek.length] = new Option(boekenLijst[i].titel, i);
}

// Hier voegen we twee javascript event listeners toe aan de elementen met IDs 'dislike' en 'like'.
// Dit hoef je op dit punt in het traject nog niet zelf te kunnen.
document.getElementById('dislike').addEventListener('click', dislikeBoek);
document.getElementById('like').addEventListener('click', likeBoek);

function dislikeBoek(oEvent) {
    oEvent.preventDefault();
    
    // kiesBoek is een globale variabele die we kunnen gebruiken om het geselecteerde boek te bepalen
    var gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;
    dislike(gekozenBoek);
    
    // boekenLijst[gekozenBoek].dislike();
    alert(toString(gekozenBoek));
}

function likeBoek(oEvent) {
    oEvent.preventDefault();
    var gekozenBoek = kiesBoek.options[kiesBoek.selectedIndex].value;
    
    like(gekozenBoek);
    alert(toString(gekozenBoek));
    
}
    