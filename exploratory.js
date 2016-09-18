/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-18 00:09:97
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-18 00:09:97
*/

function myFunction(message, callback) {
  console.log(message);
  callback(message);
}

myFunction("Hello", function(message) {
  console.log('I wont say hello');
  throw Error();
})
