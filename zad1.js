//zad 1
const gret = 'Hello';
const name = 'World';


console.log(`${gret} ${name}`);

//zad 2
const multiplay = (a, b = 1) => {return a * b};

multiplay(5);
multiplay(5, 6);

//zad 3
const average = args => args.reduce((a,b) => a + b, 0) / args.length

average([2, 3, 4, 5, 6]);

//zad 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const tab1 = [...numbers, 2, 3];
const average = args => args.reduce((a,b) => a + b, 0) / args.length

average(tab1);

//zad 5 

const tab2 = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = tab2;  

console.log(firstName, lastName);