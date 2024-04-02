
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350.50
}

export interface TaxCalculatorOptions{
    tax: number,
    products: Product[]
}

export function taxCalculator(options: TaxCalculatorOptions ): [number, number]{
// function taxCalculator({ tax, products }: TaxCalculatorOptions): [number, number] {

    const { tax, products } = options;

    let total: number = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}

// const shoppingCart: Product[] = [phone, tablet];
// const tax: number = 0.15;

// const [totalPrice, totalTax] = taxCalculator({
//     products: shoppingCart,
//     tax
// });

// console.log('Total: ', totalPrice);
// console.log('Tax: ', totalTax);
