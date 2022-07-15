module.exports = function check(str, bracketsConfig) {
  // your solution
  const pattern = bracketsConfig.reduce(function(acc, value) {
    return [...acc, `${value[0]}${value[1]}`]
  },[])
  
  let str1 = str;
  let str2;
  while (str1 != str2){
    str2 = str1;
    pattern.forEach(a => {
      str1 = str1.replace(a,'');
    });
  }
  if (str1 == '') {
    return true
  };
  return false
}
