//closure example
function firstF() {
    let varOne = "10";
    function secondF() {
        //still varOne is accesible inside this inner function
        console.log(varOne);
    }
    return secondF();
}

firstF();