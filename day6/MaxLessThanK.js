// find the maximum of AND operation from S = {1, ..., n} and is less thn k

function getMaxLessThanK(n, k) {
    let arr = [];
    for (let l = 1; l <= n; l++){
        arr[l] = l;
    }
    let maxN = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let res = i & j;
            if ((res < k) && (res > maxN)) {
                maxN = res;
            }
        }
    }
    return res;
}

console.log(getMaxLessThanK(5, 2));
