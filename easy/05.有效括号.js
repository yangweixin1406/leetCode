var isValid = function(s) {
  let arr = []
  let len = s.length
  if (len % 2) return false
  for (let val of s) {
    switch(val) {
      case '(':
        arr.push(val)
        break
      case '[':
        arr.push(val)
        break;
      case '{':
        arr.push(val)
        break;
      case ')':
        if (arr.pop() !== ')') return false
        break
      case ']':
        if (arr.pop() !== ']') return false
        break
      case '}':
        if (arr.pop() !== '}') return false
        break
    }
  }
  return !arr.length
};

console.log(isValid('[]'))