
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger: Passenger = {
    name: 'Andres',

}

const passenger2: Passenger = {
    name: 'Isaac',
    children: ['Pablo', 'Maria'],
    
}

const printChildren = (passenger: Passenger) => {
    
    const howManyChildren = passenger.children?.length || 0;
    const {name} = passenger
    console.log(name, howManyChildren);
    

}

printChildren(passenger)