function camelCase(string) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const index = [];
    let response = '';
    let lastIndex = 0;
    
    for (let i=0; i < string.length; i++){
        if (letters.includes(string[i])) {
            response = response + string.slice(lastIndex, i)  + " "
            lastIndex = i
        }
    }
    
    return response + string.slice(lastIndex);
} 
  module.exports = { camelCase };


  console.log(camelCase('camelCase'))
  console.log(camelCase('setIsLoading'))