import { Measures } from './measure';
import { Ingredient } from './../ingredient';

export interface Cocktail {
  id: number;
  name: string;
  instructions: string;
  imageUrl: string;
  Ingredients: Array<Ingredient>;
  Measures: Array<Measures>;
}
