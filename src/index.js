module.exports = function toReadable(number) {
    const zero = "zero";
    const digits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    const hundred = "hundred";
    const numbers = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    var result = "";
    if (number === 0) return zero;
    if (number > 0 && number <= 10) return digits[number];
    if (number > 10 && number <= 19) return numbers[String(number)[1]];
    if (number > 19 && number <= 99) {
        result = tens[String(number)[0]] + " " + digits[String(number)[1]];
        return result.trim();
    }
    if (
        number === 100 ||
        number === 200 ||
        number === 300 ||
        number === 400 ||
        number === 500 ||
        number === 600 ||
        number === 700 ||
        number === 800 ||
        number === 900
    )
        return digits[String(number)[0]] + " " + hundred;

    if (number > 100 && number <= 999 && String(number)[1] >= 2) {
        result =
            digits[String(number)[0]] +
            " " +
            hundred +
            " " +
            tens[String(number)[1]] +
            " " +
            digits[String(number)[2]];
        return result.trim();
    }
    if (
        number > 100 &&
        number <= 999 &&
        String(number)[1] <= 1 &&
        String(number)[1] > 0
    ) {
        result =
            digits[String(number)[0]] +
            " " +
            hundred +
            " " +
            numbers[String(number)[2]];
        return result.trim();
    }
    if (
        number > 100 &&
        number <= 999 &&
        String(number)[2] > 0 &&
        String(number)[2] <= 10
    ) {
        result =
            digits[String(number)[0]] +
            " " +
            hundred +
            " " +
            digits[String(number)[2]];
        return result.trim();
    }
};
