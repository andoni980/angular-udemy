
interface Product {
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

interface TaxCalcultaroOptions{
    tax: number,
    products: Product[]
}

function taxCalculator( options: TaxCalcultaroOptions ): number[]{

    let total: number = 0;

    options.products.forEach(product => {
        total += product.price;
    });

    return [total, total * options.tax];
}



const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;


const result = taxCalculator({
    products: shoppingCart,
    tax
});

console.log('Total: ', result[0]);
console.log('Tax: ', result[1]);





export {};