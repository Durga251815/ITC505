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
    image: "https://example.com/mystical_forest.jpg",
  },
  glowingPath: {
    text: "You follow the glowing path. Where does it lead?",
    choices: ["Enchanted Village", "Ancient Ruins"],
    consequences: ["enchantedVillage", "ancientRuins"],
    image: "https://example.com/glowing_path.jpg",
  },
  whisperingTrees: {
    text: "You investigate the whispering trees. What do you discover?",
    choices: ["Hidden Fairy Realm", "Secret Portal"],
    consequences: ["fairyRealm", "secretPortal"],
    image: "https://example.com/whispering_trees.jpg",
  },
  enchantedVillage: {
    text: "You arrive at an enchanted village. What's your next move?",
    choices: ["Help the Villagers", "Learn Magic Spells"],
    consequences: ["helpVillagers", "learnSpells"],
    image: "https://example.com/enchanted_village.jpg",
  },
  ancientRuins: {
    text: "You explore the ancient ruins. What mystery do you unravel?",
    choices: ["Lost Civilization's Secrets", "Hidden Treasure"],
    consequences: ["lostSecrets", "hiddenTreasure"],
    image: "https://example.com/ancient_ruins.jpg",
  },
  fairyRealm: {
    text: "You enter the hidden fairy realm. What do you wish for?",
    choices: ["Eternal Wisdom", "Infinite Riches"],
    consequences: ["eternalWisdom", "infiniteRiches"],
    image: "https://example.com/fairy_realm.jpg",
  },
  secretPortal: {
    text: "You find a secret portal. Where does it lead?",
    choices: ["Distant Future", "Forgotten Past"],
    consequences: ["distantFuture", "forgottenPast"],
    image: "https://example.com/secret_portal.jpg",
  },
  helpVillagers: {
    text: "You help the villagers and become a beloved hero. Congratulations!",
    choices: ["Ending 1"],
    image: "https://example.com/hero_village.jpg",
  },
  learnSpells: {
    text: "You master magic spells and become a powerful wizard. Congratulations!",
    choices: ["Ending 2"],
    image: "https://example.com/powerful_wizard.jpg",
  },
  lostSecrets: {
    text: "You uncover the secrets of a lost civilization. Congratulations!",
    choices: ["Ending 3"],
    image: "https://example.com/lost_civilization.jpg",
  },
  hiddenTreasure: {
    text: "You discover hidden treasure and become rich. Congratulations!",
    choices: ["Ending 4"],
    image: "https://example.com/hidden_treasure.jpg",
  },
  eternalWisdom: {
    text: "You gain eternal wisdom and understand the mysteries of the universe. Congratulations!",
    choices: ["Ending 5"],
    image: "https://example.com/eternal_wisdom.jpg",
  },
  infiniteRiches: {
    text: "You acquire infinite riches and live a life of luxury. Congratulations!",
    choices: ["Ending 6"],
    image: "https://example.com/infinite_riches.jpg",
  },
  distantFuture: {
    text: "You travel to the distant future and see wonders. Congratulations!",
    choices: ["Ending 7"],
    image: "https://example.com/distant_future.jpg",
  },
  forgottenPast: {
    text: "You explore the forgotten past and learn from history. Congratulations!",
    choices: ["Ending 8"],
    image: "https://example.com/forgotten_past.jpg",
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