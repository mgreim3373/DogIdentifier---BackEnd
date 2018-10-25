const dogBreeds =
  [
    'afghan hound',
    'ainu dog',
    'airedale terrier',
    'akita',
    'alaskan malamute',
    'american bulldog',
    'american cocker spaniel',
    'american eskimo dog',
    'American Foxhound',
    'American Staffordshire Terrier',
    'American Water Spaniel',
    'Anatolian Shepherd Dog',
    'Anglo-French Hound',
    'Appenzell Mountain Dog',
    'Ariegeois',
    'Armant',
    'Artois Hound',
    'Atlas Dog ',
    'Atlas Terrier',
    'Australian Cattle Dog',
    'Australian Kelpie',
    'Australian Shepherd',
    'Australian Silky-Haired Terrier',
    'Austrian Hound',
    'Austrian Short-Haired Pinscher',
    'Auvergne Pointer',
    'Balkan Hound',
    'Banjara Greyhound',
    'Basenji',
    'Basset Griffon Vendeen',
    'Basset Hound',
    'Bassett Artesian Normand',
    'Bavarian Mountain Dog',
    'Beagle',
    'Beagle Harrier',
    'Bearded Collie',
    'Beauce Shepherd',
    'Bedlington Terrier',
    'Belgian Malinois',
    'Belgian Sheepdog',
    'Belgian Tervuren',
    'Bergamasco',
    'Berger de Bresse',
    'Berger de Savoie',
    'Berger du Languedoc',
    'Bernese Hound',
    'Bernese Mountain Dog',
    'Bichon Frise',
    'Billy',
    'Black and Tan Coonhound',
    'Black Forest Hound',
    'Bloodhound',
    'Blue Lacy',
    'Bluetick Coonhound',
    'Bolognese',
    'Border Collie',
    'Border Terrier',
    'Borzoi',
    'Bosnian Rough-Haired Hound',
    'Boston Terrier',
    'Bouvier des Flanders',
    'Boxer',
    'Boykin Spaniel',
    'Braque du Bourbonnais Setter',
    'Brazilian Mastiff',
    'Brazilian Terrier',
    'Briard',
    'Briquet Griffon Vendeen',
    'Brittany',
    'Broholmer',
    'Bruno Jura Hound',
    'Brussels Griffon',
    'Bull Terrier',
    'Bulldog',
    'Bullmastiff',
    'Cairn Terrier',
    'Canaan Dog',
    'Cane Corso',
    'Cardigan Welsh Corgi',
    'Carolina Dog',
    'Catahoula Leopard',
    'Catalonian Shepherd',
    'Cavalier King Charles Spaniel',
    'Cesky Terrier',
    'Charplaninatz',
    'Chesapeake Bay Retriever',
    'Chihuahua',
    'Chinese Crested Dog',
    'Chinook',
    'Chow Chow',
    'Clumber Spaniel',
    'Cockapoo',
    'Cocker Spaniel',
    'Collie',
    'Coton de Tulear',
    'Curly-Coated Retriever',
    'Dachsbracke',
    'Dachshund',
    'Dalmatian',
    'Dandie Dinmont',
    'Deerhound',
    'Deutsche Wachtelhund',
    'Dingo',
    'Doberman',
    'Dogo Argentino',
    'Dogue De Bordeaux',
    'Drentsche Patrijshond',
    'Drever',
    'Dunker',
    'Dupuy Setter',
    'Dutch Shepherd',
    'Dutch Waterfowl Dog',
    'East Siberian Laika',
    'Elkhound',
    'English Bulldog',
    'English Cocker Spaniel',
    'English Coonhound',
    'English Foxhound',
    'English Setter',
    'English Shepherd',
    'English Springer Spaniel',
    'English Toy Spaniel',
    'English Toy Terrier',
    'Entlebuch Mountain Dog',
    'Eskimo Dog',
    'Estonian Hound',
    'Estrela Mountain Dog',
    'Eurasier',
    'Feist',
    'Field Spaniel',
    'Fila',
    'Finnish Hound',
    'Finnish Spitz',
    'Flat-Coated Retriever',
    'Fox Terrier',
    'French Bulldog',
    'French Hounds',
    'French Setter',
    'French Spaniel',
    'Gascons-saintongeois',
    'German Pointer',
    'German Hunt Terrier',
    'German Shepherd',
    'German Shorthaired Pointer',
    'German Spaniel',
    'German Spitz',
    'German Spitz',
    'German Wirehaired Pointer',
    'Giant Schnauzer',
    'Glen of Imaal Terrier',
    'Golden Cocker Retriever',
    'Golden Retriever',
    'Gordon Setter',
    'Grand Bleu de Gascogne',
    'Grand Basset Griffon Vendeen',
    'Grand Gascons-Saintongeois',
    'Grand Griffon Vendeen',
    'Great Dane',
    'Great Pyrenees',
    'Greater Swiss Mountain Dog',
    'Greek Harehound',
    'Greenland Dog',
    'Greyhound',
    'Griffon Nivernais',
    'Haldenstovare',
    'Hamiltonstovare',
    'Hanoverian Hound',
    'Harlequin Pinscher',
    'Harrier',
    'Havanese',
    'Hovawart',
    'Hungarian Greyhound',
    'Hungarian Shorthaired Vizsla',
    'Hungarian Wirehaired Vizsla',
    'Hygenhund',
    'Ibizan Hound',
    'Icelandic Sheepdog',
    'Irish Setter',
    'Irish Terrier',
    'Irish Water Spaniel',
    'Irish Wolfhound',
    'Istrian Hound',
    'Italian Greyhound',
    'Italian Segugio',
    'Italian Setter',
    'Italian Spinone',
    'Italian Spitz',
    'Jack Russell Terrier',
    'Jamthund',
    'Japanese Chin',
    'Japanese Fighting Dog',
    'Japanese Kai Ken',
    'Japanese Kishu',
    'Japanese Spitz',
    'Japanese Terrier',
    'Jindo',
    'Kangaroo Hound',
    'Karelian Bear Dog',
    'Karst Shepherd',
    'Keeshond',
    'Kerry Blue Terrier',
    'King Charles Spaniel',
    'King Shepherd',
    'Komondor',
    'Kooikerhondje',
    'Kromfohrlander',
    'Kuvasz',
    'labradoodle',
    'labrador retriever',
    'Lakeland Terrier',
    'Lancashire Heeler',
    'Lapland Spitz',
    'Lapponian Herder',
    'Large Munsterlander',
    'Leonberger',
    'Levesque',
    'Lhasa Apso',
    'Llewellin Setter',
    'Lowchen',
    'Lucernese Hound',
    'Lundehund',
    'Lurcher',
    'Majestic Tree Hound',
    'Mallorquin Bulldog',
    'Maltese',
    'Manchester Terrier',
    'Maremma Sheepdog',
    'Mastiff',
    'Mexican Hairless',
    'Mi-Ki',
    'Miniature Bull Terrier',
    'Miniature Dachshund',
    'Miniature Pinscher',
    'Miniature Poodle',
    'Miniature Schnauzer',
    'Mixed Dog',
    'Mountain Cur',
    'Mudi',
    'Neapolitan Mastiff',
    'New Guinea Singing Dog',
    'Newfoundland',
    'Norfolk Terrier',
    'Norwegian Buhund',
    'Norwegian Elkhound',
    'Norwich Terrier',
    'Nova Scotia Duck-Tolling Retriever',
    'Old Danish Pointer',
    'Old English Bulldogge',
    'Old English Sheepdog',
    'Otter Hound',
    'Papillon',
    'Peekapoo',
    'Pekingese',
    'Pembroke Welsh Corgi',
    'Peruvian Inca Orchid',
    'Peruvian Inca Orchid',
    'Petit Basset Griffon Vendeen',
    'Pharaoh Hound',
    'Picardy Shepherd',
    'Pinscher',
    'Pit Bull',
    'Plott Hound',
    'Pointer',
    'Poitevin',
    'Polish Lowland Sheepdog',
    'Pomeranian',
    'Pont-audemer Spaniel',
    'Poodle',
    'Porcelaine',
    'Portuguese Podengo Grande',
    'Portuguese Podengo Medio',
    'Portuguese Podengo Pequeno',
    'Portuguese Setter',
    'Portuguese Water Dog',
    'Posavatz Hound',
    'Presa Canario',
    'Pudlepointer',
    'Pug',
    'Puli',
    'Pumi',
    'Pyrenean Mastiff',
    'Pyrenean Shepherds',
    'Rat Terrier',
    'Redbone Coonhound',
    'Rhodesian Ridgeback',
    'Rottweiler',
    'Rough Collie',
    'Rumanian Shepherd Dog',
    'Russian Hounds',
    'Russian Sheepdogs',
    'Saint -German Setter',
    'Saint Bernard',
    'Saluki',
    'Samoyed',
    'Schapendoes',
    'Schiller Hound',
    'Schipperke',
    'Schnauzer',
    'Scottish Deerhound',
    'Scottish Terrier',
    'Sealyham Terrier',
    'Shar-pei',
    'Shar-pei Mix',
    'Sheltie',
    'Shepherd Mix',
    'Shiba-Inu',
    'Shih Tzu',
    'Shiloh Shepherd',
    'Siberian Husky',
    'Sicilian Hound',
    'Silky Terrier',
    'Skye Terrier',
    'Sloughi',
    'Slovakian Kuvasz',
    'Smaland Hound',
    'Small Blue Gascony Griffon',
    'Small Munsterlanders',
    'Small-sized French Setter',
    'Spanish Greyhound',
    'Spanish Hounds',
    'Spanish Mastiff',
    'Spanish Pointer',
    'Springer Spaniel',
    'St. Hubert Jura Hound',
    'Stabyhoun',
    'Staffordshire Bull Terrier',
    'Steinbracke',
    'Stephens Stock',
    'Sussex Spaniel',
    'Swedish Vallhund',
    'Tahltan Bear Dog',
    'Tawny Brittany Bassett',
    'Tawny Brittany Griffon',
    'Teacup Poodle',
    'Teacup Yorkie',
    'Telomian',
    'Thai Ridgeback',
    'Tibetan Mastiff',
    'Tibetan Spaniel',
    'Tibetan Terrier',
    'Toy Fox Terrier',
    'Toy Poodle',
    'Toy Poodle',
    'Transylvanian Hound',
    'Treeing Tennessee Brindle',
    'Tyrolean Hound',
    'Vizsla',
    'Walker Hound ',
    'Weimaraner',
    'Welsh Corgi - Cardigan',
    'Welsh Corgi - Pembroke',
    'Welsh Springer Spaniel',
    'Welsh Terrier',
    'West Highland Terrier',
    'West Siberian Laika',
    'Wetterhound',
    'Wheaten Terrier',
    'Whippet',
    'Wire Fox Terrier',
    'Wirehaired Pointing Griffin',
    'Xolo Miniature',
    'Xolo Standard',
    "Afghan Hound",
    "Afghan Shepherd",
    "Aidi",
    "Airedale Terrier",
    "Akbash",
    "Akita",
    "Alano Español",
    "Alaskan husky",
    "Alaskan Klee Kai",
    "Alaskan Malamute",
    "Alaunt",
    "Alopekis",
    "Alpine Dachsbracke",
    "Alpine Mastiff",
    "Alpine Spaniel",
    "American Akita",
    "American Bulldog",
    "American Cocker Spaniel",
    "American English Coonhound",
    "American Eskimo Dog",
    "American Foxhound",
    "American Hairless Terrier",
    "American Pit Bull Terrier",
    "American Staffordshire Terrier",
    "American Water Spaniel",
    "Anatolian Shepherd Dog",
    "Andalusian Hound",
    "Anglo-Français de Petite Vénerie",
    "Appenzeller Sennenhund",
    "Braque de l'Ariege",
    "Ariegeois",
    "Armant",
    "Armenian Gampr dog",
    "Artois Hound",
    "Australian Cattle Dog",
    "Australian Kelpie",
    "Australian Shepherd",
    "Australian Silky Terrier",
    "Australian Stumpy Tail Cattle Dog[10]",
    "Australian Terrier",
    "Austrian Black and Tan Hound",
    "Austrian Pinscher",
    "Azawakh",
    "Bakharwal Dog",
    "Barbet",
    "Basenji",
    "Basque Shepherd Dog",
    "Basset Artésien Normand",
    "Basset Bleu de Gascogne",
    "Basset Fauve de Bretagne",
    "Basset Griffon Vendéen",
    "Basset Griffon Vendéen",
    "Basset Hound",
    "Bavarian Mountain Hound",
    "Beagle",
    "Beagle-Harrier",
    "Bearded Collie",
    "Beauceron",
    "Bedlington Terrier",
    "Belgian Shepherd Dog (Groenendael)",
    "Belgian Shepherd Dog (Laekenois)",
    "Belgian Shepherd Dog (Malinois)",
    "Belgian Shepherd Dog (Tervuren)",
    "Bergamasco Shepherd",
    "Berger Blanc Suisse",
    "Berger Picard",
    "Bernese Mountain Dog",
    "Bichon Frisé",
    "Billy",
    "Black and Tan Coonhound",
    "Black and Tan Virginia Foxhound",
    "Black Norwegian Elkhound",
    "Black Russian Terrier",
    "Black Mouth Cur",
    "Bleu de Gascogne",
    "Bleu de Gascogne",
    "Bloodhound",
    "Blue Heeler",
    "Blue Lacy",
    "Blue Paul Terrier",
    "Blue Picardy Spaniel",
    "Bluetick Coonhound",
    "Boerboel",
    "Bohemian Shepherd",
    "Bolognese",
    "Border Collie",
    "Border Terrier",
    "Borzoi",
    "Bosnian Coarse-haired Hound",
    "Boston Terrier",
    "Bouvier des Ardennes",
    "Bouvier des Flandres",
    "Boxer",
    "Boykin Spaniel",
    "Bracco Italiano",
    "Braque d'Auvergne",
    "Braque du Bourbonnais",
    "Braque du Puy",
    "Braque Francais",
    "Braque Saint-Germain",
    "Brazilian Dogo",
    "Brazilian Terrier",
    "Briard",
    "Briquet Griffon Vendéen",
    "Brittany",
    "Broholmer",
    "Bruno Jura Hound",
    "Bucovina Shepherd Dog",
    "Bull and Terrier",
    "Bull Terrier",
    "Miniature Bull Terrier",
    "Bulldog",
    "Bullenbeisser",
    "Bullmastiff",
    "Bully Kutta",
    "Perdiguero de Burgos",
    "Cairn Terrier",
    "Canaan Dog",
    "Canadian Eskimo Dog",
    "Cane Corso",
    "Cantabrian Water Dog",
    "Cão da Serra de Aires",
    "Cão de Castro Laboreiro",
    "Cão de Gado Transmontano",
    "Cão Fila de São Miguel",
    "Carolina Dog",
    "Carpathian Shepherd Dog",
    "Catahoula Leopard Dog",
    "Catalan Sheepdog",
    "Caucasian Shepherd Dog",
    "Cavalier King Charles Spaniel",
    "Central Asian Shepherd Dog",
    "Cesky Fousek",
    "Cesky Terrier",
    "Chesapeake Bay Retriever",
    "Chien Français Blanc et Noir",
    "Chien Français Blanc et Orange",
    "Chien Français Tricolore",
    "Chien-gris",
    "Chihuahua",
    "Chilean Fox Terrier",
    "Chinese Chongqing Dog",
    "Chinese Crested Dog",
    "Chinese Imperial Dog",
    "Chinook",
    "Chippiparai",
    "Chow Chow",
    "Cierny Sery",
    "Cirneco dell'Etna",
    "Clumber Spaniel",
    "Collie",
    "Collie",
    "Combai",
    "Cordoba Fighting Dog",
    "Coton de Tulear",
    "Cretan Hound",
    "Croatian Sheepdog",
    "Cumberland Sheepdog",
    "Curly-Coated Retriever",
    "Cursinu",
    "Czechoslovakian Wolfdog",
    "Dachshund",
    "Dalmatian",
    "Dandie Dinmont Terrier",
    "Danish-Swedish Farmdog",
    "Deutsche Bracke",
    "Doberman Pinscher",
    "Dogo Argentino",
    "Dogo Cubano",
    "Dogue de Bordeaux",
    "Drentse Patrijshond",
    "Drever",
    "Dunker",
    "Dutch Shepherd",
    "Dutch Smoushond",
    "East Siberian Laika",
    "East European Shepherd",
    "Elo",
    "English Cocker Spaniel",
    "English Foxhound",
    "Mastiff",
    "English Setter",
    "English Shepherd",
    "English Springer Spaniel",
    "English Toy Terrier (Black & Tan)",
    "English Water Spaniel",
    "English White Terrier",
    "Entlebucher Mountain Dog",
    "Estonian Hound",
    "Estrela Mountain Dog",
    "Eurasier",
    "Eurohound",
    "Field Spaniel",
    "Fila Brasileiro",
    "Finnish Hound",
    "Finnish Lapphund",
    "Finnish Spitz",
    "Flat-Coated Retriever",
    "Fox Terrier",
    "Fox Terrier",
    "French Brittany",
    "French Bulldog",
    "French Spaniel",
    "Gaddi Dog",
    "Galgo Español",
    "Galician Cattle Dog",
    "Garafian Shepherd",
    "Gascon Saintongeois",
    "Georgian Shepherd Dog",
    "German Longhaired Pointer",
    "German Pinscher",
    "German Roughhaired Pointer",
    "German Shepherd Dog",
    "German Shorthaired Pointer",
    "German Spaniel",
    "German Spitz",
    "German Wirehaired Pointer",
    "Giant Schnauzer",
    "Glen of Imaal Terrier",
    "Golden Retriever",
    "Gordon Setter",
    "Gran Mastín de Borínquen",
    "Grand Anglo-Français Blanc et Noir",
    "Grand Anglo-Français Blanc et Orange",
    "Grand Anglo-Français Tricolore",
    "Grand Griffon Vendéen",
    "Great Dane",
    "Great Pyrenees",
    "Greater Swiss Mountain Dog",
    "Greek Harehound",
    "Greenland Dog",
    "Greyhound",
    "Griffon Bleu de Gascogne",
    "Griffon Bruxellois",
    "Griffon Fauve de Bretagne",
    "Griffon Nivernais",
    "Guatemalan Dogo",
    "Hamiltonstövare",
    "Hanover Hound",
    "Hare Indian Dog",
    "Harrier",
    "Havanese",
    "Hawaiian Poi Dog",
    "Himalayan Sheepdog",
    "Hokkaido",
    "Hortaya Borzaya",
    "Hovawart",
    "Huntaway",
    "Hygenhund",
    "Ibizan Hound",
    "Icelandic Sheepdog",
    "Indian pariah dog",
    "Indian Spitz",
    "Irish Red and White Setter",
    "Irish Setter",
    "Irish Terrier",
    "Irish Water Spaniel",
    "Irish Wolfhound",
    "Istrian Coarse-haired Hound",
    "Istrian Shorthaired Hound",
    "Italian Greyhound",
    "Jack Russell Terrier",
    "Jagdterrier",
    "Jämthund",
    "Japanese Chin",
    "Japanese Spitz",
    "Japanese Terrier",
    "Kaikadi",
    "Kai Ken",
    "Kangal Dog",
    "Kanni",
    "Karakachan Dog",
    "Karelian Bear Dog",
    "Karst Shepherd",
    "Keeshond",
    "Kerry Beagle",
    "Kerry Blue Terrier",
    "King Charles Spaniel",
    "King Shepherd",
    "Kintamani",
    "Kishu Ken",
    "Komondor",
    "Kooikerhondje",
    "Koolie",
    "Korean Jindo",
    "Kromfohrländer",
    "Kumaon Mastiff",
    "Kunming Wolfdog",
    "Kurī",
    "Kuvasz",
    "Kyi-Leo",
    "Labrador Husky",
    "Labrador Retriever",
    "Lagotto Romagnolo",
    "Lakeland Terrier",
    "Lancashire Heeler",
    "Landseer",
    "Lapponian Herder",
    "Leonberger",
    "Lhasa Apso",
    "Lithuanian Hound",
    "Löwchen",
    "Mackenzie River Husky",
    "Magyar Agár",
    "Mahratta Greyhound",
    "Majorca Ratter",
    "Majorca Shepherd Dog",
    "Maltese",
    "Manchester Terrier",
    "Maremma Sheepdog",
    "McNab",
    "Mexican Hairless Dog",
    "Miniature Australian Shepherd",
    "Miniature American Shepherd",
    "Miniature Fox Terrier",
    "Miniature Pinscher",
    "Miniature Schnauzer",
    "Miniature Shar Pei",
    "Romanian Mioritic Shepherd Dog",
    "Molossus",
    "Molossus of Epirus",
    "Montenegrin Mountain Hound",
    "Moscow Watchdog",
    "Moscow Water Dog",
    "Mountain Cur",
    "Mucuchies",
    "Mudhol Hound",
    "Mudi",
    "Münsterländer",
    "Münsterländer",
    "Neapolitan Mastiff",
    "Newfoundland",
    "New Zealand Heading Dog",
    "Norfolk Spaniel",
    "Norfolk Terrier",
    "Norrbottenspets",
    "North Country Beagle",
    "Northern Inuit Dog",
    "Norwegian Buhund",
    "Norwegian Elkhound",
    "Norwegian Lundehund",
    "Norwich Terrier",
    "Nova Scotia Duck Tolling Retriever",
    "Old Croatian Sighthound",
    "Old Danish Pointer",
    "Old English Sheepdog",
    "Old English Terrier",
    "Old German Shepherd Dog",
    "Old Time Farm Shepherd",
    "Olde English Bulldogge",
    "Otterhound",
    "Pachon Navarro",
    "Pandikona Hunting Dog",
    "Paisley Terrier",
    "Papillon",
    "Parson Russell Terrier",
    "Patterdale Terrier",
    "Pekingese",
    "Perro de Presa Canario",
    "Perro de Presa Mallorquin",
    "Peruvian Hairless Dog",
    "Phalène",
    "Pharaoh Hound",
    "Phu Quoc Ridgeback",
    "Picardy Spaniel",
    "Plummer Terrier",
    "Plott Hound",
    "Podenco Canario",
    "Pointer",
    "Poitevin",
    "Polish Greyhound",
    "Polish Hound",
    "Polish Hunting Dog",
    "Polish Lowland Sheepdog",
    "Polish Tatra Sheepdog",
    "Pomeranian",
    "Pont-Audemer Spaniel",
    "Poodle",
    "Porcelaine",
    "Portuguese Podengo",
    "Portuguese Pointer",
    "Portuguese Water Dog",
    "Posavac Hound",
    "Pražský Krysařík",
    "Pudelpointer",
    "Pug",
    "Puli",
    "Pumi",
    "Pungsan Dog",
    "Pyrenean Mastiff",
    "Pyrenean Shepherd",
    "Rafeiro do Alentejo",
    "Rajapalayam",
    "Rampur Greyhound",
    "Rastreador Brasileiro",
    "Ratonero Bodeguero Andaluz",
    "Ratonero Murciano de Huerta",
    "Ratonero Valenciano",
    "Rat Terrier",
    "Redbone Coonhound",
    "Rhodesian Ridgeback",
    "Rottweiler",
    "Russian Spaniel",
    "Russian Toy",
    "Russian Tracker",
    "Russo-European Laika",
    "Russell Terrier",
    "Saarloos Wolfdog",
    "Sabueso Español",
    "Sabueso fino Colombiano",
    "Saint-Usuge Spaniel",
    "Sakhalin Husky",
    "Saluki",
    "Samoyed",
    "Sapsali",
    "Šarplaninac",
    "Schapendoes",
    "Schillerstövare",
    "Schipperke",
    "Standard Schnauzer",
    "Schweizer Laufhund",
    "Schweizerischer Niederlaufhund",
    "Scotch Collie",
    "Scottish Deerhound",
    "Scottish Terrier",
    "Sealyham Terrier",
    "Segugio Italiano",
    "Seppala Siberian Sleddog",
    "Serbian Hound",
    "Serbian Tricolour Hound",
    "Seskar Seal Dog",
    "Shar Pei",
    "Shetland Sheepdog",
    "Shiba Inu",
    "Shih Tzu",
    "Shikoku",
    "Shiloh Shepherd",
    "Siberian Husky",
    "Silken Windhound",
    "Sinhala Hound",
    "Skye Terrier",
    "Sloughi",
    "Slovak Cuvac",
    "Slovakian Wirehaired Pointer",
    "Slovenský Kopov",
    "Smålandsstövare",
    "Small Greek Domestic Dog",
    "Soft-Coated Wheaten Terrier",
    "South Russian Ovcharka",
    "Southern Hound",
    "Spanish Mastiff",
    "Spanish Water Dog",
    "Spinone Italiano",
    "Sporting Lucas Terrier",
    "St. Bernard",
    "St. John's water dog",
    "Stabyhoun",
    "Staffordshire Bull Terrier",
    "Stephens Cur",
    "Styrian Coarse-haired Hound",
    "Sussex Spaniel",
    "Swedish Lapphund",
    "Swedish Vallhund",
    "Tahltan Bear Dog",
    "Taigan",
    "Taiwan Dog",
    "Talbot",
    "Tamaskan Dog",
    "Teddy Roosevelt Terrier",
    "Telomian",
    "Tenterfield Terrier",
    "Terceira Mastiff",
    "Thai Bangkaew Dog",
    "Thai Ridgeback",
    "Tibetan Mastiff",
    "Tibetan Spaniel",
    "Tibetan Terrier",
    "Tornjak",
    "Tosa",
    "Toy Bulldog",
    "Toy Fox Terrier",
    "Toy Manchester Terrier",
    "Toy Trawler Spaniel",
    "Transylvanian Hound",
    "Treeing Cur",
    "Treeing Tennessee Brindle",
    "Treeing Walker Coonhound",
    "Trigg Hound",
    "Tweed Water Spaniel",
    "Tyrolean Hound",
    "Cimarrón Uruguayo",
    "Valencian Ratter",
    "Vanjari Hound",
    "Villano de Las Encartaciones",
    "Villanuco de Las Encartaciones",
    "Vizsla",
    "Volpino Italiano",
    "Weimaraner",
    "Welsh Corgi",
    "Welsh Corgi",
    "Welsh Sheepdog",
    "Welsh Springer Spaniel",
    "Welsh Terrier",
    "West Highland White Terrier",
    "West Siberian Laika",
    "Westphalian Dachsbracke",
    "Wetterhoun",
    "Whippet",
    "White Shepherd",
    "Wirehaired Pointing Griffon"
  ]

module.exports = dogBreeds