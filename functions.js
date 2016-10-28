//  Build your own concatenation
function combineWords(word1, word2) {
    return word1 + word2;
}

var result = combineWords('dog', 'house');
console.log(result);

// Repeat a phrase
function repeatPhrase(phrase, n) {
    for (var idx = 0; idx < n; idx++) {
        console.log(phrase);
    }
}

repeatPhrase('Hello', 5);

// Build your own Power function
function toTheNthPower(number, power) {
    var total = 1;
    for (var idx = 0; idx < power; idx++) {
        total *= number;
    }
    return total;
}

var result = toTheNthPower(4, 5);
console.log(result);

// Area of a circle: pi*r^2
function areaOfACircle(radius) {
    return (radius * radius * Math.PI).toFixed(2);
}

var result = areaOfACircle(2);
console.log(result);

// Pythagorean Theorem: a^2 + b^2 = c^2
function pythagoreanTheorem(a, b) {
    c = Math.sqrt((a * a) + (b * b));
    return c;
}

var result = pythagoreanTheorem(3, 4);
console.log(result);

// Is X Evenly Divisible by Y?
function isXEvenlyDivisibleByY(x, y) {
    if (x % y === 0) {
        return true;
    }
    return false;
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);

// Vowel Count
function countVowels(word) {
    var matches = 0;
    var vowels = 'aeiou';
    for (var idx = 0; idx < vowels.length; idx++) {
        if (word.match(vowels[idx]) !== null) {
            matches++;
        }
    }
    return matches;
}

var result = countVowels('stealing');
console.log(result);

// Does the array contain "wdi"
function findWdi(arr) {
    if (arr.indexOf('wdi') < 0) {
        return false;
    }
    return true;
}

console.log(findWdi([9, 'Bart Simpson', true, 'wdi']));
console.log(findWdi(['a','b','c']));

// Build an ASCII Triangle!
function printTriangle(length) {
    var times = 0;
    var level = '';
    for (var idx = 1; idx <= length; idx++) {
        level = '';
        times = idx;
        while (times > 0) {
        level += '*';
        times--;
        }
      console.log(level);
    }
}

printTriangle(3);
printTriangle(5);

// Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
function printPyramid(length) {
    var times = 0;
    var level = '';
    var spaces = 0;
    for (var idx = 1; idx <= length; idx++) {
        level = '';
        times = idx;
        spaces = length - idx;
        while (times > 0) {
            while (spaces > 0) {
                level += ' ';
                spaces--;
            }
        level += '* ';
        times--;
        }
      console.log(level.length);
      console.log(level);
    }
}

printPyramid(10);