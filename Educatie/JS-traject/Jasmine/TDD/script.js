// Dit is de mapper constructor. De structuur is al af, dat betekent dat de namen van de fucties vast staan
// en de parameters van de functies. De functies zelf moeten nog geschreven worden. Zorg ervoor dat alle unit testen slangen.

var ApiToUserMapper = {
    // Een getal moet omgezet worden naar een string met de taalafhangkelijke decimalSeparator
    // Dus 1.12 -> "1,12"
    float: function (value, decimalSeparator) {
      value2String = value.toString();
      var value2Decimal = value2String.replace('.',',');
      return value2Decimal;
    },
    
    // Een geld bedrag moet altijd een euro teken voor het bedrag tonen
    // Het juiste decimaal teken gebruiken
    // Altijd op twee decimalen afronden
    // 2 -> "€2,00" 
    euro: function (value, decimalSeparator) {
      var fixed = value.toFixed(2);
      var valueString = fixed.toString()
      var value2String = valueString.replace('.',',');
      var makeMoney = '€'+value2String;  
      return makeMoney;
    },
    
    // een boolean komt als true / false van de server 
    // maar moet omgezet woorden naar de correcte label voor de gebruiker
    // bijvoorbeeld "ja" of "nee"
    boolean: function (value, trueString, falseString) {
      var newValue;
      if(value === true){
        newValue = 'ja';
      }else if(value === false){
        newValue = 'niet waar';
      }
      return newValue;
    },
    
    // data komt als ISO 8601 UTC date time string van de server ("2014-04-05T00:00:00+00:00")
    // Maar moet als dd-mm-yyyy aan de gebruiker getoond worden
    date: function (value) {
      var slicedValue = value.slice(0,10);
      var year = slicedValue.slice(0,4);
      var month = slicedValue.slice(5,7);
      var day = slicedValue.slice(8,10);
      
      var newDate = day+'-'+month+'-'+year;
      return newDate;
    },
    
    // Data komt als ISO 8601 UTC date time string van de server ("2014-04-05T00:00:00+00:00")
    // Maar de gebruiker wilt, als het moment vandaag is, alleen de tijd (hh:mm) zien, 
    // als het moment NIET vandaag is moet de datum getoond worden. (dd-mm-yyyy)
    TimeIfTodayElseDate: function (dateTime) {
      console.log("test ");
      console.log('huidige datum:');
      console.log('invoer datum:');
      return dateTime;
    },
    
    // De api geeft bij verschillende objecten een foreign key terug met een user id (bijvoorbeeld bij wie een bericht geplaats heeft)
    // Maar de gebruiker wilt een volledige naam zien
    // In deze functie wordt als eerste paramenter de user id geplaats
    // Als tweede paramter een array met user objecten. 
    //    Een user object heeft altij een "voormaam" en een "achternaam" en soms een "tussenvoegsels"
    // return value is de volledige naam 
    
    // Voorbeeld:
  
    // listOfUsers = [
    //   {id: 0, voornaam: "Barbara", achternaam: "Honhoff"},
    //   {id: 1, voornaam: "Michael", achternaam: "Sommer"},
    //   {id: 2, voornaam: "Oscar", achternaam: "Groot", tussenvoegsels: "de" }
    // ]
    
    // nameOfUser(2, listOfUsers);
    //   -> "Oscar de Groot"
    
      // nameOfUser(0, listOfUsers);
    //   -> "Barbara Honhoff"
    
    nameOfUser: function (id, listOfUsers) {
      return id;
    }
  }