function swap(a, i, j) {
    const t = a[j]
    a[j] = a[i]
    a[i] = t
}

function bubblesort (a) {
    while(true) {
        let done = true
        for(let i = 0; i < a.length - 1; i++) {
            if(a[i] > a[i + 1]) { 
                {
                    swap(a, i, i + 1)
                    done = false
                }
            }
        }
        if(done) return a
    }
}

console.log(bubblesort([8, 2, 7, 4, 7, 1, 3, 9, 6, 5]))