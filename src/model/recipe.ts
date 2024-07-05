import { Ingredients } from './ingredients';

export class Recipe {
    constructor(private ingredients: Ingredients) {}

    list(): void {
        const entries = Object.entries(this.ingredients);
        for (const entry of entries) {
            const [type, { product }] = entry;
            console.log(`${type}:`, product);
        }
    }
}
