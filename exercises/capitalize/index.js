// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//First Solution
/*function capitalize(str) {
    const strArray=[];
    for(let word of str.split(' ')){
        strArray.push(word[0].toUpperCase()+word.substr(1));
    }
    return strArray.join(' ');
}*/

//Second solution
function capitalize(str){
let result=str[0].toUpperCase();

for(let i=1;i<=str.length-1;i++){
    if(str[i-1]===' '){
        result+= str[i].toUpperCase();
    }else{
        result+=str[i];
    }
}
return result;

}



module.exports = capitalize;
