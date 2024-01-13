//---------ЗАДАНИЕ 1---------
//Имеется массив numbers. Сохранить первый элемент массива в переменную y используя деструктуризацию
// function createArray()
// {
//     let n = prompt('Введите количество элементов массива','')
//     let array = new Array()
//     for (i = 0; i < n;  i++){
//         array.push(prompt('Введите элемент массива', ''))
//     }
//     return (array);
// }

// let numbers = createArray()
// alert(numbers)
// let [y] = numbers
// console.log(y)



//---------ЗАДАНИЕ 2---------
// Объект user имеет свойства name, age. Создайте объект admin, у которого есть 
// свойства admin и все свойства объекта user.
// Используйте spread оператор
// let user = {
//     name: 'vivsii',
//     age: 18
// }

// let admin = {
//     work: 'epam',
//     study: 'bstu',
//     ...user
// }

// console.log(admin)



//---------ЗАДАНИЕ 3---------
// Выполнить деструктуризацию объекта store до 3 уровня вложенности. 
// После этого вывести значения likesCount из массива posts. 
// Выполнить фильтрацию массива dialogs – выбрать пользователей с четными id.   
// В массиве messages заменить все сообщения на “Hello user” (использовать метод map).
let store = {
    state: {    // 1 уровень
        profilePage: {  // 2 уровень
            posts:  [   //3 уровень
                {id: 1, massage: 'Hi', likeCount: 12},
                {id: 2, message: 'By', likeCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs:    [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages: [
                {id: 1,message: 'hi'},
                {id: 2,message: 'hi hi'},
                {id: 3,message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
}

let {
    state :{
        profilePage :{
            posts: [
                post1,
                post2,
            ],
            newPostText,
        },
        dialogPage: {
            dialogs: [
                dialog1,
                dialog2,
                dialog3,
                dialog4,
            ],
            messages: [
                message1,
                message2,
                message3,
            ],
        sidebar,
        },
    },
} = store;

console.log(post1.likesCount);
console.log(post2.likesCount);

dialogsMassive = [dialog1,dialog2,dialog3,dialog4];
filteredDialogsMassive = [];
let i = 0;
dialogsMassive.forEach((dialog) =>
{
    if(dialog.id % 2 === 0)
{
    filteredDialogsMassive[i] = dialog;
    i++;
}
});
for(let j = 0 ;j < filteredDialogsMassive.length;j++){
    console.log(filteredDialogsMassive[j]);
}

messagesMassive = [message1,message2,message3];
messagesMassive.map((messageWindow )=>
{ messageWindow.message = "Hello user"} );

for(let j = 0 ;j < messagesMassive.length;j++){
    console.log(messagesMassive[j]);
}

//---------ЗАДАНИЕ 4---------
// 4.	В массиве tasks хранится список задач. Создать новую задачу task и добавить ее в массив, используя spread оператор
// let newTask = [
//     {
//         id: prompt('id: ', ''),
//         title: prompt('title: ', ''),
//         isDone: prompt('isDone: ', '')
//     }
// ]

// let tasks = [
//     {id: 1, title: "HTML&CSS", isDone: true},
//     {id: 2, title: "JS", isDone: true},
//     {id: 3, title: "ReactJS", isDone: false},
//     {id: 4, title: "Rest API", isDone: false},
//     {id: 5, title: "GraphQL", isDone: false},
//     ...newTask
// ];
// console.log(tasks)



//---------ЗАДАНИЕ 5---------
// Массив [1, 2, 3] передайте в качестве параметра функции sumValues. Используйте spread оператор.
// function sumValues(x, y, z){
//     return x + y + z;
// }

// let arr = [1, 2, 3]
// console.log(sumValues(...arr))