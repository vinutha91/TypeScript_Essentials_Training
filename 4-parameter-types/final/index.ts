

function getTotal(a: number, b: number) {
    return a+b;
}

//getTotal(5, '6')
getTotal(5, 6);

// Union Type in TypeScript
function getTotalUnion(a: string | number, b: number) {
    return Number(a)+b;
}

//getTotal(5, '6')
getTotalUnion('5', 6);



// A function with no return statement has type void
function logStatements() {
    console.log('Hiii!!')
}
