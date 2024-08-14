/*
type Person = {
  name: string;
}

const person: Person = {
  name: "David"
}   


console.log(person.name)

*/

//strings 
/*
let myName: string = "Ebuka";
myName = "me and everyone else";

console.log(myName)
 
//Number
 let myNumber: number = 20
 console.log(myNumber)


 let tech = "Typescript"
 console.log(tech)
*/
/*

//Any Type
let people: any = "everyone"
people = 23
people = false

console.log(people)


//Reg Function
function state(num: number) {
  return num *10
}  

 const res = state(2)

console.log(res)


 
function greet(person = "Anonoymus") {
  return `Hello ${person}`
}

const res2 = greet("Micheal ")
console.log(res2)

//Void

function printMessage(message: string): void {
  console.log(`This is my ${message}`)
}
*/


// printMessage("big Dick")



//Never
/*
function throwError(msg: string) : never{
  throw new Error(msg)
}


//Arrays
const numss : number[] = [1, 2, 3]
const nums2: any[] = [1, 2, 3, 4, "chiazokam", false]

numss.push(20,60)
console.log(numss)
console.log(nums2)



const items : Array<string> = ["me", "you" ,"them"]

console.log(items)


//MultiDimensional Array

const singleDi: number[] = [1, 2, 3]
const multiDi : number[][] = [[1,2,3]]
const tripleDi : number[][][] = [
  [[1,2,3]]
] 


console.log(singleDi)
console.log(multiDi)
console.log(tripleDi)
 */


//Objects
const people : {firstName: string, lastName: string, age: number, rest: boolean} = {
  firstName: "John",
  lastName: "Christopher",
  age: 25,
  rest: true
}

console.log(people)


//Type Aliases

type User = {
  name: string;
  age: number;
  location: string;

}


const printUserInfo = (user: User) => {
  return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`
}


const res = printUserInfo({name: "Alex",  age: 22, location: 'America' })

console.log(res)

//Optional properties

type User2 = {
  name: string,
  age?: number,
  state: string
}


const showUser = (user: User2) => {
  return `Name: ${user.name} Age: ${user.age} State: ${user.state} `
}

const res2: User2 = {
  name: "Amaka",
  state: "Abuja",
  age: 34
}


console.log(res2)

//interSected Types

type Person = {
  name: string;
  age: number;

}

type Employee = {
  id: number;
  title: string

}

type workerStatus = Person & Employee  

const result1: workerStatus = {
  name: "Micheal Jordan",
  id: 455,
  age: 39,
  title: "Associate Manager"
}

console.log(result1)

//Union Type

let password : string | number = "amaka"  


type UserInfo = {
  first: string;
  last: string;
  age: number;
}

/*
type accountDetails = {
  email: string;
  id: number 
}

const worker: UserInfo | accountDetails ={
  first: "mickey",
  last: "ameri",
  age: 26,
  email: "mike@gmail",
  id: 657 
}
 
console.log(worker)

//Literal Types

let color: "red" |  "green" | "blue"

color =  "red"
color = "blue "

console.log(color) */



//Tuples

let myTuples : [string, number] = ["hello", 42]
console.log(myTuples[0])
console.log(myTuples[1])



let games: [string, number, boolean] = [
  "Asphalt", 34, true
]


console.log(games)

enum Weather {

  Sunny = "sunny", 
  Cloudy = "cloudy",
  Rainy = "rainy"
}

const currentWeather = Weather.Rainy

console.log(`Today is ${currentWeather}`)



//OOP Typescript


 class MyClass {
  private _myProperty: number = 0;
  
  get myProperty(): number {
    return this._myProperty
  }


  set myProperty(value: number) {
    this._myProperty = value
  }

 }


 const myInstance = new MyClass()

 console.log(`Current Value: ${myInstance.myProperty}`) 

 myInstance.myProperty = 10
 console.log(`Current Value: ${myInstance.myProperty}`)



 //Interface

 interface Person10 {
  firstName: string;
  lastName: string;
  age: number;
 }

const realPerson: Person10 = {
  firstName: "John",
  lastName: "Doe",
  age: 30
}


console.log(realPerson.firstName)


interface MathSoln {

  (x: number, y: number) : number;
 }

 const add: MathSoln = ( a, b) => a + b
 const subtract: MathSoln = (a,b) => a - b

 console.log(add(5,7))
 console.log(subtract(40, 10))


 interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(namme: string, price: number, ratings: number): string | number
 }

 interface MovieGenre extends MovieDetails {
  genre: string
 }

 const movie1: MovieGenre = {
  name: "Star Wars",
  genre: "Action",
  ratings: 4.5,
  printMovieInfo(
    name: string,
    price: number,
    ratings: number
  ) : string | number {
    return  `Movie Name: ${name} Price: ${price} Rating: ${ratings}`;
  }

 }

 const res3 = movie1.printMovieInfo('GUYRich', 100, 7.0)
 
 console.log(res3)



 //interface with classes

 interface Vehicle {
  start(): void;
  stop(): void;

 }


 class Car implements Vehicle {
  start(): void {
    console.log("Car is starting...")
  }

  stop(): void {
    console.log("Car is stopped")
  } 
 }

 const RealCar = new Car()

 RealCar.start()
 RealCar.stop()


function printNumber(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue]

} 

const num = printNumber( 1,9)
console.log(num)

//Generics 

function unique<Type>(item:Type): [Type] {
  return [item]

}

const them = unique<number>(10)
const thema = unique<string>("wallop")

console.log(them)
console.log(thema)