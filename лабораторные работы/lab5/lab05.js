//-----ЗАДАНИЕ 1-----
// 1.	Что выведет alert в примерах? Поясните почему так? На что ссылается [[Environment]] функций? 
//Что будет содержать LexicalEnvironment при запуске функций? Что хранится в counter? Когда будет вызвана функция (*)?
// Вариант 1.
// function makeCounter(){
//     let currentCount = 1;

//     return function(){ //(*)
//         return currentCount++;
//     };
// }

// let counter  = makeCounter();

// alert(counter() ); //1
// alert(counter() ); //2
// alert(counter() ); //3

// let counter2 = makeCounter();
// alert(counter2() ); //1

//Вариант 2

// let currentCount = 1;

// function makeCounter(){
//     return function(){
//         return currentCount++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter() ); //1
// alert(counter() ); //2

// alert(counter2() ); //3
// alert(counter2() ); //4



//-----ЗАДАНИЕ 2-----
// Реализуйте каррированную функцию, которая рассчитывает объем прямоугольного параллелепипеда. 
// Выполните преобразование функции для неоднократного расчёта объема прямоугольных параллелепипедов, 
// у которых одно ребро одинаковой длины.
// function volume(a)
// {
//     return (h, b) =>
//     {
//         return h*a*b;
//     };
// }
// const a = volume(10)
// let pr1 = a(2, 3)
// let pr2 = a(3, 4)
// let pr3 = a(4, 5)
// let pr4 = a(5, 6)

// console.log(pr1)
// console.log(pr2)
// console.log(pr3)
// console.log(pr4)



//-----ЗАДАНИЕ 3-----
// Пользователь управляет движением объекта, вводя в модальное окно  команды left, right, up, down. 
// Объект совершает 10 шагов в заданном направлении (т.е. высчитываются и выводятся в консоль соответствующие координаты) 
// и запрашивает новую команду. Разработайте генератор, который возвращает координаты объекта, согласно 
// заданному направлению движения. 
// function* moveObject(){

//     let x = 0
//     let y = 0
//     let step
    
//     for(let i = 0; i < 10; i++)
//     {
//         step = prompt('Введите команду ','')
//         switch(step)
//         {
//             case 'left':
//                 x--;
//                 break;
//             case 'right':
//                 x++;
//                 break;
//             case 'up':
//                 y++;
//                 break;
//             case 'down':
//                 y--;
//                 break;
//         }   
//         alert(`Координаты: (${x}.${y})`)
//     }

// }

// let command = moveObject()
// let move = command.next().value



//-----ЗАДАНИЕ 4-----
// Какие переменные и функции сохраняются в глобальный объект window? 
// Получите значения всех созданных переменных и функции, которые хранятся в глобальном объекте window. 
// Переопределите переменные через глобальный объект.
// var globalVariable = "Hello, world!";

// function globalFunction() {
//   console.log("Это глобальная функция");
// }

// console.log(window.globalVariable); 
// window.globalFunction(); 

// window.globalVariable = "Переопределенная переменная";

// window.globalFunction = function() {
//   console.log("Переопределенная функция");
// };

// console.log(globalVariable); 
// globalFunction();