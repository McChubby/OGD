class BoekInKast {
  constructor(boek) {
    console.log(`dit is ${boek.name}`);
    // this.title = boek.title;
    // this.author = boek.author;
    // this.pages = boek.pages;
    // this.likes = boek.likes;

    this.boek = {
      title: boek.title,
      author: boek.author,
      pages: boek.pages,
      likes: boek.likes,
    };
    console.log(this.boek);
  }

  render() {
    console.log(`het render deel, met ${this.boek}`);
  }
}
const newBook = {
  title: 'BOEK', author: 'Henk', pages: 123, likes: 2,
};
const boek = new BoekInKast(newBook);

console.log(`dit is het BoekInKast class object met ${boek}`);

