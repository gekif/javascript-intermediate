var add = function() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
};

console.log(add(10, 100, 1000, 344, 2323, 42323, 423433, 3423434));