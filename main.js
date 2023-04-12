console.log('hello world!');
//variables
let greeting= 'Hi from a variable';
console.log(greeting);

//Redefine
greeting=3;
console.log(greeting);
const pi =3.14;

//Printing and concatenation
greeting="hello";
console.log(greeting + 'Pi is:' +pi);

//interpolation and templating literals
console.log(`${greeting}, pi is :${pi}`);

//be careful with floats
console.log(0.1+0.2);

//equality
console.log(1==1);
console.log(1=='1');
console.log(1==='1');

//loose typing and conversions
let number=5;
console.log(number);
console.log(typeof number);
console.log(number + 5);

number= '5';
console.log(number);
console.log(typeof number);
console.log(number + 5);

number= "hello";
console.log(number);
console.log(typeof number);

/*control flows*/
let myage=38;
if (myage >= 40)
{
    console.log('You are getting old');
}
else
{
    console.log('you are still young');
}

//ternary operation
myage == 38 ? console.log('old') :console.log('not old');

/*Camel case  //praxis is js function, vars
pascal case //classes
snake _case //often not used  */

/*loops*/
//for
for(let  i=0; i<5 ; i++)
{
    console.log(i);

}

let persons=['naga' ,'sarat','ritwik','akki','durga','sekhar'];
console.log(persons);
console.log(persons.length);


console.log(persons[0]);
console.log(persons[1]);
console.log(persons[2]);

console.log(`the last person in the list is :${persons[persons.length - 1]}`);
console.log(persons[persons.length-1]);

let newpersons =persons.slice(0,2);
console.log(newpersons);


persons.push('akshaya');
console.log(persons);

persons.shift();
persons.pop();

console.log(persons);

console.count(persons);
console.log(persons);

//loop arrays
for(let person of persons)
{
    console.log(person);
}
for(let i=0;i<persons.length;i++)
{
    console.log(persons[i]);
}

//lambda loop


persons.forEach(x=> console.log(x));




//objects

let mike ={
    firstName :'naga', 
    lastName :'Mylavarapu',
    age:40,
    hobby:'bbaking'
};

console.log(mike);
console.log(`first name:${mike.firstName}`);
let mikestr= `${mike.firstName} ${mike.lastName}  ${mike.age}`;
console.log(mikestr);
console.log("full name is :" +mike.firstName +mike.lastName ) ;




