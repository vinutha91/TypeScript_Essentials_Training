// function getLength(x: string | any[], y: string | any[]) {
//     return x.length + y.length;
// }


function getLength(x: string | any[], y: string | any[]) {
    x.slice(0);

    if (x instanceof Array) {
        x.push('A')
    }

    if (x instanceof String) {
        x.toUpperCase();
    }
    return x.length + y.length;
}