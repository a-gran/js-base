/// Rest operator
// собирает все параметры
// либо в массив (часто встречается в функциях)
// либо в объекты все остальные поля

const numbers = [1, 2, 3, 4, 5, 10]

function sum(a, b, ...rest) {
    console.log(a, b, rest)
    return a + b + rest.reduce((a, i) => a + i, 0)
}

// оператор reduce
// numbers.reduce((a, i) => a + i, 0)
// console.log('numbers.reduce((a, i) => a + i, 0)', numbers.reduce((a, i) => a + i, 0))

// Spread!!
console.log(sum(...numbers))

// деструктуризация
// const a = numbers[0]
// const b = numbers[1]

const [a, b, ...other] = numbers
// console.log(a, b, other)

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}

const { name, age, ...address } = person
console.log(name, age)
console.log(address)