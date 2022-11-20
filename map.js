/// Методы массивов

/// map
/* Исользуется для применения функции к итерируемым элементам массива, 
и результат можно присвоить переменной, так как метод возвращает копию массива после преобразования,
таким образом преобразуется текущий массив в какой-то новый массив
*/

const people = [
    { name: 'Алексей', age: 38, budget: 147000 },
    { name: 'Михаил', age: 28, budget: 11500 },
    { name: 'Мадира', age: 35, budget: 67000 },
    { name: 'Джон', age: 45, budget: 405000 },
    { name: 'Елена', age: 20, budget: 10500 },
    { name: 'Игорь', age: 26, budget: 3000 },
    { name: 'Иван', age: 35, budget: 50000 },
]

const newPeople1 = people.map(person => {
    return person
})
console.log('newPeople1', newPeople1)

console.log('=======================================')

const newPeople2 = people.map(person => person) // короткая запись
console.log('newPeople2', newPeople2)

console.log('=======================================')

const newPeople3 = people.map(person => person.name)
/* вернули массив свойства name итерируемых объектов массива и присвоили переменной,
а с помощью forEach этого сделать нельзя
 */
console.log('newPeople3', newPeople3)

console.log('=======================================')

const newPeople4 = people.map(person => {
    return `Имя сотрудника: ${person.name}, Возраст: ${person.age} лет`
})
console.log('newPeople4', newPeople4)

console.log('=======================================')

// короткая запись
const newPeople5 = people.map(person => `Имя: ${person.name}, Возраст: ${person.age} лет`)
console.log('newPeople5', newPeople5[1]) // вывод в консоль элемента нового массива
