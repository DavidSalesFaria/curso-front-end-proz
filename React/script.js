const numbers = [1, 5, 8, 9, 22, 543];

// Accessing indexes
for (i in numbers){
  console.log(i);
}

console.log('------------------------');

// Accessing values
for (e of numbers){
  console.log(e);
}

console.log('------------------------');
console.log('------------------------');

const product = {
  name: 'Fusca',
  price: 20000,
  category: 'car'
}

for (k in product){
  console.log(k);
}

for (k in product){
  console.log(product[k]);
}