//Day 13

//Named function
function add(a,b){
    console.log(a+b);
}
add(10,20);

//Ananomous Function
(function (a,b){
    console.log(a+b);
})(10,20);

//IIF (Immediate Invoke Function)
(function add(a,b){
    console.log(a+b);
}
)(20,20);

//Function with expression
let sub=function(a,b){
    console.log(a-b);
}
sub(4,6)

//Arrow Function
let div=((a,b)=>{
    console.log(a/b);
})
div(30,60)

//Nested Function
function grandparent(){
    console.log("I am GP");
        function parent(){
            console.log("I am Parent");
                function child(){
                    console.log("I am Child");
                }
                // child()
                return child
        }
        // parent()
        return parent
}
// grandparent()
grandparent()()()

let d=56;   //global
function mul(){
    let a=30;
    letb=20;
    let c=a*b
    console.log(d);
    return c;
}


//Object
//key:value;
//Literals;
let emp={
    Id:101,
    Name:"Manish",
    City:"Pune"
}
console.log(emp);
console.table(emp);
console.log(Object.keys(emp));
console.log(Object.values(emp));



//Constructor function
let emp1={
    Id:101,
    Name:"Manish",
    Address:{
        Area:"ShivajiNagar",
        City:"Pune"
    }
}
console.log(emp1);
console.table(emp1);
console.log(Object.keys(emp1));
console.log(Object.values(emp1));

let emp2={
    Id:102,
    Name:"Manish",
    Address:{
        Area:"ShivajiNagar",
        City:"Pune"
    }
}
console.log(emp2);
console.table(emp2);
console.log(Object.keys(emp2));
console.log(Object.values(emp2));


console.table([emp1,emp2]);

