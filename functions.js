// --------------------------------------------------------------------
// The runtime of each function will be right above where it's declared
// --------------------------------------------------------------------


// 1 - Sum Zero -------------------------------------------------------------------------------------------


// ----------------
// Runtime - O(n^2)
// Spacetime - O(1)
// ----------------
function addToZero(arr) {

    for (let i = 0; i < arr.length; i++) {
        for(let j = arr.length; j !== -1; j--) {
            if (arr[i] + arr[j] === 0) {
                console.log(true)
                return true
            }
        }
    }
    console.log(false)
    return false
}

// addToZero([]);
// // -> False
// addToZero([1]);
// // -> False
// addToZero([1, 2, 3]);
// // -> False
// addToZero([1, 2, 3, -2]);
// // -> True


// 2 - Unique Chars -------------------------------------------------------------------------------------------


// ----------------
// Runtime - O(n^2)
// Spacetime - O(1)
// ----------------
function hasUniqueChars(str) {
    let isUnique = false
    for (let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if (str[i] !== str[j]) {
                isUnique = true
            } else {
                isUnique = false
                console.log(isUnique)
                return isUnique
            }
        }
    }
    console.log(isUnique)
    return isUnique
}

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False


// 3 - Panagram -------------------------------------------------------------------------------------------


// ----------------
// Runtime - O(n^2)
// Spacetime - O(n)
// ----------------
/*
    This function I was unsure on wether it was O(n) or O(n^2), I went with
    O(n^2) because even though alphabetArr will always have a fixed length. The
    .includes() is like a for loop of it's own and will iterate over every element
    within the strArr which could be of any length. Which would make this function
    like a for-loop within a for-loop.

    Lemme know if I got this problem right or wrong with both the runtime and spacetime
    i'm very interested in finding out.
*/
function isPangram(str) {
    let strArr = str.split("")
    let alphabetStr = "abcdefghijklmnopqrstuvwxyz"
    let alphabetArr = alphabetStr.split("")
    let hasLetter = false

    for (let i = 0; i < alphabetArr.length; i++) {
        if (strArr.includes(alphabetArr[i])) {
            hasLetter = true
        } else {
            hasLetter = false
            console.log(hasLetter) 
            return hasLetter
        }
    }
    console.log(hasLetter)
    return hasLetter
}

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False


// 4 - Longest Word -------------------------------------------------------------------------------------------


// ----------------
// Runtime - O(n)
// Spacetime - O(1)
// ----------------
function findLongestWord(arr) {
    let longest = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length
        }
    }
    console.log(longest)
    return longest
}

// findLongestWord(["hi", "hello"]);
// // -> 5