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
let mikestr= `${mike.firstName} ${mike.lastName} ,age: ${mike.age}`;
console.log(mikestr);
console.log("full name is :" +mike.firstName +mike.lastName ) ;


let mikeadvanced={
    firstName:'naga',
    lastName:'Mylavarapu',
    age:40,
    hobbies:['music','programming','baking','games']
};

console.log(mikeadvanced);//object
console.log(JSON.stringify(mikeadvanced));
let mikejson=JSON.stringify(mikeadvanced);//object to json
console.log(JSON.parse(mikejson));//back to object

//loop over object
console.log("output is :");
for(let propertyname in mikeadvanced)

{
    let propertyvalue=mikeadvanced[propertyname];
    console.log(propertyname,propertyvalue);

}

//loop over object 
for(let a=mikeadvanced; a<mikeadvanced.length;a++)
{
    a[i]=mikeadvanced[i];
    console.log("the out put for the second loop is  :");
    console.log(`property values are  :${a[i].firstName},${a[i].lastName} ,${a[i].hobbies}`);
}

//loop through object and array inside of object

for(let propertyname in mikeadvanced)//loop over object

{
let propertyvalue=mikeadvanced[propertyname];//get value from kkey

if(Array.isArray(propertyvalue)===true)
{
    for(let hobby of propertyvalue) //loop over array
        console.log("hobby:" +hobby);
    
}
else{


console.log(propertyname + ":" + propertyvalue);

}
}

//connection to html
//ask js to create a new element
let mydiv=document.createElement('div');
mydiv.innerHTML=` <h1>hello from jav script</h1>
<p>this texxt is from javascriipt ,myage is ${mike.age}</p>`
;


//grab te body tag
let body=document.querySelector('body');
body.append(mydiv);

//another way to add data

let mybands=[

    {
        name:'the beattles',
        genre:'pop'
    },
    {
        name:'the rolling stones',
        genre:'rock'
    }
];


//grab the bands div
let bandsdiv=document.querySelector('#bands');
for(let band of mybands)
{
    bandsdiv.innerHTML += 
        `<div class ="band">
        <h2> ${band.name}</h2>
     <p> Genre:${band.genre}</p>

    </div>
    `;
}



function sayhello()
{
   console.log('hello') ;
}
const sayhello2 = ()=>
{
    console.log('hello2');
}
sayhello();
sayhello2();

//different ways of defining the same function

function add(a,b)
{
    return a+b;
}
//Arrow function
const add2 = (a,b)=> 
{
    return a+b;

}
//Function expression

const add3 =function(a,b)
{
    return a+b;
}

//arrow function with implict return
const add4= (a,b) => a + b;

//arrow function with implicit return and one parameter
const add5 = a => a + 5;


console.log("the value of the functiiionn is :" +add (5,20));

console.log(add(1,9));
console.log(add2(1,9));
console.log(add3(1,9));
console.log(add4(1,9));
console.log(add5(51,9));


//classes

class person
{
    constructor(name, age ,hobby)
    {
        this.name=name;
        this.age=age;
        this.hobby=hobby;
    }
    greetings() //class methoods
     {
        console.log(`hi, my name is  ${this.name} and I am ${this.age}`);
        console.log(`i enjoy :` +this.hobby);
    }

}
const mikeclass =new person('naga',40, 'Baking');
mikeclass.greetings();
console.log(mikeclass.hobby);

