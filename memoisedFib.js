/*
	Write a function that calculates fibonacci for the given number. We want to cache the results generated for already accessed numbers. 
	Usage :  
		fibonacci(3); // 2
		fibonacci(3); // 2 (this time fetched from cache)
		
		0,1,1,2,3,5...
*/

const memoisedFib = ((num) => {
    let cache = {}
    
    return function fib(num) {
        
    const cachedResult = cache[num]
    
    if (cachedResult) {
        console.log('From Cache')
        return cachedResult
    } else {
        let result

        if (num <= 2) {
            result = 1
        } else {
         return fib(num - 1) + fib(num - 2)
        }

        cache[num] = result
        console.log('Calculated result')
        return result
    }
        
    }
})()

console.log(memoisedFib(3))
console.log(memoisedFib(3))
