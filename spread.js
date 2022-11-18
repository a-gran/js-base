/// Spread operator
// разворачивает массивы и объекты
// в основном нужен для создания новых объектов и массивов
// или для их трансформации в более удобные структуры данных (слияние и т.п.)

const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Прага', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2
}



// Spread
/* Spread оператор разворачивает тот массив с которым мы работаем в строки */
console.log(...citiesRussia)
console.log(...citiesEurope)

// Практическое применение Spread оператора

// #1 простое копирование массива
const allRussiansSities = [...citiesRussia]
console.log('allRussiansSities', allRussiansSities)

const allSities = [...citiesRussia, 'Вашингтон', ...citiesEurope] // объединене массивов
// const allSities = citiesRussia.concat(citiesEurope) // аналог spread в старом синтаксисе
console.log('allSities', allSities)

/* #2 Простое копирование объекта с созданием нового объекта без ссылки на предыдущий объект */

console.log(citiesRussiaWithPopulation)
console.log({ ...citiesRussiaWithPopulation })

const newObjCitiesRussiaWithPopulation = { ...citiesRussiaWithPopulation }
console.log('newObjCitiesRussiaWithPopulation', newObjCitiesRussiaWithPopulation)

console.log(newObjCitiesRussiaWithPopulation == citiesRussiaWithPopulation) // false

//  #3 Cлияние объектов

const allCitiesWithPopulation = { ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation }
console.log('allCitiesWithPopulation', allCitiesWithPopulation)

// Task

Math.max(5, 37, 42, 17)
console.log('Math.max(5, 37, 42, 17)', Math.max(5, 37, 42, 17))

const numbers = [5, 8, 108, 10, 54]
console.log('Math.max(...numbers)', Math.max(...numbers))
console.log(Math.max.apply(null, numbers)) // старый синтаксис для решения данной задачи 

// const b = [...numbers]
// console.log(b[0])

const divs = document.querySelectorAll('div')
console.log(divs) // NodeList (псевдомассив)
// console.log(divs.forEach) // OK
// console.log(divs.map) // error

const nodes = [...divs] // преобразование псевдомассива в массив (для использования map, например)
console.log(nodes) // массив
// console.log(nodes.map) // OK
// console.log(nodes.forEach) // OK

console.log(divs, Array.isArray(divs)) // false
console.log(nodes, Array.isArray(nodes)) //true







