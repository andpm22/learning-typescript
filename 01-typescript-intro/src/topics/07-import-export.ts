import { Product, taxCalculation } from './06-function-destructuing'


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'Ipad',
        price: 200
    },
];

const [total, totalTax] = taxCalculation({tax: 0.15,  products: shoppingCart })
console.log(total, totalTax);
