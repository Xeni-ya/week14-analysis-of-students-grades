// Вам необходимо написать программу, которая проведёт анализ оценок студентов и выполнит несколько операций с использованием методов массивов.

// Шаги выполнения:

// Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().
const elem = document.querySelector('.results');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let grades = [];

for (let i = 0; i < 12; i++) {
	grades.push(getRandomInt(1, 100));
}

// Рассчитайте и выведите средний балл студентов, используя методы массивов.
let sum = grades.reduce((sum, grades) => {
  return sum + grades;
});

let averageStudentScore = sum / grades.length;

// Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.

// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }
let maxScore = Math.max(...grades);

// Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
let minScore = Math.min(...grades);

// Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
let numPositiveGrades = grades.filter(function (grade) {
  return grade >= 60;
});

// Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
let numNegativeGrades = grades.filter(function (grade) {
  return grade <= 60;
});

// Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
// Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
// Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
// Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
// Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"  
// Если оценка ниже 20, преобразуйте её в "E"
let letterGrades = grades.map((grade) => {
  if (grade >= 80) 
    return 'A';
  else if (grade >= 60) 
    return 'B';
  else if (grade >= 40) 
    return 'C';
  else if (grade >= 20) 
    return 'D';
  else return 'E';
});
console.log(`Оценки в буквенном формате: ${letterGrades}`);

// Выведите все найденные значения на экран.
let oneResult = document.createElement('p');
oneResult.textContent = `Оценки студентов: ${grades}`;
elem.append(oneResult);

let towResult = document.createElement('p');
towResult.textContent = `Средний балл: ${averageStudentScore.toFixed(2)}`;
elem.append(towResult);

let threeResult = document.createElement('p');
threeResult.textContent = `Максимальный балл: ${maxScore}`;
elem.append(threeResult);

let fourResult = document.createElement('p');
fourResult.textContent = `Минимальный балл: ${minScore}`;
elem.append(fourResult);

let fiveResult = document.createElement('p');
fiveResult.textContent = `Количество студентов, получивших положительную оценку:  ${numPositiveGrades.length}`;
elem.append(fiveResult);

let sixResult = document.createElement('p');
sixResult.textContent = `Количество студентов, получивших отрицательную оценку: ${numNegativeGrades.length}`;
elem.append(sixResult);

let sevenResult = document.createElement('p');
sevenResult.textContent = `Оценки в буквенном формате: ${letterGrades}`;
elem.append(sevenResult);