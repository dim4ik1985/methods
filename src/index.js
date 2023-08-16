import './css/style.css';

import './js/character';
import Zombie from './js/zombie';
import Swordsman from './js/swordsman';

const hero1 = new Zombie('Шугуар', 'Zombie', 0, 0);
const hero2 = new Swordsman('Раген', 'Swordsman');

console.log(hero1, hero2);

hero1.levelUp();
console.log(hero1);

hero2.damage(150);
console.log(hero2);
hero2.levelUp();
console.log(hero2);
