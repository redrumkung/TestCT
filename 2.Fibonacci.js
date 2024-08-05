const fibosnacci = (n) => {
    if ( n == 0 ) return 0
    if ( n == 1 ) return 1
    return fibosnacci(n-1) + fibosnacci(n-2)
}

console.log(fibosnacci(6))