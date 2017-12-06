// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//First Solution
/*function vowels(str) {
    let str1=str.toLowerCase();
    let obj={
        a:0,
        e:0,
        i:0,
        o:0,
        u:0
    }
    let result=0;

    for(let char of str1){
        const index=char.indexOf(Object.keys(obj));
        if((Object.keys(obj)).includes(char)){
            obj[char]++;
        }
    }
    console.log(obj);
   
    for(let char in obj){
        result+=obj[char];
    }
    return result;

}*/

//Second Solution

/*function vowels(str){
    const checker="aeiou";
    let count=0;
    for(let char of str.toLowerCase()){
        if(checker.includes(char)){
            count++;
        }
    }
    return count;

}*/

//Third Solution

/*function vowels(str){
    return str.replace(/[^aeiou]/gi,'').length;
}*/

//Fourth Solution
function vowels(str){
    const matches=str.match(/[aeiou]/gi);
    return matches?matches.length:0;
}

module.exports = vowels;
