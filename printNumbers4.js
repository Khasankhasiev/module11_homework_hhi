function printNumbers(from, to) {
    let number = from;
    
    function run () {
      console.log(number);
      if (number == to) {
        clearInterval(timerId);
      }
      number++;
    }
    
    run();
    let timerId = setInterval (run, 1000);
  }
  
  printNumbers(5, 15);