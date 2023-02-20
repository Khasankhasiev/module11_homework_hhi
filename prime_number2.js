function check_prime(number) {

    if (number >= 1000) {
      return "Данные неверны"
    } else if (number === 1)  {
        return "Это единица";
    } else if(number === 0)  {
        return "Это ноль";
    } else if (number === 2) {
        return "Это простое число"
    } else {
        for(let divisor = 2; divisor < number; divisor++)  {
            if(number % divisor === 0) {
                return "Это составное число";
            }
        }
        return "Это простое число";
        }
}
  
console.log(check_prime(1000)); 