// Given two strings, write a function to determine if the second string is an
// anagram of the first. An anagram is a word, phrase, or name formed by
// rearranging the letters of another, such as 'cinema' formed from 'iceman'.


function validAnagram(str1, str2){
    if (str1.length !== str2.length) return false
    const d1 = {};
    const d2 = {};
    for (var char1 in str1) {
      if (char1 in d1)
          d1[char1] ? d1[char] += 1 : d1[char] = 1;
    }
    for (let i in d2) {
        let letter = d2[i];

        if (!d1[letter]) return false;

        else d1[letter] -= 1;
    }
    return true
}

  let answer = validAnagram('anagram', 'nagaram');
  console.log(answer);
