
//lexical scope

//global variable - this is accesible from anywhere
let fName = "Tharaka";

function myAge() {
    //local variable - local to function, can only access inside
    let lName = "Udayanga";

    //this will print full name
    console.log(fName+" "+lName);
}

myAge();