let currentState = "start";

let gameData = {
  start: {
    text: "Do you want to start",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://static.vecteezy.com/system/resources/previews/022/712/809/large_2x/a-beautiful-fairytale-enchanted-forest-at-night-made-of-glittering-crystals-with-trees-and-colorful-vegetation-generate-ai-free-photo.jpg",
  },
  start1: {
    text: "You find yourself in a mystical forest at dusk. Choose your path.",
    choices: ["Follow the Glowing Path", "Investigate the Whispering Trees"],
    consequences: ["glowingPath", "whisperingTrees"],
    image: "https://t4.ftcdn.net/jpg/05/58/65/61/360_F_558656183_BeCSV4JyEurUHZKnUDqp2qIRTe9covhE.jpghttps://t4.ftcdn.net/jpg/05/58/65/61/360_F_558656183_BeCSV4JyEurUHZKnUDqp2qIRTe9covhE.jpg",
  },
  glowingPath: {
    text: "You follow the glowing path. Where does it lead?",
    choices: ["Enchanted Village", "Ancient Ruins"],
    consequences: ["enchantedVillage", "ancientRuins"],
    image: "https://s.abcnews.com/images/International/ht_Roosegaarde_bike_path_3_kb_141116_16x9_992.jpg",
  },
  whisperingTrees: {
    text: "You investigate the whispering trees. What do you discover?",
    choices: ["Hidden Fairy Realm", "Secret Portal"],
    consequences: ["fairyRealm", "secretPortal"],
    image: "https://live.staticflickr.com/8062/8184330923_5870107ea6_b.jpg",
  },
  enchantedVillage: {
    text: "You arrive at an enchanted village. What's your next move?",
    choices: ["Help the Villagers", "Learn Magic Spells"],
    consequences: ["helpVillagers", "learnSpells"],
    image: "https://www.onlyinyourstate.com/wp-content/uploads/2017/12/jor6.jpg",
  },
  ancientRuins: {
    text: "You explore the ancient ruins. What mystery do you unravel?",
    choices: ["Lost Civilization's Secrets", "Hidden Treasure"],
    consequences: ["lostSecrets", "hiddenTreasure"],
    image: "https://afar.brightspotcdn.com/dims4/default/aeb4a52/2147483647/strip/true/crop/2500x1667+0+0/resize/1440x960!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F2c%2Fc2%2Fefa05e650905a5be94e7cc146514%2Foriginal-shutterstock-1041869116.jpg",
  },
  fairyRealm: {
    text: "You enter the hidden fairy realm. What do you wish for?",
    choices: ["Eternal Wisdom", "Infinite Riches"],
    consequences: ["eternalWisdom", "infiniteRiches"],
    image: "https://images.nightcafe.studio/jobs/nFsgFZ9ID8yADKkxbGG2/nFsgFZ9ID8yADKkxbGG2.jpg?tr=w-1600,c-at_max",
  },
  secretPortal: {
    text: "You find a secret portal. Where does it lead?",
    choices: ["Distant Future", "Forgotten Past"],
    consequences: ["distantFuture", "forgottenPast"],
    image: "https://img.freepik.com/premium-photo/gateway-secret-portal-concept-art_915367-22534.jpg",
  },
  helpVillagers: {
    text: "You help the villagers and become a beloved hero. Congratulations!",
    choices: ["Ending 1"],
    image: "https://img.freepik.com/premium-photo/man-standing-abstract-architecture-city-illustration-painting_37402-1217.jpg?size=626&ext=jpg",
  },
  learnSpells: {
    text: "You master magic spells and become a powerful wizard. Congratulations!",
    choices: ["Ending 2"],
    image: "https://img.freepik.com/premium-photo/epic-fantasy-illustration-featuring-powerful-wizard-casting-spell-beautiful-magic-mysterious-tale-generative-ai_742252-9531.jpg",
  },
  lostSecrets: {
    text: "You uncover the secrets of a lost civilization. Congratulations!",
    choices: ["Ending 3"],
    image: "https://orion-uploads.openroadmedia.com/sm_a3080a29cb9c-angkor.jpg",
  },
  hiddenTreasure: {
    text: "You discover hidden treasure and become rich. Congratulations!",
    choices: ["Ending 4"],
    image: "https://t3.ftcdn.net/jpg/05/55/44/06/360_F_555440654_U2FXZZb6bcm2C5L0zN3jXHHUaKRqyVMs.jpg",
  },
  eternalWisdom: {
    text: "You gain eternal wisdom and understand the mysteries of the universe. Congratulations!",
    choices: ["Ending 5"],
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/chamber-of-eternal-wisdom-evelina-kremsdorf.jpg",
  },
  infiniteRiches: {
    text: "You acquire infinite riches and live a life of luxury. Congratulations!",
    choices: ["Ending 6"],
    image: "https://i.pinimg.com/736x/c1/e6/e7/c1e6e73047475ffaac54ba4e0d05e404.jpg",
  },
  distantFuture: {
    text: "You travel to the distant future and see wonders. Congratulations!",
    choices: ["Ending 7"],
    image: "https://img.freepik.com/premium-photo/futuristic-cities-distant-future_763713-3417.jpg",
  },
  forgottenPast: {
    text: "You explore the forgotten past and learn from history. Congratulations!",
    choices: ["Ending 8"],
    image: "https://www.metal-archives.com/images/8/4/2/5/84257_logo.jpg",
  },
  
};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

startGame();