/// Методы массивов

/// reduce
/* Возвращает результирующее значение в аккумуляторе */

const people = [
    { name: 'Алексей', age: 38, budget: 147000 },
    { name: 'Михаил', age: 28, budget: 11500 },
    { name: 'Мадира', age: 35, budget: 67000 },
    { name: 'Джон', age: 45, budget: 405000 },
    { name: 'Елена', age: 17, budget: 10500 },
    { name: 'Игорь', age: 16, budget: 3000 },
    { name: 'Иван', age: 35, budget: 50000 },
]

let amount1 = 0
for (let i = 0; i < people.length; i++) {
    amount1 += people[i].budget
}
// console.log('amount1', amount1)

const amount2 = people.reduce((total, person) => total + person.budget, 6000)
console.log('amount2', amount2)

