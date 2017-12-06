// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//First Solution

/*function pyramid(n) {
    const lastrow=n-1;
    const levelLength=2*n-1

    for(let i=lastrow;i>=0;i--){
        let space=' '.repeat(i);
        let hash='#'.repeat(levelLength-(i*2));
        console.log(space+hash+space);
    }
   
}*/

//Second Solution with recursive

/*function pyramid(n,lastRow=n-1){
    const levelLength=2*n-1;
    if(lastRow===0){
    return;
    }
      while(lastRow!==0){
    let space=' '.repeat(lastRow);
    let hash='#'.repeat(levelLength-(lastRow*2));
      console.log(space+hash+space);
      return pyramid(n,lastRow-1);
    }  
    pyramid(n,lastRow)
  }*/

  //Third Solution

/*function pyramid(n) {
    const midpoint = (n - 1);
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}*/

//Fourth solution with recursion

function pyramid(n,row=0,level=''){
    const midpoint=n-1;
    if(n===row){
        return;
    }
    if(level.length===2*n-1){
        console.log(level);
        return pyramid(n,row+1);
    }

    if(midpoint-row<=level.length && midpoint+row>=level.length)
    {
        level+="#"
    }else{
        level+=' ';
    }
    pyramid(n,row,level);
}



module.exports = pyramid;