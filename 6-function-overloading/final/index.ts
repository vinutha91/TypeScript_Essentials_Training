function getTotalLength(x: any[], y: any[]): number
function getTotalLength(x: string, y: string): number
function getTotalLength(x: string | any[], y: string | any[]): number {
    x.slice(0);

    if (x instanceof Array) {
        x.push('A')
    }

    if (x instanceof String) {
        x.toUpperCase();
    }
    return x.length + y.length;
}

getTotalLength('abc', 'def');