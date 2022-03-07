module.exports = function reverse (n) {
    let newStr = String(Math.abs(n));
    let anotherStr = newStr.split('').reverse().join('');
    return Number(anotherStr);
}
