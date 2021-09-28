const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => Math.round(Math.random() * (dragon.strength - 15)) + 15;

const warriorDmg = () => Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength;

const mageDmgMana = () => {
  const result = {
    dmg: Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence,
    manaConsumption: 0,
  };
  if (mage.mana < 15) {
    result.dmg = 'Não possui mana suficiente';
  } else {
    result.manaConsumption = 15;
  }
  return result;
};

const gameActions = {
  warriorTurn: callback => {
    const warriorAtack = callback();
    warrior.damage = warriorAtack;
    dragon.healthPoints -= warriorAtack;
  },
  mageTurn: callback => {
    const mageAtack = callback();
    dragon.healthPoints -= mageAtack.dmg;
    mage.damage = mageAtack.dmg;
    mage.mana -= mageAtack.manaConsumption;
  },
  dragonTurn: callback => {
    const dragonAtack = callback();
    mage.healthPoints -= dragonAtack;
    warrior.healthPoints -= dragonAtack;
    dragon.damage = dragonAtack;
  },
  result: () => console.log(battleMembers),
};

console.log(battleMembers);

do {
  gameActions.warriorTurn(warriorDmg)
  gameActions.mageTurn(mageDmgMana)
  gameActions.dragonTurn(dragonDmg)
  gameActions.result()
} while (mage.healthPoints > 0 && warrior.healthPoints > 0 && dragon.healthPoints > 0)
