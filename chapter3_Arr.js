// #1 task Создание массивов

let elements = [
    'Хлеб',
    'milk',
    1,
    true
];

console.log( elements );

elements[ 0 ] = 'bread'; // поиск элемента массива по индексу
console.log( 'elements[0]', elements[ 0 ] )
console.log( elements );

let newArr = [];
console.log( 'newArr', newArr )
newArr[ 0 ] = 1;
newArr[ 1 ] = 'console';
newArr[ 2 ] = false;
newArr[ 3 ] = true;
console.log( 'newArr', newArr )

for ( let i = 0; i < newArr.length; i++ ) { // перебор и замена элементов массива через цикл
    newArr[ i ] = 'milk';
}

console.log( newArr );

// #2 task Вложенные массивы

let elements1 = [
    3,
    true,
    [ 'student', 'worker' ]
];

console.log( 'elements1', elements1 )
console.log( 'elements1', elements1[ 2 ] )
console.log( 'elements1', elements1[ 2 ][ 0 ] )
console.log( 'elements1', elements1[ 2 ][ 0 ], elements1[ 2 ][ 1 ] ) // поиск вложенного элемента массива

// #3 task Поиск последнего элемента массива

console.log( elements1.length );
console.log( elements1.length - 1 );
console.log( elements1[ elements1.length - 1 ] ); // поиск последнего элемента массива

// #4 task Методы массивов push(); pop(); shift(); unshift();

let animals = [];
animals.push( 'cat' ); // заполнение массива элементами в конец
animals.push( 'dog' );
animals.push( 'bear' );
console.log( animals );
animals.unshift( 'конь' ); // заполнение массива элементами в начало
animals.unshift( 'обезьяна' );
console.log( animals );
animals.pop(); // удаление последнего элемента массива
let lastElement = animals.pop(); // посоледний удаленный элемент массива вырезается и сохраняется в переменной
console.log( 'lastElement', lastElement )
console.log( animals );
animals.unshift( lastElement );
console.log( animals );
let firstElement = animals.shift(); // удаление первого элемента массива с возвращением его значения
console.log( firstElement );
console.log( animals );
animals.unshift( firstElement );
console.log( animals );

// #5 task Объединение массивов concat();

let animalsArr = [
    'dog', 'cat', 'lion', 'monkey'
];
let thingsArr = [
    'triangle', 'table'
];
let allArrays = animalsArr.concat( thingsArr ); // массивы объединены с помещением элементов массива, 
// к которому применен метод concat(), впереди следующего массива
console.log( allArrays );

// #6 Поиск индекса элемента массива методом indexOf();

let colors = [
    'синий',
    'красный',
    'зеленый'
];

console.log( colors.indexOf( 'красный' ) );
console.log( colors.indexOf( 'green' ) );

// #7 Преобразование элементов массива в одну строку методом join();

console.log( colors.join( ' * ' ) );

// #8 Получение случайного числа Math.random();

let number = Math.floor( Math.random() * 15 );
console.log( 'number', number );

let randomWords1 = [ 'Пещера', 'Гора', 'Привет', 'Начальник' ];
let randomIndex = Math.floor( Math.random() * 5 );
console.log( randomWords1[ randomIndex ] );

// #9 Практические задания. Дразнилки.

let randomBodyParts = [ 'глаз', 'нос', 'череп' ];
let randomAjectives = [ 'вонючая', 'унылая', 'дурацкая' ];
let randomWords = [ 'муха', 'выдра', 'дубина', 'мартышка', 'крыса' ];
// выбор случайной части тела из массива randomBodyParts
let randomBodyPart = randomBodyParts[ Math.floor( Math.random() * 3 ) ];
// выбор случайного прилагательного из массива randomAjectives
let randomAjective = randomAjectives[ Math.floor( Math.random() * 3 ) ];
// выбор случайного слова из массива randomWords
let randomWord = randomWords[ Math.floor( Math.random() * randomWords.length ) ];
let randomInsult = 'У тебя ' + randomBodyPart + ' словно ' + randomAjective + ' ' + randomWord + '!!!';
console.log(randomInsult);

// другой способ с методом join()

let randomInsult1 = ['У тебя', randomBodyPart, 'словно', randomAjective, randomWord + '!!!'].join(' ');
console.log('randomInsult1', randomInsult1)

// #10 Еще практическое задание.

let numbers = [3, 2, 1];
console.log(numbers.join(' больше, чем '));