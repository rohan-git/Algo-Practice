// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  if(str.length == 1)
    return str.charAt(0);
  return
    rev(str.subString(1))

  return strRev;
}

function reverse1(str) {

  //return str.split('').reverse().join('');
  var strRev = '';

  for(var x = 0; x < str.length; x++)
  {
    strRev+= str.charAt(str.length-1-x);
  }

  return strRev;
}


module.exports = reverse;
