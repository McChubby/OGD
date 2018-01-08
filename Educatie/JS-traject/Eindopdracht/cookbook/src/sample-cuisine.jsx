const cuisine = {
  cuisine1: {
    name: 'Italian',
    image: 'https://i.ndtvimg.com/i/2017-09/pasta-con-pomodoro-e-basilico_625x350_51506418092.jpg',
    recipes: {
      recipe1: {
        name: 'Spaghetti Bolognese',
        image: 'http://img.taste.com.au/PXvnKf8Y/taste/2016/11/spaghetti-bolognaise-104579-1.jpeg',
        prep: 20, // always minutes
        numberOfServings: 4,
        ingredients: {
          ingredient1: {
            name: 'rundergehakt',
            amountType: 'g', // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 250, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient2: {
            name: 'ontbijtspek',
            amountType: 'g', // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 100, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient3: {
            name: 'ui',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient4: {
            name: 'teen knoflook',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient5: {
            name: 'tak selderij',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient6: {
            name: 'wortel',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient7: {
            name: 'rode wijn',
            amountType: 'ml', // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 500, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient8: {
            name: 'bouillion',
            amountType: 'ml', // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 100, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient9: {
            name: 'Blik gepelde tomaten',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient10: {
            name: 'tomatenpuree',
            amountType: 'eetl.', // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 2, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient11: {
            name: 'peper',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient12: {
            name: 'zout',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient13: {
            name: 'oregano',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient14: {
            name: 'basillicum',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient15: {
            name: 'paprikapoeder',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient16: {
            name: 'rozemarijn',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient17: {
            name: 'tijm',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient18: {
            name: 'laurierblad',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient20: {
            name: 'boter',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient21: {
            name: 'olijfolie',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },

        },
        steps: {
          1: 'Je warmt de boter en olijfolie in de pan op en fruit daarin de fijngehakte ui, selderij, wortel en het teentje knoflook.',
          2: 'Dan voeg je het gehakt, de spek en het laurierblaadje toe aan de pan',
          3: 'Roer alles goed dooreen, zodat het vlees niet aanbakt. Als het vlees gebakken is haal je het knoflookteentje eruit en doet er de tomaten, wijn,bouillon, tomatenpuree, peper, zout en veel kruiden bij.',
          4: 'Dit laat je dan op een heel zacht vuur enkele uren sudderen. Het mag gerust 3 á 4 uur blijven staan',
          5: 'Ondertussen kook je de spaghetti al dente',
          6: 'Voeg er op het laatst de fijngehakte basilicum bij. Haal de pan van het vuur en doe er eventueel nog wat boter bij.',
          7: 'Giet de ragù over de spaghetti.',
        },

      },
      recipe2: {
        name: 'Spaghetti Bolognese',
        image: 'http://img.taste.com.au/PXvnKf8Y/taste/2016/11/spaghetti-bolognaise-104579-1.jpeg',
        prep: 20, // always minutes
        numberOfServings: 4,
        ingredients: {
          ingredient1: {
            name: 'rundergehakt',
            amountType: 'g', // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 250, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient2: {
            name: 'ontbijtspek',
            amountType: 'g', // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 100, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient3: {
            name: 'ui',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient4: {
            name: 'teen knoflook',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient5: {
            name: 'tak selderij',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient6: {
            name: 'wortel',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient7: {
            name: 'rode wijn',
            amountType: 'ml', // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 500, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient8: {
            name: 'bouillion',
            amountType: 'ml', // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 100, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient9: {
            name: 'Blik gepelde tomaten',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient10: {
            name: 'tomatenpuree',
            amountType: 'eetl.', // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 2, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient11: {
            name: 'peper',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient12: {
            name: 'zout',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient13: {
            name: 'oregano',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient14: {
            name: 'basillicum',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient15: {
            name: 'paprikapoeder',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient16: {
            name: 'rozemarijn',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient17: {
            name: 'tijm',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient18: {
            name: 'laurierblad',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: 1, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient20: {
            name: 'boter',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },
          ingredient21: {
            name: 'olijfolie',
            amountType: null, // Gr, Kg, || cl, ml. l ||  lb, oz  || whole for example 1 or 2 eggs || theel. eetl.
            amount: null, // 1 = 1gr so 1000 === 1 kg
          },

        },
        steps: {
          1: 'Je warmt de boter en olijfolie in de pan op en fruit daarin de fijngehakte ui, selderij, wortel en het teentje knoflook.',
          2: 'Dan voeg je het gehakt, de spek en het laurierblaadje toe aan de pan',
          3: 'Roer alles goed dooreen, zodat het vlees niet aanbakt. Als het vlees gebakken is haal je het knoflookteentje eruit en doet er de tomaten, wijn,bouillon, tomatenpuree, peper, zout en veel kruiden bij.',
          4: 'Dit laat je dan op een heel zacht vuur enkele uren sudderen. Het mag gerust 3 á 4 uur blijven staan',
          5: 'Ondertussen kook je de spaghetti al dente',
          6: 'Voeg er op het laatst de fijngehakte basilicum bij. Haal de pan van het vuur en doe er eventueel nog wat boter bij.',
          7: 'Giet de ragù over de spaghetti',
        },

      },
    },
  },

  cuisine2: {
    name: 'Asian',
    image: 'http://www.newcastlediggers.com.au/wp-content/uploads/2014/08/Mee-Goreng.jpg',
  },

  cuisine3: {
    name: 'Dutch',
    image: 'http://www.tntmagazine.com/media/content/_master/31471/images/poffertjes.jpg',
  },

  cuisine4: {
    name: 'American',
    image: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/american-food-middle-estonia-46ea04be2173ce0e52d5123a59564527.jpg',
  },
};

export default cuisine;