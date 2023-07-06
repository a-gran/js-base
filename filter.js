/// Методы массивов

/// filter
/* Возвращает отфильтровыванный по условию массив */

const people = [
    { name: 'Алексей', age: 38, budget: 147000 },
    { name: 'Михаил', age: 28, budget: 11500 },
    { name: 'Мадира', age: 35, budget: 67000 },
    { name: 'Джон', age: 45, budget: 405000 },
    { name: 'Елена', age: 17, budget: 10500 },
    { name: 'Игорь', age: 16, budget: 3000 },
    { name: 'Иван', age: 35, budget: 50000 },
]

// старый синтаксис, аналог filter
const adults = []
for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18) {
        adults.push(people[i])
    }
}
console.log('adults', adults)

const adults1 = people.filter(person => {
    if (person.age >= 18) {
        return true
    }
})
console.log('adults1', adults1)

console.log('=======================================')

const adults2 = people.filter(person => person.age <= 18)
console.log('adults2', adults2)

console.log('=======================================')

const budgetAdults2 = adults2.map(person => person.budget)
console.log('budgetAdults2', budgetAdults2)