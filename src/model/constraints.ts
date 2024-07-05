import { Base, Cheese, Ingredients, Meat } from './ingredients';

type Product = Base['product'] | Cheese['product'] | Meat['product'];
type Constraint = {
    ingredient: keyof Ingredients;
    product: Product;
};

export type Constraints = Array<Constraint>;
