function add(a,b) {
    return a + b;
}

module.exports = {
    add,
    sum,
    multiply,
    product
}

function sum() {
    var sum = 0;
    
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function multiply(a,b) {
    return a*b;
}


function product() {
    var product = 1;

    for (i = 1; i < arguments.length; i++) {
        product *= arguments[i];
    }
    return product;
}

