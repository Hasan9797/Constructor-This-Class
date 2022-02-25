// context this - hardoyim nimadur narsaga ergashadi (Osilvoladi) yani yopishib oladi
// context this ni 4 hil usulda funksialarga bog'lash mumkun

// usul 1
// function showThis(a, b){
//     console.log(this)  // undefined
//     function calc(){
//         console.log(this) // undefined
//         return a + b
//     }
//
//     console.log(calc())
// }
// showThis(8, 10)


// // usul 2 context this abjectlarda = object
// const  obj = {
//     a: 8,
//     b: 10,
//     calc: function (){
//         console.log(this.a + this.b)
//     },
// }


// usul 3
// function Car (Name, years, color){
//     this.year = years;
//     this.Name = Name;
//     this.color = color;
//     this.oldAndNew = function (){
//         if (this.year < 2010){
//             console.log(`${this.Name} is old`)
//         }else {
//             console.log(`${this.Name} is new `)
//         }
//     }
// }
// const  BMW = new Car('BMW',1990, 'Black');
// console.log(BMW)
// BMW.oldAndNew()

// usul 4: context this qo'l yordamida ergashtirish: call, apply, bind  :) methods

// function hello(surname){
//     console.log(this);
//     console.log(this.name + " " + surname);
// }
//
// hello.call(person, 'Sadullayev');
// hello.apply(person, ['Sadullayev']);
//
//
// function calc(num){
//     return this * num
// }
// const double = calc.bind(2)
//
// console.log(double(5))
