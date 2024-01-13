//---------ЗАДАНИЕ 1---------
// Создайте объект products={}, в котором хранится весь имеющийся товар.  
// Весь товар разделен на категории, одна из них «Обувь», 
// которая в свою очередь делится на виды «Ботинки», «Кроссовки», «Сандалии». 
// О каждой паре обуви хранится следующая информация: уникальный номер товара, размер обуви, цвет, цена. 

let products = {
    shoes:{
        boots:[
            {id: 111, size: 39, color: 'red', price: 100},
            {id: 212, size: 41, color: 'blue', price: 203},
            {id: 333, size: 43, color: 'purple', price: 532},
        ],
        sneakers:[
            {id: 432, size: 37, color: 'green', price: 566},
            {id: 666, size: 38, color: 'white', price: 231},
            {id: 543, size: 37, color: 'pink', price: 753},
            {id: 851, size: 40, color: 'yellow', price: 444},
        ],
        sandals:[
            {id: 626, size: 42, color: 'orange', price: 635},
            {id: 936, size: 37, color: 'red', price: 342},
            {id: 734, size: 35, color: 'pink', price: 362},
        ]
    }
}

//---------ЗАДАНИЕ 2---------
// Создайте функцию-фильтр обуви по цене в заданном диапазоне, 
// по заданному размеру, по заданному цвету. Выведите номера товаров, 
// соответствующих заданному условию (фильтру).

products.shoes[Symbol.iterator] = function*()
{
    const types = Object.keys(this);
    for(let type of types)
    {
        yield this[type];
    }
}

function filterPrice(products, minPrice, maxPrice)
{
    for(let type of products.shoes){
        for(let pair of type){
            if(pair.price >= minPrice && pair.price<=maxPrice)
            {
                console.log(pair.id);
            }
        }
    }
}

console.log('Фильтр по цене')
filterPrice(products, 200, 500)

function filterSize(products, Size)
{
    for(let type of products.shoes){
        for(let pair of type){
            if(pair.size === Size)
            {
                console.log(pair.id);
            }
        }
    }
}

console.log('Фильтр по размеру')
filterSize(products, 37)

function filterColor(products, Color)
{
    for(let type of products.shoes){
        for(let pair of type){
            if(pair.color === Color)
            {
                console.log(pair.id);
            }
        }
    }
}

console.log('Фильтр по цвету')
filterColor(products, 'red')

//---------ЗАДАНИЕ 3---------
// Создайте объект newProducts аналогичный первому. Добавьте свойства  
// «скидка» и «стоимость товара». Преобразуйте свойство «цена» в свойство-аксессор таким образом, 
// чтобы цена товара рассчитывалась с учетом стоимости и  скидки на товар.

let newProducts = {
    shoes:{
        boots:[
            {id: 111, size: 39, color: 'red', price: 100, discount: 10},
            {id: 212, size: 41, color: 'blue', price: 203, discount: 30},
            {id: 333, size: 43, color: 'purple', price: 532, discount: 40},
        ],
        sneakers:[
            {id: 432, size: 37, color: 'green', price: 566, discount: 20},
            {id: 666, size: 38, color: 'white', price: 231, discount: 50},
            {id: 543, size: 37, color: 'pink', price: 753, discount: 15},
            {id: 851, size: 40, color: 'yellow', price: 444, discount: 25},
        ],
        sandals:[
            {id: 626, size: 42, color: 'orange', price: 635, discount: 20},
            {id: 936, size: 37, color: 'red', price: 342, discount: 40},
            {id: 734, size: 35, color: 'pink', price: 362, discount: 30},
        ]
    }
}

newProducts.shoes[Symbol.iterator] = function*()
{
    const types = Object.keys(this);
    for(let type of types)
    {
        yield this[type];
    }
}

for(let type of newProducts.shoes)
{
    for(let pair of type)
    {
        Object.defineProperty(pair,"cost", {
            get() {
                return this.price - (this.price * this.discount / 100);
            },
            configurable: true
        });
    }
}

console.log(newProducts.shoes.sneakers[2].cost);

//---------ЗАДАНИЕ 4---------
// Переопределите дескриптор свойств:
// - «цена»: свойство можно изменять, можно перечислять, нельзя удалять;
// - “уникальный номер товара”:  нельзя изменять, можно перечислять, нельзя удалять.
for(let type of newProducts.shoes)
{
    for(let pair of type)
    {
        Object.defineProperty(pair,"price",
            {
                writable:true,
                enumerable:true,
                configurable:true
            }
            )
        Object.defineProperty(pair,"id",
            {
                writable:false,
                enumerable:true,
                configurable:false
            }
        )
    }
}
console.log(newProducts.shoes.sneakers[1].price);
newProducts.shoes.sneakers[1].price = 50;
console.log(newProducts.shoes.sneakers[1].price);

//---------ЗАДАНИЕ 5---------
// Для каждого товара (пара обуви) создайте функцию-конструктор. 
function Shoes(id, size, color, price, discount){
    this.id = id;
    this.size= size;
    this.color = color;
    this.price = price;
    this.discount = discount;
    Object.defineProperty(this,"cost",
        {
            get(){
                return this.price - (this.price * this.discount/100);
            },
            enumerable: true,
            configurable: true
        }
        )
}

let shoe = new Shoes(43, 34, "red", 543, 20);
console.log(shoe.id)

// //---------ЗАДАНИЕ 6---------
// // Создайте объект allProducts аналогичный newProducts. 
// // Каждый товар (пару обуви) создайте с помощью конструктора.
let allProducts ={
    shoes:{
        boots:[],
        sneakers:[],
        sandals:[]
    }
};

for(let type of Object.keys(newProducts.shoes))
{
    let shoesType = newProducts.shoes[type];
    for(let shoesPair of shoesType)
    {
        let newProduct = new Shoes(
            shoesPair.id,
            shoesPair.size,
            shoesPair.color,
            shoesPair.cost,
            shoesPair.discount
        );
        allProducts.shoes[type].push(newProduct);
    }
}

console.log(allProducts);