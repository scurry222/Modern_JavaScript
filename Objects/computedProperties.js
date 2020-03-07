//Create values in object dynamically
const role = 'CTO';
const person = 'Guillaume Salva';
const role2 = 'CEO';
const person2 = 'Julien Barbier';

// const team = {};
// team[role] = person;
// team[role2] = person2;

const team = {
    [role]: person,
    [role2]: person2,
    [21 * 2]: 'Meaning of Life'
}

// make copy of Object, with new key and value
// const addProperty = (obj, k, v) => {
//     return { ...obj, [k]: v };
// }
// readable version --^

const addProperty = (obj, k, v) => ({ ...obj, [k]: v });
// cleaner version --^

addProperty(team, 'School', 'Holberton');
