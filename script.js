const heroes = [
    { name: "Luke Skywalker", side: "Lumineux", planet: "Tatooine", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Avancé" },
    { name: "Darth Vader", side: "Obscur", planet: "Tatooine", species: "Humain", lightsaberColor: "Rouge", masteryOfForce: "Maîtrise totale" },
    { name: "Yoda", side: "Lumineux", planet: "Dagobah", species: "Yoda's Species", lightsaberColor: "Vert", masteryOfForce: "Légendaire" },
    { name: "Han Solo", side: "Lumineux", planet: "Corellia", species: "Humain", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "Leia Organa", side: "Lumineux", planet: "Alderaan", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Débutante" },
    { name: "Emperor Palpatine", side: "Obscur", planet: "Naboo", species: "Humain", lightsaberColor: "Rouge", masteryOfForce: "Maîtrise totale" },
    { name: "Chewbacca", side: "Lumineux", planet: "Kashyyyk", species: "Wookiee", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "Obi-Wan Kenobi", side: "Lumineux", planet: "Stewjon", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Avancé" },
    { name: "R2-D2", side: "Lumineux", planet: "Naboo", species: "Droid", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "C-3PO", side: "Lumineux", planet: "Tatooine", species: "Droid", lightsaberColor: "Aucun", masteryOfForce: "Aucun" }
    ];
    
    
  //🔥 Challenge 1 :
   // 👉 Trouve le premier héros lumineux ayant un sabre laser bleu.
   
    const premierHero = heroes.find(h => h.side === 'Lumineux' && h.lightsaberColor === 'Bleu');
    console.log(premierHero);

 //⚡ Challenge 2 :
//👉 Trouve le dernier héros dont le nom contient "Kenobi".

    const dernierHero = heroes.findLast(h => h.name.includes('Kenobi'));
    console.log(dernierHero);

    // 🧬 Challenge 3 :
   // 👉 Trouve l'index du premier héros ayant la maîtrise de la Force "Légendaire" et la planète d'origine "Dagobah".
    
    const indexPremierHero = heroes.findIndex(h => h.masteryOfForce === 'Légendaire' && h.planet === 'Dagobah');
    console.log(indexPremierHero);


    //🥊 Challenge 4 :
    //👉 Trouve l'index du dernier héros dont la planète d'origine est "Tatooine" et qui a un sabre laser rouge.
    
    const indexDernierHero = heroes.findLastIndex(h => h.planet === 'Tatooine' && h.lightsaberColor=== 'Rouge');
    console.log(indexDernierHero);

   // 🎭 Challenge 5 :
   // 👉 Trouve l'index du premier héros dont le nom est "Yoda".

    const indexPremierHeroName = heroes.findIndex(h => h.name === 'Yoda');
    console.log(indexPremierHeroName);


    //🌌 Challenge 6 :
    //👉 Trouve l'index du dernier héros ayant un sabre laser vert.

    const indexDernierHeroSaber = heroes.findLastIndex(h => h.lightsaberColor === 'Vert');
    console.log(indexDernierHeroSaber);


   // 💣 Challenge 7 :
    //👉 Trouve le premier héros non lumineux et de l'espèce "Wookiee". Cela n'existe pas??

    
    

    
   // 🧠 Challenge 8 :
    //👉 Trouve le dernier héros dont le nom contient "Solo" (insensible à la casse).

    const nameSolo = heroes.findLast(h => h.name.includes('Solo'));
    console.log(nameSolo);
    
    //🧪 Challenge 9 :
    //👉 Trouve le premier héros dont la maîtrise de la Force est "Aucun".

    const forceAucun = heroes.find(h => h.masteryOfForce === 'Aucun');
    console.log(forceAucun);
    
    //🧞‍♂️ Challenge 10 :
    //👉 Trouve le premier héros dont le nom fait plus de 10 caractères.

    const nameDix = heroes.find(h => h.name.length > 10);
    console.log(nameDix);