
const { faker } = require('@faker-js/faker');
const fs = require('fs');


let types = ['mobile', 'notebook', 'display'];
let currentType = ''

let rand = (types) => {
    let num = Math.floor(Math.random() * types.length);
    currentType = types[num];
    return types[num]
}

let data = () => ({
    items: [...Array(25)].map((_, index) => ({
        id: index + 1,
        type: rand(types),
        img: `../assets/${currentType}-${Math.floor(Math.random() * 9 + 1)}.jpg`,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price()
    })),
})

fs.writeFileSync("./db.json", JSON.stringify(data()))

