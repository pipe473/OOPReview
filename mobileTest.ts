import {Mobile} from './mobile';

let mobile1 = new Mobile("Nokia", 3210, "China", 16, "Black", true, 4, 200);

let mobile2 = new Mobile("iPhone", 3, "California", 32, "White", false, 1, 600 );

let mobile3 = new Mobile("Samsung Galaxy", 10, "Corea", 64, "Grey", true, 2, 900 );

let mobiles: Mobile[];

// mobiles.push(mobile1);
// mobiles.push(mobile2);
// mobiles.push(mobile3);

mobile1.charactsMobiles();
mobile2.charactsMobiles();
mobile3.charactsMobiles();

// console.log(mobiles);
// console.log(mobile1.name);
// console.log(mobile1.model);
// console.log(mobile1.trademark);
// console.log(mobile1.sdSize);
// console.log(mobile1.color);
// console.log(mobile1.is5G);
// console.log(mobile1.cameraNumber);
// console.log(mobile1.price);

