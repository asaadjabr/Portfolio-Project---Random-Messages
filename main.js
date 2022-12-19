// Declare the object messages which contain the data of the program.
const messages = {
    greeting: ['Good morning.','Hi.','Good afternoon.', 'Good evening.'] , 
    about: ['How are you?','Hope you are fine?','Hope your are satisfied at work?'], 
    aboutFamily: ['How is your family?','Hope your family is good?']
};


// Declare a function that produce a random number.

const  randomNumGenerator= num =>{
    return Math.floor(Math.random() * num);
} 

// Declarethe main function.

const greetPeople = arr => {
    let indexCount = 0;
    for (element in arr) {
        indexCount = arr[element].length;  
        
    
    switch (element) {
        case 'greeting': 
            console.log(`${arr[element][randomNumGenerator(indexCount)]}`);  
        break;
        case'about': 
            console.log(`${arr[element][randomNumGenerator(indexCount)]}`);
        break;
        case 'aboutFamily':
            console.log(`${arr[element][randomNumGenerator(indexCount)]}`);
            break;
        default:
            console.log('Not enough informations!');
    }
    }
};

greetPeople(messages);