/*
	Implement newMap and newFilter methods on Array Object. 
	
	let arr = [1,2,3];
	
	let filtered = arr.newFilter((item) => item === 1) // [1]

	The newFilter() method creates a new array with all elements that pass the test implemented by the provided function.
	
	let filtered1 = arr.newMap((item) => item * 2) // [2,4,6]

	The newMap() method creates a new array with the results of calling a provided function on every element in the calling array.
*/

/**
 * New Filter
 */
function newFilter (fn) {
    const result = []

    this.forEach((i) => {
        if (fn.call(null, i)) {
            result.push(i)
        }
    })
    
    return result
}

Array.prototype.newFilter = newFilter

let arr = [1,2,3];
	
let filtered = arr.newFilter((item) => item === 1) // [1]

console.log('filtered', filtered)

/**
 * New Map implementation
 */
function newMap(fn) {
    const result = []
    
    this.forEach((i) => {
        // console.log(fn.call(null, i))
        result.push(fn.call(null, i))
    })
    
    return result
}

Array.prototype.newMap = newMap

let filtered1 = arr.newMap((item) => item * 2)

console.log('filtered1', filtered1)

var releases = [
    {
                    "id": 70111470,
                    "title": "Die Hard",
                    "rating": 4.0,
                    "bookmark": [{ id: 432530, time: 65876586 }, { id: 432531, time: 65876586 }]
    },
    {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }, { id: 432533, time: 65876586 }]
    },
    {
                    "id": 65432445,
                    "title": "The Chamber",
                    "rating": 4.0,
                    "bookmark": []
    },
    {
                    "id": 675465,
                    "title": "Fracture",
                    "rating": 5.0,
                    "bookmark": [{ id: 432532, time: 65876586 }]
    }
];


console.log(releases.newFilter((item) => item.rating === 4).newMap(({id}) => ({id})))
