// // //print
// // // console.log('hello from main.js')

// // // variable
// // // let age = 25
// // // console.log(age)

// // // const salary = 0
// // // salary = 100000 // all const dec must be initialize and once initialized it will never change
// // // console.log(salary)

// // // let sum = 0
// // // sum = 5
// // // console.log(sum)


// // // Datatypes

// // // 1. primitive
// // // String type
// // // number type
// // // boolean type
// // // undefined type
// // // null type
// // // BigInt type
// // // Symbol type

// // // 2. non primitive
// // // object

// // // const name = 'viral'
// // // const langauge = 'javascript'
// // // const channel = `viralevolution`
// // // console.log(name,langauge,channel)

// // //int
// // // const total = 0
// // // const pi = 3.14

// // //boolean
// // // const isPrimaryNumber = true
// // // const isNewUser = false

// // // undefined
// // // let result
// // // console.log(result)
// // // const res = undefined

// // //null
// // const data = null

// // //BigInt type
// // // vary big value no.


// // //object literal
// // const person = {
// //     firstName:'viral',
// //     lastName : 'jain',
// //     age : 23,
// // }
// // console.log(person.firstName)

// // //array
// // const oddNumber = [1,3,5,7,9]
// // console.log(oddNumber[1])

// // //Operators

// // // - Assignment operators
// // // - arithmetic operators
// // // - comparison operators
// // // - logical operators
// // // - string operators


// // //1. Assignment operator
// // //used to assign variable
// //  let x= 20
// //  let y = 10
 
// //  //2. arithmetic operator
// //  console.log(x+y)
// //   console.log(++x)
// // console.log(x%y)

// // //3. comparison operator

// // console.log(x==y)
// // console.log(x!=y)
// // console.log(x===y)
// // console.log(x!==y)
// // //<,>,>=,<= etc

// // //4. logical operator

// // const isValidNumber = x > 8 && 8 > y

// // console.log(isValidNumber)

// // // ||=OR

// // const isValid = false
// // console.log(!isValid)

// // // string concetenation
// // console.log('viral '+ 'jain')


// // //ternary operator

// // const isEven = 10%3 === 0? 'number is even':'number is odd'
// // console.log(isEven)

// // //Type Conversions
// // //Two type of type conversions
// // //1.Implicit conversion: also known as type coercion where javascript itself will automatically convert the type
// // //2.explicit conversion: where you manually convert the type

// // //implicit conversion
// // console.log(2 + '3')
// // console.log(true + '3')
// // console.log('2' - '3')
// // console.log('2'*'4')
// // console.log('5'/'3')
// // console.log('viral'-'jain')//NaN-- not a number
// // console.log('5'-true) // true is treated as 1
// // console.log('5'-false)// false is treated as 0
// // console.log('5'-null)// null is treated as 0
// // console.log('5'-undefined)//NaN -- not a number

// // //explicit conversion
// // console.log(Number('5'))
// // console.log(Number(false))
// // console.log(parseInt('5'))
// // console.log(parseFloat('5.1'))

// // console.log(String(undefined))
// // console.log(String(null))
// // console.log((500).toString())
// // console.log(Boolean(10)) //null, undefined, 0 , empty string and NaN all return false when converted to boolean
// // //eg.
// // console.log(Boolean(null)) 

// // // Equality
// // //1. =={allow coercion}
// // //2. ==={Does not allow coercion}

// // const var1 = 10
// // const var2 = '10'
// // console.log(var1 == var2)
// // console.log(var1 === var2) // more strick 


// // //conditional Statements

// // //1. if 
// // //2. else
// // //3. else if
// // //4. switch statement

// // //4. switch

// // const color = 10

// // switch(color){
// //     case 'red':
// //         console.log('color is red')
// //         break
// //     case 'blue':
// //         console.log('color is blue')
// //         break
// //     case 'green':
// //         console.log('color is green')
// //         break
// //     default:
// //         console.log('not a valid color')
// // }

// // //Looping Code

// // //1. while
// // //2. do..while
// // //3. for loop
// // //4. for..of loop

// // //3. for loop
// // //for(initializer;condition;final-expression){
// //     //code to run
// // // }

// // const n = 5
// // let string = "";
// // for(let i = 1;i<=n;i++){

// //     for(let j = 1;j<=i;j++){
// //         string += "*"
// //     }
// //     string += "\n"
// // }
// // console.log(string)

// // //1. while loop
// // // initializer
// // // while(condition){
// // //     //code to run

// // //     final-expression
// // // }

// // //2. do..while loop
// // // initializer
// // // do{
// // //     //code to run
// // //     final-expression
// // // }while (condition)

// // //3. for..of loop
// // // for(const item of array){
// // //     // code to run
// // // }

// // // eg 
// // const numArray =[1,2,3,4,5]

// // for(const num of numArray)
// // {
// //     console.log("Iteration number " + num)
// // }

// // //functions

// // //== a javascript function is a block of code designed to perform  a particular task
// // // ex add two Number, multiply two numbers etc

// // //syntax
// // // function name(parameter1,para2, para3){
// // //     //code to be executed
// // // }

// // function greet(username)
// // {
// //     console.log('good morning'+ username)
// // }
// // greet('viral')

// // function add(a,b){
// //     return a+b
// // }

// // const sum = add(5,10)
// // console.log(sum)

// // //Scope

// // // scope basically determines the accessibility or visibility of variables

// // // block scope- variables declared inside a pair of curly braces cannot be accessed from outside the block
// // // function scope- variables declared inside a function cannot be accessed from outside the function
// // // global scope- globally scoped variables can be accessed inside a block or function

// // if(true){
// //     const myName = 'viral'
// //     console.log(myName)
// // }

// // =========================================================

// //ADVANCED JAVASCRIPT

// //Nested function's scope
// // let a =10
// // function outer(){
// //     let b = 20
// //     function inner(){
// //         let c = 30
// //         console.log(a,b,c)
// //     }
// //     inner()
// // }
// //outer()

// //closure
// // A closure is the combination of a function bundles together with references to its surrounding state. Closures are created every time a function is created, at function creation time.

// // function outer(){
// //     let counter = 0
// //     function inner(){
// //         counter++
// //         console.log(counter)
// //     }
// //     inner()
// // }
// // outer()
// // outer()

// // function outer(){
// //     let counter = 0
// //     function inner(){
// //         counter++
// //         console.log(counter)
// //     }
// //     return inner
// // }
// // const fn = outer()
// // fn()
// // fn()
// // fn()

// //NOTE: with closure the inner function has access to variables in the outer function even the after the exection of  outer function.

// //Function Currying:
// //currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
// // function f(a,b,c) is transformed to f(a)(b)(c)

// // function sum(a,b,c)
// // {
// //     return a+b+c
// // }

// // console.log(sum(2,3,5))

// // // sum(2,3,5) sum(2)(3)(5)

// // function curry(fn){
// //     return function(a){
// //         return function(b){
// //             return function(c){
// //                 return fn(a,b,c)
// //             }
// //         }
// //     }
// // }
// // const curriedSum = curry(sum)
// // console.log(curriedSum(2)(3)(5))

// // const add2 = curriedSum(2)
// // const add3 = add2(3)
// // const add4 = add3(5)
// // console.log(add4)

// //This keyword

// function sayMyName(name){
//     console.log(`my name is ${name}`)
// }

// sayMyName('walter white')
// sayMyName('viral')

// //How to determine 'this'?
// //1. implicit binding
// //2. explicit binding
// //3. new binding
// //4. Default binding

// //1. implicit binding

// const person = {
//     name: 'viral',
//     sayMyName: function(){
//         console.log(`my name is ${this.name}`)
//     },
// }
// person.sayMyName()


// //2. explicit binding
// // const name = 'Superman'
// globalThis.name = 'Superman'
// function sayMyName(){
//     console.log(`my name is ${this.name}`)
// }

// // sayMyName.call(person)

// //3. new binding

// function Person(name){
//     //this = {}
//     this.name = name
// }
// const p1 = new Person('viral')
// const p2 = new Person('jain')

// console.log(p1.name,p2.name)

// //4. default binding

// sayMyName()

// // order of precedence
// //1. new binding
// //2. explicit binding
// //3. implicit binding
// //4. Default binding


// // PROTOTYPE

