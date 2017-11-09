import { CategoryEnum } from './category.enum';
import { Ingredient } from './ingredient.model';
import { Equivalent } from './equivalent.model';

export class Product {
  public name: string;
  public description: string;
  public price: number;
  public category: CategoryEnum;
  public isAvailable: boolean;
  public ingredients: Ingredient[];
  public equivalents: Equivalent[];
}
