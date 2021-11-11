function foo1()
{
    return {
        bar: "hello"
    };
}

function foo2()
{
    return
        {
            bar: "hello"
        };
}

console.log(foo1()); 
console.log(foo2());
// What do these log?

//{ bar: 'hello' }
//undefined

// Explaination:
// in order to return an object using {} notation, 
// we must place '{' next to return statement
// hence, why 'foo1' is working correctly, logging '{ bar: 'hello' }
// but since '{' is placed on next line to return in 'foo2'
// 'foo2' returns undefined