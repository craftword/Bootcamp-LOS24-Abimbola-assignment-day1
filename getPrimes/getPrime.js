exports.getPrimes = function (n) {
  var arr = [];
  if(Number.isInteger(n)) {
     if(n == 0 || n < 0) {
     	return "negative number or zero";
     }else {
      /**
     * An integer is prime if it is not divisible by any prime less than or equal to its square root
     **/
      var j,k=2,
      arrPrime=[2];
      for (i=3;i<=n;i+=2){
        j = Math.sqrt(i);
        isPrime = true;
        for (k = 2; k <= j; k++)
           {
              if (i % k === 0){
                    isPrime = false;
                    break;
                }

           }
         if(isPrime){
                arrPrime.push(i);
            }
     	}
     }


  }else {

  	return "Invalid Input";
  }


return  arrPrime;


};
