function addNumbers(a: number, b: number):number  {
    return a + b;
}

const decreasingNumbers = (a: number, b: number) => {
    return a - b;
}


function multiply (firstNumber: number, secondNumber?: number, base: number = 2,) {

    secondNumber = 10;
    return secondNumber + firstNumber * base;
}

const sumResult: number = addNumbers(10, 20);
const restResult = decreasingNumbers(20,5);
const mulResult = multiply(3);

console.log({sumResult, restResult, mulResult});


interface Character {
    name: string,
    hp: number,
    showHp: () => void;
}
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const leon: Character = {
    name: 'Leon',
    hp: 60,
    showHp(){
        console.log(`Los puntos de vida de ${this.name} son ${this.hp}`);
        
    }
}

healCharacter(leon, 30);
leon.showHp();
export {};