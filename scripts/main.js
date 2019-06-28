// Массив чисел от 0 до 20, я хочу суму всех простых чисел

let arr = [];
let naturalArr = [];

for(let i = 1; i <=20; i++){
  arr.push(i);
}
console.log("array before: " + arr);

function gettingNatural(item){
  let counter = 0;

  for(let i = item; i > 0; i--){
    if(item % i == 0){
      counter++;
    }
  }

  if(counter < 3){
    naturalArr.push(item);
  }
  
}


for(let i = 1; i <=20; i++){
  gettingNatural(arr[i]);
}

console.log("natural array: " + naturalArr);