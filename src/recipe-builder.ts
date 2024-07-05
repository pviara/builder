import { Base, Cheese, Ingredients, Meat } from './model/ingredients';
import { Constraints } from './model/constraints';
import { Recipe } from './model/recipe';

export class RecipeBuilder {
    private ingredients: Partial<Ingredients> = {};

    constructor(private constraints?: Constraints) {}

    addBase(base: Base): RecipeBuilder {
        this.ingredients.base = base;
        return this;
    }

    addCheese(cheese: Cheese): RecipeBuilder {
        this.ingredients.cheese = cheese;
        return this;
    }

    addMeat(meat: Meat): RecipeBuilder {
        this.ingredients.meat = meat;
        return this;
    }

    build(): Recipe {
        const ingredients = this.getIngredients();
        this.assertConstraints();

        return new Recipe(ingredients);
    }

    private getIngredients(): Ingredients {
        const { base, cheese, meat } = this.ingredients;
        if (!base || !cheese || !meat) {
            throw new Error(
                'Base, cheese and meat must be specified in recipe',
            );
        }

        return {
            base,
            cheese,
            meat,
        };
    }

    private assertConstraints(): void {
        const unmet = this.areUnmet(this.constraints);
        if (unmet) {
            throw new Error('Constraints are not met');
        }
    }

    private areUnmet(constraints: Constraints = []): boolean {
        return constraints.some(
            ({ ingredient, product }) =>
                product !== this.ingredients[ingredient]?.product,
        );
    }
}
