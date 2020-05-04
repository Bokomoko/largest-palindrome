function numberReverse (number=0,places=1) {
  // number = number to reverse
  // places, number of decimal places, ignored in this version. Watch out for updates
  number = Math.max(number,-number) // a fancy way to ABS a number)
  if (number <10) return number // if the number has only one digit .. returns itself
  let result   // ... will have the reverse of the number, so we scope it outside the for loop 
  // mind the fancy for loop
  // start -> we start at 0
  // while the number is greater than 0 ...
  // the previous result will be multiplied by 10, because we have another decimal place,
  // and then we add the last digit of the number (the modulus of 10) and asssigns to the result
  // the number is integer divided by 10 ... and the loop continues
  // ..
  // the start clause is used to initialize the acumulator. Since we will need its value
  // outside the scope of the for, result is declared BEFORE
  //
  // the while clause of the for ... as long as number has some value .. has a digit ..
  //
  // the step  clause will do the magic normally inside the for ... 
  // by desctructuring arrays, multipe step computations can be done

  for ( result = 0 ; 
        number > 0 ; 
        [result,number] = [result * 10 + number % 10, parseInt(number/10) ] ) {
    continue
   } 
  return result
}


function stringReverse(wnumber) {
  return  [...String(wnumber)].reverse().join("");
}

function shortReverse(wnumber) {
  return [... wnumber.toString()].reduce( (one,theOther)=> theOther + "" +one )
 
  }

function largestPalindromeProduct(n,which) {
  if (n < 2) return  // less than 2 digits .. no product possible
  const start = 10 ** (n-1) // start 10,100,1000, dependind on n
  const finish = start * 10 - 1 // ends at 99, 999, 9999 depending on n
  let largest = - Infinity // cheat to find largest
  // mind the next for loops it starts at a number and 
  // ends at another number, so the start of the loop is != 0
  // also, the while of the loop has a <= (less than or equal) and not
  // < (less than)
  for (let i= finish; i >= start + 1 ; i--) { // from largest
  
    for (let j = i-1 ; j >= start ; j-- ) {  // thru smallest
      const product = i * j   // what´s the product
      if (which(product) == product)  // is palindrome ?
        if ( product > largest) {
          largest = product
          break // for this j is the largest, let´s try another i
        }
      
    }
  }
  return largest
  // Good luck!
}

//console.log(stringReverse(202));
console.log("Começou")
var t = []
t[0] = new Date().getTime()
var vezes = 10000

const theTimes = [ shortReverse, stringReverse, numberReverse]
theTimes.map( (wfunc,n)=> { 
  for (let i = 1;i<=vezes;i++) largestPalindromeProduct(2,wfunc);
  const x = new Date().getTime() 
  t.push(x)
console.log(wfunc,"levou",t[n+1]-t[n] )

})


