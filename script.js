let a = +prompt('Введите число');
let b = +prompt('Введите степень');
let sum = 0


for( let i = 1; i <= b; i++){
    sum = a ** b;  
    console.log (sum);
}
alert('Ответ ' + sum);