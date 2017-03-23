function isEquals2(obj1, obj2) {
    var result = false;
    if (isObject(obj1)) {
        result = isObjEquals(obj1, obj2);
    } else {
        if (Array.isArray(obj1)) {
            result = isArrayEquals(obj1, obj2);
        } else {
            result = (obj1 === obj2);
        }
    }
    return result;
}


function isObject(obj) {
    return ((!!obj) && (obj.constructor === Object));
}

function isObjEquals(obj1, obj2) {
    var result = (isObject(obj1) && isObject(obj2));
    if (result) {
        result = ( Object.keys(obj1).length === Object.keys(obj2).length );
        if (result) {
            for (var key in obj1) {
                if (!isEquals2(obj1[key], obj2[key])) {
                    result = false;
                    break;
                }
            }
        }
    }
    return result;
}

function isArrayEquals(obj1, obj2) {
    var result = ( Array.isArray(obj1) && Array.isArray(obj2) );
    if (result) {
        result = (obj1.length === obj2.length);
        if (result) {
            for (var i = 0; i < obj1.length; i++) {
                if (!isEquals2(obj1[i], obj2[i])) {
                    result = false;
                    break;
                }
            }
        }
    }
    return result;
}



console.log( isEquals2( [1,2,3,4,5],[1] ) );    // true~
console.log( isEquals2( [1, 4, 5], [ 1, 4, [5] ] ) );    // false
console.log( '-------------' );
console.log( isEquals2( [ 1, { a: 4, b: {x: 1} } ], [1, { a: 4, b: {x: 1} } ] ) );    // true
console.log( isEquals2( { attr3: [1, 2] }, { attr3: [1, 2] } ) ); // true
console.log( isEquals2( { a: 1, c: { b: 1 } }, { a: 1, c: { b: 1 } } ) );    // true
