let numbers = [1, 2, 3]

const array = [
    {id: 1, name: 'Vasya', group: 10},
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11}
]

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

let user = {
    name: 'Masha',
    age: 21
}

let user1 ={
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
}

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
}

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams:{
            math: true,
            programming: false
        }
    }
}

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams:[
            {math: true, mark: 8},
            {programming: true, mark: 4},
        ]
    }
}

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD'
                }
            },{
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD'
                }
            },
        ]
    }
}

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
                }
            },{
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
                }
            },
        ]
    }
}
//---------ЗАДАНИЕ 1---------
// Выполнить глубокое копирование всех объектов и массивов. Использовать spread оператор. 
let copyUser = {...user};

let copyNumbers = [...numbers];

let copyUser1 = {
    ...user1,
     location: {...user1.location}
};

console.log("пример номер 1")
copyUser1.location.city = 'Michanovichi';
console.log(copyUser1); 

let copyUser2 = {
    ...user2,
    skills: [...user2.skills]
};

console.log("пример номер 2");
copyUser2.skills.push("KSIS");
console.log(copyUser2);

console.log("пример 3")
let copyArray = array.map(el => ({...el}));
console.log(copyArray);

let copyUser4 = {
    ...user4,
    studies: {...user4.studies,
    exams: {...user4.exams}
}
};
console.log("пример 4")
copyUser4.studies.speciality = "POIT";
console.log(copyUser4);

//---------ЗАДАНИЕ 2---------
//Обратитесь к копии объекта user5 и измените значение свойства group на 12, 
//а оценку по программированию измените на 10.

let copyUser5 = {
    ...user5,
    studies: {
        ...user5.studies,
        department: {
            ...user5.studies.department
        },
        exams: user5.studies.exams.map(exam => ({...exam}))
    }
};
console.log("Задание под номером 2")
copyUser5.studies.department.group = 12;
copyUser5.studies.exams[1].mark = 10;
console.log(copyUser5);

//---------ЗАДАНИЕ 3---------
//Обратитесь к копии объекта user6 и измените имя преподавателя.

let copyUser6 = {
    ...user6,
    studies: {
        ...user6.studies,
        exams: user6.studies.exams.map(exam => ({
            ...exam,
            professor: {...exam.professor},
        }))
    }
};
console.log("Задание под номером 3")
copyUser6.studies.exams[0].professor.name = "Vika Evseenko";
console.log(copyUser6);

//---------ЗАДАНИЕ 4---------
//Обратитесь к копии объекта user7 и измените количество страниц 
//на 3 для статьи “About CSS” преподавателя Petr Ivanov.

let copyUser7 = {
    ...user7,
    studies: {
        ...user7.studies,
        department: {
            ...user7.studies.exams.map(exam => ({
                ...exam,
                professor: {
                    ...exam.professor,
                    articles: exam.professor.articles.map(article => ({...article}))
                }
            }))
        }

    }
};
console.log("Задание под номером 4");
copyUser7.studies.exams[1].professor.articles[1].pagesNumber = 3;
console.log(copyUser7);

//---------ЗАДАНИЕ 4---------
//Замените все сообщения в объекте store на “Hello”
let copeStore = {
    state: {
        ...store.state,
        profilePage: {
            ...store.state.profilePage,
            posts: store.state.profilePage.posts.map(post => ({ ...post })),
        },
        dialogsPage: {
            ...store.state.dialogsPage,
            dialogs: store.state.dialogsPage.dialogs.map(dialog => ({ ...dialog })),
            messages: store.state.dialogsPage.messages.map(message => ({ ...message })),
        },
        sidebar: [...store.state.sidebar],
    },
};
console.log("Задание под номером ПЯТЬ")
copeStore.state.dialogsPage.messages = copeStore.state.dialogsPage.messages.map(function(m){
    return m = {id: m.id, message: "Hello"};
});
console.log(copeStore);