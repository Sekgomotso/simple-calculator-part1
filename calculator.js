function add(a,b) {
    return a + b;
}

module.exports = {
    add,
    addMultiple,
    multiply,
    multiplyMultiple
}

function addMultiple() {
    var addMultiple = 0;
    
    for (i = 0; i < arguments.length; i++) {
        addMultiple += arguments[i];
    }
    return addMultiple;
}

function multiply(a,b) {
    return a*b;
}


function multiplyMultiple() {
    var multiplyMultiple = 1;

    for (i = 1; i < arguments.length; i++) {
        multiplyMultiple *= arguments[i];
    }
    return multiplyMultiple;
}

