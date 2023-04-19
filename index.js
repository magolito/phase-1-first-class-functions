function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function Manuel() {
        console.log("Manuel");
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("anonymous");
    }
}



