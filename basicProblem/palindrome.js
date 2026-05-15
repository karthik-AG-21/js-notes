let palindrome = "malayalam";

let isPalindrome = true;

for(let i = 0; i< palindrome.length/ 2 ; i++){

   if(palindrome[i] !== palindrome[palindrome.length-1-i]){
      isPalindrome = false;
      break;
   }
}

console.log(isPalindrome)
