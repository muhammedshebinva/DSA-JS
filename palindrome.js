function palindrome(str){
    a= str.split("").reverse().join("")
    if (a===str) return "palindrome"
    else return "not palindrome"
}

console.log(palindrome("abcde"));