function scramble(str1, str2) {
    for (let i = 0; i < str2.length; i++){

        if(!str1.includes(str2[i])){
            return false
        } else{
            str1 = str1.replace(str2[i], '-')
        }
    }
    return true
}

  module.exports = { scramble }

  


  console.log(scramble("rkqodlw", "world")) //true
  console.log(scramble("scriptsjava", "javascripts")) //true
  console.log(scramble("jscripts", "javascript")) //false
  