//My map
Array.prototype.myMap = function (callbackFunc) {
    const mapArr = [];
    for (let i = 0; i < this.length; i++) {
        mapArr.push(callbackFunc(this[i]));
    }
    return mapArr;
}

console.log([1, 2, 3].myMap(el => el * 2));


//My filter
Array.prototype.myFilter = function (callbackFunc) {
    const filterArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFunc(this[i])) {
            filterArr.push(this[i]);
        }
    }
    return filterArr;
}

console.log(['Maria', 'Demi', 'Louisa'].myFilter(el => el.length > 4));


//My group by
Array.prototype.myGroupBy = function (property) {
    let objOfArr = {};
    for (let i = 0; i < this.length; i++) {
        let object = this[i]
        let value = object[property];
        objOfArr[value] = objOfArr[value] || [];
        objOfArr[value].push(object);
    }
    return objOfArr;
}

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

console.log(people.myGroupBy('age')) //object of arrays of objects


//My reduce
/*Array.prototype.myReduce = function (callbackFunc, initialVal) {
    if (initialVal !== undefined) {
        let accumulator = initialVal;
        for (let i = 0; i < this.length; i++) {
            accumulator = callbackFunc(accumulator, this[i]);
        }
        return accumulator;
    } else {
        let accumulator = null;
        for (let i = 0; i < this.length; i++) {
            accumulator = callbackFunc(accumulator, this[i]);
        }
        return accumulator;
    }
}*/

Array.prototype.myReduce = function (callbackFunc, initialVal = null) {
    let accumulator = initialVal;
    for (let i = 0; i < this.length; i++) {
        accumulator = callbackFunc(accumulator, this[i]);
    }
    return accumulator;
}

console.log(['s', 'o', 'f'].myReduce((acc, el) => ({ ...acc, [el]: el })));
console.log([1, 2, 3].myReduce((acc, el) => acc + el))


//My map with reduce
Array.prototype.myMapII = function (callbackFunc) {
    return this.reduce((accumulator, currentVal) => {
        return (
            [...accumulator, callbackFunc(currentVal)]
        )
    },
        []);
}

console.log([1, 2, 3].myMapII(el => el * 2));


//My filter with reduce
Array.prototype.myFilterII = function (callbackFunc) {
    return this.reduce((accumulator, currentVal) => callbackFunc(currentVal) ? [...accumulator, currentVal] : accumulator, [])
}

console.log(['Maria', 'Demi', 'Louisa'].myFilterII(el => el.length > 4));


//My group by with reduce
Array.prototype.myGroupByII = function (property) {
    return this.reduce((accumulator, object) => {
        let value = object[property];
        accumulator[value] = accumulator[value] || [];
        accumulator[value].push(object);
        return accumulator;
    }, {});
}

console.log(people.myGroupByII('age')) 