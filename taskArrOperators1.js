const people = [
	{ name: 'Алексей', age: 38, budget: 147000 },
	{ name: 'Михаил', age: 28, budget: 11500 },
	{ name: 'Мадира', age: 35, budget: 67000 },
	{ name: 'Джон', age: 45, budget: 405000 },
	{ name: 'Елена', age: 17, budget: 10000 },
	{ name: 'Игорь', age: 16, budget: 3000 },
	{ name: 'Иван', age: 35, budget: 50000 },
]

const richPeople = people
	.filter(person => person.budget > 10000)
	.map(person => {
		return {
			info: `Имя: ${person.name}, Возраст: ${person.age} лет`,
			budget: person.budget
		}
	})
console.log('richPeople', richPeople)

const amount = richPeople.reduce((total, person) => total + person.budget, 0)
console.log('amount', amount)