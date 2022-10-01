### Lexical Scope and Closures in JavaScript
In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.

Lexical Scope
Lexical scoping defines the scope of a variable by the position of that variable declared in the source code. For example:

![Alt text](/images/lexi.PNG?raw=true "Optional Title")

fName variable is a global variable and it can access from anywhere but lName variable is local to function. So if we try to access lName outside of the function this will give an error.

So the JavaScript engine uses the scope to manage the variable accessibility. According to lexical scoping, the scopes can be nested and the inner function can access the variables declared in its outer scope.

Closure
closure is a function that references variables in the outer scope from its inner scope. This means the inner function has the access to it’s parent function variables. Ex :

![Alt text](/images/closure.PNG?raw=true "Optional Title")

Even if varOne is declared outside of the inner function, still inner function can access the varOne. This secondF is a closure function and it has the access to it’s parent function variables.

Summary
Lexical scoping describes how the JavaScript engine uses the location of the variable in the code to determine where that variable is available. A closure is a combination of a function and its ability to remember variables in the outer(parent) scope.

Get In Touch
Linkedin -> https://www.linkedin.com/in/tharaka-udayanga-61a424166/