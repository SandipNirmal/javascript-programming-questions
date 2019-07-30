## JavaScript Interview Questions

1. What is ```1 + "1"``` and why?
    1. Ans: "11"
    2. Similarly, 1 + true? => 2
    
2. What is the best way to empty an array.
    1. loop through it and pop each element
    2. set length to zero i.e. a.length = 0;
    3. reassign with array i.e. a = []
    4. All will have same performance
    
3. What is Closure?

4. Have you used ES6, what are the feature you have used?

5. What is Promise?

6. What is an event loop?

7. Inheritance in JavaScript?

8. Output of following?

``` JavaScript
console.log(1);

setTimeout(() => {
  console.log(2)
}, 0);

console.log(3)
```
Why?

9. Output of following	

``` JavaScript
Promise.resolve()
	.then(()=> { throw Error()})
	.then(() => { console.log(1);})
	.catch(() => {console.log(2)})
	.then(() => {console.log(3)})
```
Ans: 2 3

Explain.

10. Read JavaScript array methods. map, filter, reduce, forEach.

11. What is output of following?

``` JavaScript
const a = "Delhi";
const b = new String("Delhi");
console.log(a == b);	// true
console.log(a === b);	// false
```

similarly

``` JavaScript
const arr1 = [];
const arr2 = [];

console.log(arr1 == arr2);	// false
console.log(arr1 === arr2);	// false
```

12. what will the following code output?

``` JavaScript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
```

Ans: 

```Index: 4, element: undefined``` (printed 4 times).

### Inteview Questins collection

1. https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z

### Free Course

1. https://classroom.udacity.com/courses/ud015 (One of the best course on Object Oriented JavaScript)

### Further reading

1. MDN (Mozilla Developer Network)
2. https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95
3. https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36#.ecfskj935
4. https://medium.freecodecamp.org/software-engineering-interviews-744380f4f2af
5. http://www.dofactory.com/javascript/design-patterns
6. https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q


