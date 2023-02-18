/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []

  for(let i = 0; i < s.length; i++){
    const char = s.charAt(i);
    
    switch (char) {
      case '(':
        stack.push(')')
        break;
      case '{':
        stack.push('}')
        break;
      case '[':
        stack.push(']')
        break;
    
      default:
        let res = stack.pop()
        if(res !== char){
          return false
        }
        break;
    }
  }
  stackValid = stack.length === 0;
  return stackValid 
};

console.log(isValid('['))