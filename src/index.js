
module.exports = function reverse(n) {
    let b = 0;
    num = Math.abs(n);
    while (num > 0) {
        b = b * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return b;
}
