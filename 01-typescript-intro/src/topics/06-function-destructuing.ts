export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Galaxy A71",
    price: 150
}

const tablet: Product = {
    description: "Ipad Air",
    price: 500
}

 interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

export const taxCalculation = ( options: TaxCalculationOptions ): [number, number]  => {
    let total = 0;
    options.products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * options.tax];
}

const shoppingCart = [ phone, tablet ];
const tax = 0.13;

const result = taxCalculation({
    tax,
    products: shoppingCart
})


const [total , totalTax ]  = result;

console.log('Total', total);
console.log('Tax', totalTax);

export {};