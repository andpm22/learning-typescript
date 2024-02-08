export class Person {
    // public name: string;
    // public address: string;

    constructor(public name: string, private address?: string) {
        this.name = name;
        this.address = address;
    }
    
}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'Atlantis');
//     }
// }

export class Hero {



    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person:Person
    ) {
        this.person = new Person(realName);
    }
}

const person = new Person('Scarlet' , 'Miami')
const blackWidow = new Hero('Black Widow', 40, 'Scarlet', person);

console.log(blackWidow);
