class Ship  {
  constructor(hull, damage, accuracy,name){
    this.hull = hull,
    this.damage = damage,
    this.accuracy = accuracy,
    this.name = name
  }
}

const game = {
  zero_to_one_inclusive () {
      if(Math.random() == 0)
      return 1;
      else
      return Math.random();
  },
  inclusive_random_int (min, max) {
    range = max - min + 1;
    return min + Math.round(game.zero_to_one_inclusive()*range);
  },
  inclusive_random_float(min, max){
    range = max - min;
    return min + game.zero_to_one_inclusive()*range;
  },
  attack_target (attacker, target) {
    console.log(target);
    if (game.zero_to_one_inclusive() >= attacker.accuracy){
      return (`${attacker.name} misses!`);
    }
    target.hull -= attacker.damage;
    console.log(target.hull);
    return (`${attacker.name} attacks ${target.name} for ${attacker.damage} damage!`);
  },
  combat_round (player, alien) {
    console.log(game.attack_target(player, alien));
    if (alien.hull > 0){
      console.log(game.attack_target(alien, player));
    }
    else {
      console.log(`${alien.name} explodes!`);
    }

  },
  play () {
    const player = new Ship (20, 5, .7, "The Enterprize")
    let aliens= [];
    for(i = 1; i <7;i++){
      aliens[i] = new Ship(game.inclusive_random_int(3, 6), game.inclusive_random_int(2,4), game.inclusive_random_float(.6,.8), `Alien Ship ${i}`)
      }
      i=1;
      has_exploded = false;
    while(aliens[1] && has_exploded === false){
    active_alien = aliens[i];
        while (player.hull > 0 && aliens[i].hull > 0){
        game.combat_round(player, active_alien);
      }
      if (active_alien.hull < 1){
        aliens.splice(i,1);
      }
      if (player.hull < 1){
      console.log("Criticial systems failure!");
      has_exploded = true;
      }
    }
  if (has_exploded === false){
    console.log("You have vanquished the invading alien fleet!")
    return;
  }
  else {
    console.log("You have failed to save Earth!");
    return;
  }

},
}
game.play();
