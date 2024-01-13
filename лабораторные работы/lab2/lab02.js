// ЗАДАНИЕ 1
// function basicOperation(operand, value1, value2)
// {
//     let a = Number(value1)
//     let b = Number(value2)
//     switch(operand){
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '/':
//             return a / b;
//         case '*':
//             return a * b;
//     }
// }

// alert(basicOperation(
//     operation = prompt('Введите оператор',''),
//     a = prompt('Введите первое значение', ''),
//     b = prompt('Введите второе значение значение', ''))
// )

//ЗАДАНИЕ 2
//Реализовать функцию, которая принимает число n и возвращает сумму кубов всех чисел до n включительно.
// function CountSum()
// {
//     let sum = 0;
//     for (i = 1; i <= n; i++){
//         sum += Math.pow(n,3);
//     }
//     return sum;
// }
// alert(CountSum(n=prompt('Введите n','')))

//ЗАДАНИЕ 3
//Реализовать функцию, которая принимает один аргумент – массив чисел и возвращает среднее арифметическое всех элементов массивa.
// function createArray()
// {
//     let n = prompt('Введите количество элементов массива','')
//     let array = new Array()
//     for (i = 0; i < n;  i++){
//         array.push(prompt('Введите элемент массива', ''))
//     }
//     return (array);
// }

// function countAverage(array) {
//     let sum = 0;
//     let n = array.length; 
//     //  for (i = 0; i <= n; i++){ в этой строчке переменная n по области видимости не видна
//     for (let i = 0; i < n; i++) {
//       sum += parseFloat(array[i]); 
//     }
//     let average = sum / n;
//     return average;
//   }

//   let x = countAverage(createArray());

//   alert("Среднее арифметическое: " + x);

//ЗАДАНИЕ 4
//Реализовать функцию, которая получает строку str, переворачивает ее и возвращает строку, 
//состоящую только из символов английского алфавита.
// function reverseString(str)
// {
//     let newString = ''
//     for(let i = str.length - 1; i >= 0; i--)
//     {
//         if((str[i] >= 'a' && str[i] <= 'z')||(str[i] >= 'A' && str[i] <= 'Z')|| str[i]==' ')
//         {
//             newString += str[i];
//         }
//     }
//     return newString;
// }
// let string = prompt('Введите строку', '')
// let reveredString = reverseString(string)
// alert(reveredString);

//ЗАДАНИЕ 5
//Напишите функцию, которая принимает целое число n и строку s в качестве параметров и возвращает строку s, повторяющуюся ровно n раз.
// function returnString(n, s)
// {
//     let result = '';
//     for (i = 1; i <= n; i++){
//         result += s + ' '
//     }
//     return result;
// }
// alert(returnString(n = prompt('Введите число',''),s = prompt('Введите строку','')))

//ЗАДАНИЕ 6
//Напишите функцию, которая принимает два массива строк arr1 и arr2. Функция возвращает массив arr3, 
//которые содержит строки из arr1, но не входящие в arr2.
// function getStringArray(arr1, arr2) {
//     let arr3 = new Array();
//     for (let i = 0; i < arr1.length; i++) {
//         const str = arr1[i];
//         if (!arr2.includes(str)) {
//           arr3.push(str);
//         }
//       }
//     return arr3;
// }
// function createArray()
// {
//     let n = prompt('Введите количество элементов массива','')
//     let array = new Array()
//     for (i = 0; i < n;  i++){
//         array.push(prompt('Введите элемент массива', ''))
//     }
//     return (array);
// }
//   arr1 = createArray();
//   arr2 = createArray();
//   alert('Первый массив: {'+arr1 +'}')
//   alert('Второй массив: {'+arr2 +'}')
//   arr3 = getStringArray(arr1, arr2);
//   alert ('Третий массив: {'+arr3 +'}')