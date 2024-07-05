import { Constraints } from './model/constraints';
import { describe, expect, it } from 'vitest';
import { RecipeBuilder } from './recipe-builder';

describe('RecipeBuilder', () => {
    it('should throw an error when not respecting given constraints', () => {
        const createInvalidRecipe = (): void => {
            const napoletana: Constraints = [
                {
                    ingredient: 'base',
                    product: 'san-marzano',
                },
                {
                    ingredient: 'cheese',
                    product: 'mozzarella',
                },
            ];

            new RecipeBuilder(napoletana)
                .addBase({
                    type: 'tomato',
                    product: 'san-marzano',
                })
                .addCheese({
                    type: 'cow',
                    product: 'cheddar',
                })
                .addMeat({
                    type: 'beef',
                    product: 'pepperoni',
                })
                .build();
        };

        expect(createInvalidRecipe).toThrow();
    });
});
