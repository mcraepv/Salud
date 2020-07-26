import { Ingredient } from './ingredient';

export interface Cocktail {
  Ingredients: Array<Ingredient>;
  id: number;
  imageUrl: string;
  instructions: string;
  name: string;
  source: string;
}
