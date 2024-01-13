//-----ЗАДАНИЕ 1-----
//Имеется список товаров. Реализуйте функции, которые добавляют, удаляют товар из списка,
// проверяет наличие товара. Определите количество имеющего товара. Используйте коллекцию Set.  

// let set = new Set();

// set.add('book');
// set.add('pen');
// set.add('pencil');
// set.add('eraser');
// set.add('notebook');

// set.delete('book');

// console.log(set.has('book'));
// console.log(set.has('pen'));

// console.log(set.size);


//-----ЗАДАНИЕ 2-----
//Используя коллекцию Set создайте список студентов. О каждом студенте
// содержится информация: номер зачетки, группа, ФИО. Создайте функции, которые:
//- добавляют студента, 
//- удаляют по номеру, 
//- фильтруют список по группе, 
//- сортируют по номеру зачетки. 

// let set = new Set();

// function removeStudent(number){
//     for(let student of set){
//         if(student.number === number){
//             set.delete(student);
//         }
//     }
// }

// function filterStudentsByGroup(group){
//     const filteredStudents = [];
//     for(let student of set){
//         if(student.group === group){
//             filteredStudents.push(student);
//         }
//     }
//     return filteredStudents;
// }

// function sortStudentsByStudentNumber(){
//     const sortedStudents = [...set];
//     sortedStudents.sort((a, b) => a.number - b.number);
//     return sortedStudents;
// }

// const student1 = { name: 'Алексей', number: 123, group: 'A' };
// const student2 = { name: 'Попович', number: 456, group: 'B' };
// const student3 = { name: 'Вадим', number: 789, group: 'A' };
// const student4 = { name: 'Максим', number: 537, group: 'A' };
// const student5 = { name: 'Матвей ', number: 421, group: 'C' };
// const student6 = { name: 'Татьяна ', number: 679, group: 'B' };
// const student7 = { name: 'Никита ', number: 322, group: 'C' };
// const student8 = { name: 'Владислав', number: 888, group: 'B' };

// set.add(student1);
// set.add(student2);
// set.add(student3);
// set.add(student4);
// set.add(student5);
// set.add(student6);
// set.add(student7);
// set.add(student8);

// removeStudent(123);

// const studentsInGroup = filterStudentsByGroup('A');
// console.log(studentsInGroup);

// const sortedStudents = sortStudentsByStudentNumber();
// console.log(sortedStudents);

//-----Задание 3-----
//Используя коллекцию Map и ее методы, реализуйте хранилище товаров.
// В корзине хранится информация о товаре: id (ключ в коллекции Map),
// название, количество товара, цена. Разработайте функции, которые:  
//- добавляют товар, 
//- удаляют товар из списка по id, 
//- удаляют товары по названию (учтите, что названия товаров могут повторяться), 
//- изменяют количество каждого товара,
//- изменяют стоимость товара.
//Рассчитайте количество позиций в списке и сумму стоимости всех товаров.

// let map = new Map();

// function addProduct(id,name,quantity,price){
//     map.set(id,{name,quantity,price});
// }

// function removeProductById(id){
//     map.delete(id);
// }

// function removeProductsByName(name){
//     for(let [key,value] of map){
//         if(value.name === name){
//             map.delete(key);
//         }
//     }
// }

// function changeQuantity(id,newQuantity){
//     const product = map.get(id);
//     if(product){
//         product.quantity = newQuantity;
//     }
// }

// function changePrice(id,newPrice){
//     const product = map.get(id);
//     if(product){
//         product.price = newPrice;
//     }
// }

// addProduct(1, 'Product1', 5, 10);
// addProduct(2, 'Product2', 3, 15);
// addProduct(3, 'Product3', 8, 20);
// addProduct(4, 'Product4', 7, 30);
// addProduct(5, 'Product5', 2, 40);
// addProduct(6, 'Product6', 9, 15);
// addProduct(7, 'Product7', 3, 45);
// addProduct(8, 'Product8', 3, 50);
// addProduct(9, 'Product9', 4, 60);


// removeProductById(2);
// removeProductsByName('Product3');
// changeQuantity(1, 8);
// changePrice(4, 25);

// const positionsCount = map.size;

// let totalCost = 0;
// for (let [key, value] of map) {
//     totalCost += value.quantity * value.price;
// }

// console.log("Количество позиций в списке: ", positionsCount);
// console.log("Сумма стоимости всех товаров: ", totalCost);
// console.log("Наши товары:",map);

//-----Задание 4-----
//Создайте коллекцию WeakMap для кеширования результатов функции. WeakMap должен содержать
//входные параметры функции и результаты расчета.  Функция должна выполняться только в том случае,
//если в кэше нет данных, иначе – берем данные из WeakMap.

// const cache = new WeakMap();

// function cachedFunction(func) {
//     return function (...args) {
//         if (cache.has(args)) {
//             console.log('Получение из кэша');
//             return cache.get(args);
//         } else {
//             const result = func(...args);
//             cache.set(args, result);
//             return result;
//         }
//     }
// }

// function exampleFunction(a, b) {
//     return a + b;
// }

// const cachedExampleFunction = cachedFunction(exampleFunction);

// console.log(cachedExampleFunction(2, 3)); // Результат будет вычислен
// console.log(cachedExampleFunction(2, 3)); // Результат будет взят из кеша
// console.log(cachedExampleFunction(4, 5)); // Результат будет вычислен
// console.log(cachedExampleFunction(4, 5)); // Результат будет взят из кеша