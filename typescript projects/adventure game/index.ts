import { prompt, Confirm } from 'inquirer';

interface Enemy {
  name: string;
  health: number;
}

class Player {
  private name: string;
  private health: number;
  private inventory: string[] = [];

  constructor(name: string) {
    this.name = name;
    this.health = 100;
  }

  public attack(enemy: Enemy) {
    const damage = Math.floor(Math.random() * 10) + 1;
    enemy.health -= damage;
  }

  public defend() {
    this.health += 5;
  }

  public useItem(item: string) {
    if (item === 'potion') {
      this.health += 20;
    } else if (item === 'bandage') {
      this.health += 10;
    }
  }

  public isAlive() {
    return this.health > 0;
  }
}

function generateEnemy(): Enemy {
  const enemies = [
    { name: 'Goblin', health: 10 },
    { name: 'Orc', health: 20 },
    { name: 'Dragon', health: 50 },
  ];

  const randomEnemyIndex = Math.floor(Math.random() * enemies.length);
  return enemies[randomEnemyIndex];
}

async function main() {
  const playerName = await prompt({
    type: 'input',
    name: 'name',
    message: 'Enter your name:',
  });

  const player = new Player(playerName);

  const enemy = generateEnemy();

  while (player.isAlive() && enemy.health > 0) {
    // Get the player's action
    const action = await prompt({
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: ['Attack', 'Defend', 'Use item'],
    });

    // Perform the player's action
    switch (action) {
      case 'Attack':
        player.attack(enemy);
        break;
      case 'Defend':
        player.defend();
        break;
      case 'Use item':
        player.useItem(await prompt({
          type: 'list',
          name: 'item',
          message: 'Which item do you want to use?',
          choices: player.inventory,
        }));
        break;
    }

    // Check if the enemy is still alive
    if (enemy.health <= 0) {
      console.log('You win!');
      break;
    }

    // The enemy attacks the player
    enemy.attack(player);

    // Check if the player is still alive
    if (player.health <= 0) {
      console.log('You lose!');
      break;
    }
  }
}

main();
