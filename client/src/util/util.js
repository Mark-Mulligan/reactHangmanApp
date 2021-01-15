export const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

export function wordToArray(input) {
    return input.split('').map(letter => letter.toUpperCase());
}

export function createGameboardBlanks(array) {
    return array.map(item => '_');
}

export function checkWord(word) {
    let onlyLetters = /^[A-Za-z]+$/;
    return (word.match(onlyLetters) === null) ? false : true;
}