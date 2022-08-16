function receivesAFunction(cb) {
    console.log(cb());
    

}

function returnsANamedFunction(){

    return function beforeall() {
        return "before all";
    };
}

function returnsAnAnonymousFunction(){

    return function () {
        return "before all";
    }
}
