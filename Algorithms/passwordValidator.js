// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//     - be at least 8 characters
//     - cannot contain spaces
//     - cannot contain the username
// If all requirements are met, return true.
// Otherwise: return false

console.log(isValidPassword('89Fjj1nms', 'dogLuvr')); //true
console.log(isValidPassword('dogLuvr123!', 'dogLuvr')); //false
console.log(isValidPassword('hello1', 'dogLuvr')); //false

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const hasUser = password.indexOf(username) !== -1;

    return !tooShort && !hasSpace && !hasUser;
}