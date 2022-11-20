/// Методы массивов

/// forEach

const people = [
    { name: 'Алексей', age: 38, budget: 147000 },
    { name: 'Михаил', age: 28, budget: 11500 },
    { name: 'Мадира', age: 35, budget: 67000 },
    { name: 'Джон', age: 45, budget: 405000 },
    { name: 'Елена', age: 20, budget: 10500 },
    { name: 'Игорь', age: 26, budget: 3000 },
    { name: 'Иван', age: 35, budget: 50000 },
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// } // выводит итерируемые объекты в консоль

// for (let person of people) {
//     console.log(person)
// } // выводит итерируемые объекты в консоль

/// forEach
/* Исользуется для применения функции к итерируемым элементам массива, 
но результат нельзя прмсвоит переменной, так как метод возвращает Undefined
*/

people.forEach(function (person, index, arr) {
    console.log(person)
    console.log(index)
    console.log(arr)
}) // выводит итерируемые объекты в консоль

// people.forEach(person => console.log(person)) // короткая запись

console.log('=============================================')

people.forEach((person) => {
    person.mail = 'aweb@gmail.com'
    console.log(person)
}) // к каждому элементу массива прмиеняется callback-функция, переданная в качестве аргумента

console.log('=============================================')

const newPeople = people.forEach(person => console.log(person))
console.log('newPeople', newPeople) // undefined