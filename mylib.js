function numberReverse (number=0,places=1) {
  number = Math.max(number,-number)
  if (number <10) return number
  let result 
  for ( result = 0 ; 
        number > 0 ; 
        [result,number] = [result * 10 + number % 10, parseInt(number/10) ] ) {
    continue
   } 
  return result
}

