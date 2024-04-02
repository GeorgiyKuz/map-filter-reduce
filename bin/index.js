// Задание 1
const task1 = (arr) => {
  return arr.map((element, index) => ({ index, element })).filter(obj => obj.index % 3 === 0);
};

// Задание 2
const task2 = (arr) => {
  return arr.map((element, index) => ({ index, element })).filter(obj => obj.element % 2 === 0);
};

// Задание 3
const task3 = (words) => {
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Задание 4
const task4 = (sentence) => {
  return sentence.split(' ').map(word => (word.length > 1) ? word.slice(-1) + word.slice(1, -1) + word.charAt(0) : word).join(' ');
};

// Задание 5
const task5 = (arr) => {
  const positiveNumbers = arr.filter(num => num > 0);
  const positiveCount = positiveNumbers.length;
  const negativeProduct = arr.filter(num => num < 0).reduce((acc, val) => acc * val, 1);
  
  console.log("Положительные элементы массива:");
  console.log(positiveNumbers);
  console.log("Количество положительных элементов в массиве:", positiveCount);
  console.log("Произведение отрицательных элементов массива:", negativeProduct);
};

// Задание 6
const task6 = (arr) => {
  let inversions = 0;
  arr.forEach((val, i) => {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
              inversions++;
          }
      }
  });
  console.log("Количество инверсий в массиве:", inversions);
};

// Задание 7
const task7 = (team1, team2) => {
  const sameHeights = team1.some(height1 => team2.includes(height1));
  console.log("Есть ли игроки одинакового роста в обеих командах:", sameHeights);
};

// Задание 8
const task8 = (arr) => {
  const hasDuplicates = arr.reduce((acc, val, index, array) => acc || array.indexOf(val) !== index, false);
  console.log("Есть ли в массиве хотя бы одна пара совпадающих элементов:", hasDuplicates);
};

// Задание 9
const students = [
{ name: 'Tirion', class: 'B', mark: 3 },
{ name: 'Keit', class: 'A', mark: 3 },
{ name: 'Ramsey', class: 'A', mark: 4 },
{ name: 'Mike', class: 'B', mark: 5 },
{ name: 'Alex', class: 'C', mark: 2 },
];

const averageMark = students.reduce((acc, student) => acc + student.mark, 0) / students.length;
const maxMark = Math.max(...students.map(student => student.mark));
const minMark = Math.min(...students.map(student => student.mark));
const totalSum = students.reduce((acc, student) => acc + student.mark, 0);
const totalStudents = students.length;

const groupByClass = (students) => {
  return students.reduce((acc, student) => {
      acc[student.class] = acc[student.class] || [];
      acc[student.class].push(student);
      return acc;
  }, {});
};

const result = {
  averageMark,
  maxMark,
  minMark,
  totalSum,
  totalStudents,
  groupedByClass: groupByClass(students)
};

console.log(result);
