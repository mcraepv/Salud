import { CocktailIngredient } from './cocktailingredient';

export interface Cocktail {
  name: string;
  instructions: string;
  imageUrl: string;
  CocktailIngredients: Array<CocktailIngredient>;
}
