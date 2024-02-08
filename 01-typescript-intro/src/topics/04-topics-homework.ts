
interface SuperHero {
    name: string,
    age: number,
    address: Address,
    showAddress: () => string;
};

interface Address {
    city: string,
    ciudad: string,
    country: string
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        city: 'Main St',
        country: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};