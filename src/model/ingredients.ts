type TomatoSauce = {
    type: 'tomato';
    product: 'san-marzano' | 'roma' | 'pomodoro' | 'napoli' | 'datterini';
};
type CreamSauce = {
    type: 'cream';
    product: 'heavy' | 'mascarpone' | 'ricotta' | 'sour' | 'cheese';
};
export type Base = CreamSauce | TomatoSauce;

type Chicken = {
    type: 'chicken';
    product: 'grilled' | 'sausage' | 'slice';
};
type Beef = {
    type: 'beef';
    product: 'pepperoni' | 'sausage' | 'ground' | 'strips';
};
type Pork = {
    type: 'pork';
    product: 'ham' | 'bacon' | 'sausage' | 'rosciutto';
};
export type Meat = Chicken | Beef | Pork;

type Cow = {
    type: 'cow';
    product: 'mozzarella' | 'cheddar' | 'parmesan' | 'gorgonzola';
};
type Sheep = {
    type: 'sheep';
    product: 'pecorino' | 'manchego' | 'feta' | 'roquefort';
};
export type Cheese = Sheep | Cow;

export type Ingredients = {
    base: Base;
    cheese: Cheese;
    meat: Meat;
};
