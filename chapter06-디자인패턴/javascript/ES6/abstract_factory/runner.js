import { PetShop, DogFactory } from './abstractFactory.js';
const petShop = new PetShop(new DogFactory());
petShop.showPet();
