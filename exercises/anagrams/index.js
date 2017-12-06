// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//First Solution 
/*function anagrams(stringA, stringB) {
    cleanedStringA=stringA.replace(/[^\w]/g,'').toLowerCase();
    cleanedStringB=stringB.replace(/[^\w]/g,'').toLowerCase();
    if(cleanedStringA.length!==cleanedStringB.length){
        return false;
    }
    
    const chars={};

    for(let char of cleanedStringA){
        chars[char]=chars[char]+1||1;
    }

    for(let char of cleanedStringB){
        if(!chars[char]){
            return false;
        }
        chars[char]--;
    }
    return true;

}*/

//Second Solution
/*function anagrams(stringA,stringB){

    let cleanedStringA=charMapFunc(stringA);
    let cleanedStringB=charMapFunc(stringB);
   
    if(Object.keys(cleanedStringA).length!==Object.keys(cleanedStringB).length){
        return false;
    }
    for(let char in cleanedStringA){
        if(cleanedStringA[char]!==cleanedStringB[char]){
            return false;
        }
    }
    return true;


}
function charMapFunc(str){
    let charMap={};
    for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
        charMap[char]=charMap[char]+1||1;
    }
   
    return charMap;

}*/

//Third Solution

function anagrams(stringA,stringB){
   const cleanedStringA=cleanedString(stringA);
   const cleanedStringB=cleanedString(stringB);
    
   return  cleanedStringA===cleanedStringB?true:false;

}
function cleanedString(str){

    return str
              .replace(/\^w/g,'')
              .toLowerCase()
              .split('')
              .sort()
              .join('');
}



module.exports = anagrams;
