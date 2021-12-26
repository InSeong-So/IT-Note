import { PetShop, CatFactory, DogFactory } from './abstractFactory';

const petShop = new PetShop(new DogFactory());
petShop.showPet();
