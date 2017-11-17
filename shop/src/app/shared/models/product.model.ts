import { CategoryEnum } from './category.enum';
import { Ingredient } from './ingredient.model';
import { Equivalent } from './equivalent.model';

export interface IProduct {
  name: string;
  description?: string;
  price: number;
  category: CategoryEnum;
  isAvailable: boolean;
  ingredients?: Ingredient[];
  equivalents?: Equivalent[];
}

export class Product implements IProduct {
  public name: string;
  public description?: string;
  public price: number;
  public category: CategoryEnum;
  public isAvailable: boolean;
  public ingredients?: Ingredient[];
  public equivalents?: Equivalent[];
}
