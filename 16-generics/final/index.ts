function clone<T>(value:T):T {
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}

clone('Hello');
clone(123);
clone([1,2,3]);

class KeyValuePair<TKey, TValue> {
    public key: TKey;
    public value: TValue;
    constructor(key: TKey, value: TValue) {}
}

var pair1 = new KeyValuePair(1,'Ankit');
var pair2 = new KeyValuePair('Abc', ['def']);

pair2.value = ['Ankit'];