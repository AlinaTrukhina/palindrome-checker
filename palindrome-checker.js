function palindrome() {
  let str = prompt("Enter word(s) to be checked");
  const lowerStr = str.toLowerCase(); //convert to lower case
  const replaced = lowerStr.replace(/[^a-z0-9]/gi, ''); //remove everything but letters and numbers
//	console.log(replaced);
  
  for (let i = 0; i < replaced.length/2; i++) {
    if (replaced[i] === replaced[replaced.length - i - 1]) {
//      console.log(replaced[i]);
    } else {
      alert('No');
      return false;
    }
  }
    alert('Yes');
    return true;
}

/*
TESTS from freecodecamp.com

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");

*/
