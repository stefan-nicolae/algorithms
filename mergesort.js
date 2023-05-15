function merge(a, b) {
    let R = []
    while(1) {
        if(a[0] === undefined) { R = R.concat(b); return R }
        if(b[0] === undefined) { R = R.concat(a); return R }
        if(a[0] <= b[0]) { R.push(a.shift(0)) }
        else R.push(b.shift(0))
    }
}

function mergesort (a) {
    if(a.length === 1) return a
    const left = mergesort(a.splice(0, a.length/2))
    const right = mergesort(a)
    return merge(left, right)
}

console.log(mergesort([8, 2, 7, 4, 7, 1, 3, 9, 6, 5]))