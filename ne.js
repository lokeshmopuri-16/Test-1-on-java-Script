 function greet(){
    console.log("Hello,Welcome to Edurekha");
 }
 console.log(greet());

function a( b,c){
    return(b+c) 
}
console.log(a(5,5));
function EvenOrNot(num){
if(num%2==0){
    return(true)
}
else{ 
    return (false)
}
}
console.log(EvenOrNot(5000));
function PositiveOrNegative(num1){
    if(num1>0){
        console.log("it is positive");
 
   }
   else{
    console.log("it is negative");
   }
}
console.log(PositiveOrNegative(5));
function EvenOrNot1(num1){
if(num1%2==0){
    console.log("it's even");
}
else{
    console.log("it's odd");
}
}
console.log(EvenOrNot1(5000));


function vote(Age){
    if(Age>=18){
        console.log("eligible to vote");
    }
    else{
        console.log("he is not Eligible to vote ")
    }
}
console.log(vote(18));
function hours(hrs){
    if(hrs<12){
        console.log("good morning"

        );
    }
    else{
        console.log("not a morning");
    }
}
console.log(hours(12));


function nullornot(value1){
    switch(value1){
        case 'null':
            {
            console.log("it is null")
            break;
        }
        case 'undefined':
            {
            console.log("it is undefined")
            break;
        }
        default:
            {
                console.log("it is not a null value")
            }
    }
}
console.log(nullornot(15));
var x=prompt("lets play with for loop");
for(let i=0;i<x;i++){
    console.log("the value is",i);
}

while(x<150)
    {
    console.log("we print while",x);
    x++;
}
var s=x;

do{
    console.log("lets work on do while",s);
    s++;
}
while(s<=15)