interface isPerson {
    name: string;
    age: number;
    speak(a: string): void
    spend(a: number): number
}


const me: isPerson = {

    name: 'meysam',
    age: 11,

    speak(text: string) {
        console.log(text);

    },

    spend(amount: number) {
        console.log(amount);
        return amount
    },

    // you can not remove or add anything. should exactly similar to then isPerson (prototype object)  
    // arr = []          => error
}


// example used

const greetPerson = (person: isPerson) => {

    console.log('this is ' + person.name);


}


greetPerson(me)