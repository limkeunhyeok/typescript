var split = function (str, delim) {
    if (delim === void 0) { delim = ""; }
    return str.split(delim);
};
console.log(split("hello"), // [ 'h', 'e', 'l', 'l', 'o' ]
split("h_e_l_l_o", "_") // [ 'h', 'e', 'l', 'l', 'o' ]
);
var join = function (strArray, delim) {
    if (delim === void 0) { delim = ""; }
    return strArray.join(delim);
};
console.log(join(["h", "e", "l", "l", "o"]), join(["h", "e", "l", "l", "o"], "_"));
