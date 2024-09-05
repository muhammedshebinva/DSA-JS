//upper case first letter of each word in a sentence



function titleUpperCase(str){
    const words = str.split(' ')

    const UppercasedWords = words.map((word)=>{
        const firstLetter = word.charAt(0).toUpperCase()

        const restOfWord = word.slice(1).toLowerCase()

        return firstLetter + restOfWord

    })

    return UppercasedWords.join(" ")
    
}

const inputString = "hello shbein how are you"

const title = titleUpperCase(inputString)

console.log(title);
