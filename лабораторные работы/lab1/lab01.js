// // 1 ЗАДАНИЕ
// let a = 5 //number
// let name = 'Name' //string
// let i = 0 //number
// let double = 0.23 //number
// let result = 1/0 //infinity
// let answer = true //boolean
// let  no = null //null

//  // 2 ЗАДАНИЕ (Вычислите площадь четырехугольника А, если его стороны равны 45 мм и 21 мм. )
//  let square
//  let a = 45
//  let b = 21
//  square = a*b
//  alert(square)//площадь четырехугольника

//  // 3 ЗАДАНИЕ (Сколько квадратов В со с	торонами 5 мм поместятся в четырехугольник А (45мм х 21мм). )
//  let c = 5
//  let square1 = c*c
//  alert(square1)//площадь квадрата
//  alert(Math.floor (square/square1))  //округление до целого чмсла квадратов 

//  // 4 ЗАДАНИЕ (Сравните a и b)
//  let i = 2;
//  let a = ++i;
//  let b = i++;
//  if(a===b){
//     alert('a и b равны')
//  }
// else if (a<b){
//     alert('b больше a')
// }
// else{
//     alert('a больше b')
// }

//  // 5 ЗАДАНИЕ Сравните и объясните «Котик» и «котик», «Котик» и «китик», «Кот» и «Котик»,  «Привет» и «Пока», 
//73 и «53», false и 0, 54 и true, 123 и false,   true и «3», 3 и «5мм», 8 и «-2», 34 и «34», null и undefined.  Использовать тернарный оператор.
// ('Котик' < 'котик') ? alert ('"Котик" < "котик" верно') : alert('"Котик" < "котик" неверно');
// ('Котик' < 'китик') ? alert ('"Котик" < "китик" верно') : alert('"Котик" < "китик" неверно');
// ('Кот' < 'Котик') ? alert ('"Кот" < "Котик" верно') : alert('"Кот" < "Котик" неверно');
// ('Привет' > 'Пока') ? alert ('"Привет" > "Пока" верно') : alert('"Привет" > "Пока" неверно');
// (73 > '53') ? alert ('73 > "53" верно') : alert('73 > "53" неверно');
// (false == 0) ? alert ('false == 0 верно') : alert('false == 0 неверно');
// (54 > true) ? alert ('54 > true верно') : alert('54 > true неверно');
// (123 > false) ? alert ('123 > false верно') : alert('123 > false неверно');
// (true < '3') ? alert ('true < "3" верно') : alert('true < "3" неверно');
// (3 != '5мм') ? alert ('3 != "5мм" верно') : alert('3 != "5мм" неверно');
// (8 > '-2') ? alert ('8 > "-2" верно') : alert('8 > "-2" неверно');
// (34 == '34') ? alert ('34 == "34" верно') : alert('34 == "34" неверно');
// (null == undefined) ? alert ('null == undefined верно') : alert('null == undefined неверно');

//  // 6 ЗАДАНИЕ Пользователь вводит имя в диалоговое окно. 
// Если имя совпало с именем преподавателя, то выведите сообщение о том, что введенные пользователем данные верные.
// Учтите, что пользователь может ввести только имя или имя и отчество, или полностью ФИО. Кроме того, данные могут быть введены в верхнем регистре. 
// userName = prompt('Введите ваше имя: ', '');
// let a ='Марина'
// let b = a.toLowerCase();
// let c = 'Марина Федоровна'
// let d = c.toLowerCase();
// let e = 'Федоровна Марина Кудлацкая'
// let f = e.toLowerCase();
// let g = 'Марина Кудлацкая'
// let h = g.toLowerCase();
// (userName == a || userName == b || userName == c || userName == d || userName == e || userName == f || userName == g || userName == h) ?
//  alert('данные введены верно') : alert('данные введены неверно');

//  //7 ЗАДАНИЕ У студента 3 экзамена: русский, математика, английский. Если он сдаст все экзамены, то его переведут на следующий курс.
//Если он не сдаст ни одного экзамена, то его отчислят. 
//Если он не сдаст хотя бы один экзамен, то его ожидает пересдача. Для решения задачи использовать логические операторы.
// let russian = confirm('Сдан русский?');
// let math = confirm('Сдана математика?');
// let english = confirm('Сдан английский?');
// (russian == true && math == true && english == true) ? alert ('Вы переходите на следующий курс') :
// (russian == false && math == false && english == false)? alert('Ждет отчисление') : alert('Пересдача')


//  //8 ЗАДАНИЕ Пользователь вводит число а и число b. 
//Вычислите сумму, разницу, деление, умножение, возведение в степень n (n вводит пользователь), остаток от деления, корень.
// let a = Number(prompt('Введите а', ''))
// let b = Number(prompt('Введите b', ''))
// let sum = a + b
// alert('Сумма: '+ sum);
// let substract = a - b
// alert('Разница: ' + substract);
// let divide = a / b
// alert('Деление: ' + divide);
// let multiply = a*b
// alert('Умножение: ' + multiply);
// let n = Number(prompt('Введите n',''))
// alert('Возведение в степень а: ' + a**n + ' b: ' + b**n)
// let devide2 = a % b
// alert('Остаток от деления: '+ devide2)
// alert('Корень а: ' + Math.sqrt(a) + 'b: ' + Math.sqrt(b))

//  //9 ЗАДАНИЕ Вычислите и поясните
// true + true //1 + 1 = 2
// 0 + "5"     // 05
// 5 + "мм"    //5мм
// 8 / Infinity    //0
// 9 * "\n9"   //81
// null - 1    //-1
// "5" - 2     //3
// "5px" - 3   //NaN
// true - 3    // -2
// 7 || 6  //7 !!!!!!!!!!!!!! преоьразования типов

//  //10 ЗАДАНИЕ К каждому четному числу в диапазоне [1, 10] прибавьте 2, а каждое нечетное число преобразуйте к строке вида «Xмм»,
// где X – нечетное число. Выведите результат.
// for (let i = 1; i <= 10; i++){
//     if(i % 2){
//         let numb = Number(i) + 2
//         alert(numb)
//     }
//     else{
//         let str = i + "мм"
//         alert(str)
//     }
// }

//  //11 ЗАДАНИЕ По номеру дня недели определить какой это день: 1 – пн, 2 – вт, … , 7 – вс. 
//Номер дня вводит пользователь. Реализовать через объект и через массив.
// let days1 = ['',"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// let numb = Number(prompt('Введите номер дня недели',''))
// alert( days1[numb])
// let days2 = {
//     1: "Понедельник",
//     2: "Вторник",
//     3: "Среда",
//     4: "Четверг",
//     5: "Пятница",
//     6: "Суббота",
//     7: "Воскресенье"
// }
// alert(days2[numb])