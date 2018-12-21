// function testFunction () {
//   alert("testFunction works");
// }

export const numberIsDecimal = (n) => {
  var result = (n - Math.floor(n)) !== 0; 
   
  if (result)
    return true;
   else
     return false;
}
