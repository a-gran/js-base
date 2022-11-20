/// Методы массивов

/// findIndex
/* Возвращает индекс элемента массива по условию */

const people = [
    { name: 'Алексей', age: 38, budget: 147000 },
    { name: 'Михаил', age: 28, budget: 11500 },
    { name: 'Мадира', age: 35, budget: 67000 },
    { name: 'Джон', age: 45, budget: 405000 },
    { name: 'Елена', age: 17, budget: 10500 },
    { name: 'Игорь', age: 16, budget: 3000 },
    { name: 'Иван', age: 35, budget: 50000 },
]

const igorIndex = people.findIndex(p => p.name === 'Игорь')
const elenaIndex = people.findIndex(p => p.name === 'Елена')
const madiraIndex = people.findIndex(p => p.name === 'Мадира')
console.log('igorIndex', igorIndex)
console.log('elenaIndex', elenaIndex)
console.log('madiraIndex', madiraIndex)