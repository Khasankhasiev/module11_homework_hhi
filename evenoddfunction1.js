function getEvenOdd() {
    let numbers = [0, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for(let i=0; i < numbers.length; i++){
    
        if(typeof numbers[i] === 'number'&& !isNaN(numbers[i])){
            if(numbers[i] === 0){
            console.log(numbers[i] + " - ноль")
            }
        }else{
            console.log(numbers[i]  + " - неопределенно")
      }
    }
    let isOdd = (num) => num % 2 == 1;
  
    let odd = numbers.filter(isOdd).length;

    let isEven = (num) => num % 2 == 0
  
    let even = numbers.filter(isEven).length;
    
    console.log(odd + " - нечетные числа");
    
    console.log (even + " - четные числа");
};
  
  getEvenOdd();