//---------ЗАДАНИЕ 1---------
//Объедините два массива с вложенностью используя reduce()
// let arr = [1, [1, 2, [3, 4]], [2, 4]];

// function editedArr(arr) {
//   return arr.reduce((acc, current) => {
//     return Array.isArray(current) ? [...acc, ...editedArr(current)] : [...acc, current];
//   }, []);
// }

// alert(editedArr(arr));

//---------ЗАДАНИЕ 2---------
//Найдите сумму элементов массива, если вложенность массива неизвестна. 

// let arr = [29,[3,4],5];

// function editedArr(arr) {
//   return arr.reduce((acc, current) => {
//     return Array.isArray(current) ? [...acc, ...editedArr(current)] : [...acc, current];
//   }, []);
// }

// let result = editedArr(arr).reduce((sum, current) => sum + current, 0);

// alert(result);

//---------ЗАДАНИЕ 3---------
//Напишите функцию, которая на вход принимает массив из студентов, где студент — это объект 
//с полями «имя», «возраст» и «номер группы» {name: string, age: number, groupId: number}, 
//а на выходе возвращает объект, где ключ — это номер группы, а значение — массив из студентов 
//старше 17 лет.
//   let students = [
//       {name: 'Ivan', age: 18, groupId: 1},
//       {name: 'Petr', age: 17, groupId: 2},
//       {name: 'Sergey', age: 19, groupId: 1},
//       {name: 'Andrey', age: 20, groupId: 2},
//       {name: 'Vasya', age: 21, groupId: 3},
//       {name: 'Dima', age: 22, groupId: 3},
//       {name: 'Misha', age: 23, groupId: 1},
//       {name: 'Sasha', age: 24, groupId: 2},
//       {name: 'Vlad', age: 25, groupId: 3},
//       {name: 'Vladimir', age: 26, groupId: 1},
//       {name: 'Alex', age: 27, groupId: 2},
//       {name: 'Oleg', age: 28, groupId: 3},
//       {name: 'Igor', age: 29, groupId: 1},
//       {name: 'Ilya', age: 30, groupId: 2},
//       {name: 'Kirill', age: 31, groupId: 3},
//       {name: 'Denis', age: 32, groupId: 1}
//   ];

//   function getStudents(students){
//       let obj = {};
//       for (let i = 0; i < students.length; i++) {
//           if(students[i].age > 17){
//               if(obj[students[i].groupId] == undefined){
//                   obj[students[i].groupId] = [];
//               }
//               obj[students[i].groupId].push(students[i]);
//           }
//       }
//       return obj;
//   }

//   let obj = getStudents(students);

//   console.log(obj[2]);

//---------ЗАДАНИЕ 4---------
//Вам дана строка, состоящая из символов ASCII. Переведите символы в код - число total1,
// замените все цифры 7 на 1 - число total2. И вычтите из total1 число total2.
//Пример:  'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
//total1 = 656667, total2 = 656661

// let string = prompt('Введите строку','')
// function convertString(str)
// {
//   let charAscii = [...str].map(char => char.charCodeAt(0)) 
//   let total1 = ''
//   let total2 = ''
//   for (let i = 0; i < charAscii.length; i++) {
//     total1 += charAscii[i];
//   }
//   let charAscii1 = [...total1].map(char => char.replace('7', '1'))
//   for (let i = 0; i < charAscii1.length; i++) {
//     total2 += charAscii1[i];
//   }
//   alert(`total1 = ${total1}`)
//   alert(`total2 = ${total2}`)
//   let substract = total1 - total2
//   alert(`вычитание = ${substract}`)
// }
// convertString(string)

//---------ЗАДАНИЕ 5---------
//Создайте функцию, которая принимает несколько объектов в качестве параметров 
//и возвращает НОВЫЙ объект со всеми свойствами из входных объектов.
//Для объединения объектов и создания НОВОГО объекта использовать метод assign
// console.log(Object.assign({a: 1, b: 2}, { c: 3, d: 4}));

//---------ЗАДАНИЕ 6---------
//Создайте башню-пирамиду, состоящую из символов "*". В качестве входного параметра
// приходит число этажей башни.

// function createPyramid(height) {
//     for (let i = 1; i <= height; i++) {
//       console.log(' '.repeat(height - i) + '*'.repeat(2 * i - 1));
//     }
//   }
  
//   const pyramidHeight = 5;
//   createPyramid(pyramidHeight);


