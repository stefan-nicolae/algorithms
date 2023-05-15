function swap(a, i, j) {
    const t = a[j]
    a[j] = a[i]
    a[i] = t
}

function quicksort (a) {
    if(!a.length) return []
    let pivot = a[a.length - 1]
    let i = 0, j = 0; 
    while(j < a.length - 1) {
        if(a[j] < pivot) swap(a, i++, j)
        j++;
    }
    swap(a, i, a.length - 1) 
    pivot = a[i]
    const left = quicksort(a.slice(0, i))
    const right = quicksort(a.slice(i + 1, a.length))
    return left.concat([pivot].concat(right))
}   

console.log(quicksort([8, 2, 7, 4, 7, 1, 3, 9, 6, 5]))
